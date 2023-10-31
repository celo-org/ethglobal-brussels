import { SPLITPAY_CONTRACT_ADDRESS } from "@/pages";
import { usePublicClient, useWalletClient } from "wagmi";
import SplitPayAbi from "../abis/SplitPay";
import StableToken from "@celo/abis/StableToken.json";
import { formatEther } from "viem";
import toast from "react-hot-toast";
import { STABLE_TOKEN_ADDRESS } from "@/SocialConnect/utils";

type SettleProps = {
    className?: string;
    paid?: boolean;
    title: string;
    amount: bigint;
    settlementId: number;
};

function Settle(props: SettleProps) {
    const { data: walletClient } = useWalletClient();
    const publicClient = usePublicClient();

    let { className, title, paid, amount, settlementId } = props;

    async function approveCUSD() {
        if (walletClient) {
            let approveToast = toast.loading("Approving cUSD", {
                position: "top-center",
                duration: 10000,
            });

            try {
                let hash = await walletClient.writeContract({
                    abi: StableToken.abi,
                    address: STABLE_TOKEN_ADDRESS,
                    functionName: "approve",
                    args: [SPLITPAY_CONTRACT_ADDRESS, amount],
                });

                await publicClient.waitForTransactionReceipt({ hash });

                toast.success("cUSD Approved!", { id: approveToast });
            } catch (e) {
                toast.error("Something Went Wrong", { id: approveToast });
                throw Error("Something went wrong");
            }
        }
    }

    async function callSettle() {
        if (walletClient) {
            let settleToast = toast.loading("Settling", {
                position: "top-center",
                duration: 10000,
            });

            try {
                let hash = await walletClient.writeContract({
                    address: SPLITPAY_CONTRACT_ADDRESS,
                    abi: SplitPayAbi,
                    functionName: "settle",
                    args: [settlementId],
                });
                await publicClient.waitForTransactionReceipt({ hash });
                toast.success("Settled!", { id: settleToast });
            } catch (e) {
                toast.error("Something went wrong", { id: settleToast });
            }
        }
    }

    async function settle() {
        if (walletClient) {
            approveCUSD()
                .then(async () => {
                    await callSettle();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    return (
        <div
            className={`w-full px-4 py-4 border-b border-black items-center flex justify-between ${className}`}
        >
            <div>
                <h3>{title}</h3>
                <div className="flex items-center gap-x-2">
                    {paid ? (
                        <span className="text-green-600">Settled</span>
                    ) : (
                        <span className="text-red-600">Pending</span>
                    )}
                </div>
            </div>
            <div className="flex space-x-2 items-center">
                {!paid && (
                    <button
                        onClick={settle}
                        className="border border-black p-2"
                    >
                        Settle
                    </button>
                )}
                <h3>{formatEther(amount)} cUSD</h3>
            </div>
        </div>
    );
}

export default Settle;
