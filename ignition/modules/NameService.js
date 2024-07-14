const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const nameService = m.contract("NameService");

  return { nameService };
});
