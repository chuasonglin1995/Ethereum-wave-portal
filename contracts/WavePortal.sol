// SPDX-Lience-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {

  uint256 totalWaves;

  constructor() {
    console.log("Yo yo, I am a contract and I am smart");
  }

  function wave() public {
    totalWaves +=1;
    // can get msg.sender from the wallet address of the person who called
    console.log("%s has waved!", msg.sender);
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("We have %d total waves: ", totalWaves);
    return totalWaves;
  }
}