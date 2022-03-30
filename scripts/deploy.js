const { ethers } = require("hardhat")

async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles")
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET")

  await cryptoBeetles.deployed()
  console.log(`Contract successfully deployed to ${cryptoBeetles.address}`)

  const newItemId = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmWbp38odacPEwTzWfsqbVwXK7VFgyCqU4q2ThJvm8qZa3")
  console.log(`NFT minted successfully :: ${newItemId}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
