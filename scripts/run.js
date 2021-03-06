const { hexStripZeros } = require("@ethersproject/bytes")

const main = async () => {
  // hre = hardhat runtime environment
  // everytime we npx hardhat, hre object is built on the fly using hardhat.config.js

  const [owner, randomPerson] = await hre.ethers.getSigners();
  // this compiles our contract and generate necessary files under the artifacts directory
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed()

  console.log("Contract deployed to: ", waveContract.address);
  console.log("Contract deployed by: ", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn - await waveContract.connect(randomPerson).wave()
  await waveTxn.wait()

  waveCount = await waveContract.getTotalWaves();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
};

runMain();