import { SPLITPAY_CONTRACT_ADDRESS } from "@/pages";
import { usePublicClient, useWalletClient } from "wagmi";
import SplitPayAbi from "../abis/SplitPay";
import StableToken from "@celo/abis/StableToken.json";
import { formatEther } from "viem";

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
            let hash = await walletClient.writeContract({
                abi: StableToken.abi,
                address: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
                functionName: "approve",
                args: [SPLITPAY_CONTRACT_ADDRESS, amount],
            });

            await publicClient.waitForTransactionReceipt({ hash });
        }
    }

    async function callSettle() {
        if (walletClient) {
            let hash = await walletClient.writeContract({
                address: SPLITPAY_CONTRACT_ADDRESS,
                abi: SplitPayAbi,
                functionName: "settle",
                args: [settlementId],
            });
            await publicClient.waitForTransactionReceipt({ hash });
        }
    }

    async function settle() {
        if (walletClient) {
            await approveCUSD();
            await callSettle();
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
