async function main() {
  const BookApp = await ethers.getContractFactory("BookApp");
  // Start deployment, returning a promise that resolves to a contract object
  const bookApp = await BookApp.deploy();
  console.log("Contract deployed to address:", bookApp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//  Contract deployed to address: 0x3Df76862cd7dc63a480194B3B8Ff0A9A14D14324