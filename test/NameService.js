const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Name Service Test", function () {
  it("Issue, set, and resolve", async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    const NameService = await ethers.getContractFactory("NameService");
    const nameService = await NameService.deploy();

    const name = "test.hl";

    await nameService.issueName(name, owner.address);

    expect(await nameService.nameToId(name)).to.equal(BigInt(1));
    expect(await nameService.nameToAddress(name)).to.equal(ethers.ZeroAddress);
    expect(await nameService.ownerOf(1)).to.equal(owner.address);

    await nameService.setAddress(name, otherAccount.address);
    expect(await nameService.nameToAddress(name)).to.equal(otherAccount.address);
  });
});

