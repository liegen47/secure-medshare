// const hre = require("hardhat");

// async function main() {
//   const Upload = await hre.ethers.getContractFactory("Upload");
//   const upload = await Upload.deploy();

//   await upload.deployed();

//   console.log("Library deployed to:", upload.address);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


const hre = require("hardhat");

async function main() {
  // Replace "Upload" with the actual name of your Solidity contract
  const ContractFactory = await hre.ethers.getContractFactory("Upload");

  // Deploy the contract
  const contract = await ContractFactory.deploy();

  // Wait for the contract to be mined
  await contract.waitForDeployment();

  // Print the contract address
  console.log("Contract deployed to:", contract.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
