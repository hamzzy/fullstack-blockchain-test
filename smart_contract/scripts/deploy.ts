import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const Vehicle = await ethers.getContractFactory("VehicleManager");
  const  vehicle = await Vehicle.deploy();


  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log("contract address:", vehicle.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
