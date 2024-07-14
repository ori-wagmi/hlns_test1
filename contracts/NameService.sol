// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NameService is ERC721 {
    constructor() ERC721("NameService", "NS") {}

    uint256 public totalSupply = 0;
    mapping(string => uint256) public nameToId;
    mapping(string => address) public nameToAddress;

    event DomainMinted(string domain, address owner);

    function issueName(
        string memory _name,
        address _owner
    ) external {
        require(nameToId[_name] == 0, "Name already minted");
        totalSupply++;
        nameToId[_name] = totalSupply;
        _mint(_owner, totalSupply);
        emit DomainMinted(_name, _owner);
    }

    function setAddress(
        string memory _name,
        address _address
    ) external {
        require(_ownerOf(nameToId[_name]) == msg.sender, "Caller is not owner");
        nameToAddress[_name] = _address;
    }
}