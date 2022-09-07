import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

import dotenv from "dotenv";
dotenv.config()

// If the network you want to deploy to requires an Infura key
// specify it in the environment variable INFURA_KEY
const RINKEBY_PRIVATE_KEY: string | any = process.env.RINKEBY_PRIVATE_KEY;
const config: HardhatUserConfig = {

  
  solidity: {
    version: "0.8.9",
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/solidity-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },  networks: {
    rinkeby: {
      // url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      // accounts: [RINKEBY_PRIVATE_KEY]
      url:`https://rinkeby.infura.io/v3/${process.env.ALCHEMY_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY]

    },
    hardhat: {
      chainId: 1337
    },
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: {
      rinkeby: "SQ9Y9WPXIZRR5EN94CY2T1YDKW77I6Q3YD"
    }
  }

  
  
};

export default config;
