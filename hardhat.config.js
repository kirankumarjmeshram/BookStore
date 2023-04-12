require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
const {API_URL, PRIVATE_KEY} = process.env ;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    
    // hardhat: {
    //   chainId: 1337
    // },
   
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


