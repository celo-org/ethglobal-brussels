const hre = require("hardhat");

async function addExpense(address) {
    let splitPay = await ethers.getContractAt("SplitPay", address);

    await splitPay.createExpense(
        "Dinner at Gateway",
        ethers.utils.parseEther("1"),
        [
            "0x4f4c70c011b065dc45a7a13cb72e645c6a50dde3",
            "0x54a8c3cafc55e19a1c7af46c571d0fbef3e830f5",
        ]
    );
    console.log("Expense added!");
}

async function deploy() {
    const SplitPay = await hre.ethers.getContractFactory("SplitPay");
    const splitPay = await SplitPay.deploy(
        "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"
    );
    await splitPay.deployed();

    console.log("SplitPay deployed to:", splitPay.address);
}

async function main() {
    await deploy();
    // await addExpense("0xb6f2469Df91A6D73DBC731c3bA385007f6c683d1");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
