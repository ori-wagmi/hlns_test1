require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hyperliquid: {
      url: `https://api.hyperliquid-testnet.xyz/evm`	,
      accounts: [process.env.PRIVKEY],
    },
  },

};
