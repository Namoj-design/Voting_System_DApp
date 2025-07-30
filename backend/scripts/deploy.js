const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");
  const parties = ["Party A", "Party B", "Party C"];
  const voting = await Voting.deploy(parties);
  await voting.deployed();

  console.log("Voting deployed to:", voting.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
