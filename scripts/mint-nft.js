require("dotenv").config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
//const PRIVATE_KEY = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/BookApp.sol/BookApp.json");// calling MyNFT json 

//console.log(JSON.stringify(contract.abi));

const contractAddress = "0xa97033797283633D6EbCf55F877166D4563d0Aff";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress); //Creating instance of contract
//create transaction
async function addBook(rack,title, bookName, genre, price) {
  //const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //the transaction
  // const tx = {
  //   from: PUBLIC_KEY,
  //   to: contractAddress,
  //   nonce: nonce,
  //   gas: 500000,
  //   data: nftContract.methods.addBook(rack,title, bookName, genre, price).encodeABI(),
  // };

  // const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  // signPromise
  //   .then((signedTx) => {
  //     web3.eth.sendSignedTransaction(
  //       signedTx.rawTransaction,
  //       (err, hash) => {
  //         if (!err) {
  //           console.log(
  //             "The hash of your transaction is: ",
  //             hash,
  //             "\nCheck Alchemy's Mempool to view the status of your transaction!"
  //           );
  //         } else {
  //           console.log(
  //             "Something went wrong when submitting your transaction:",
  //             err
  //           );
  //         }
  //       }
  //     );
  //   })
  //   .catch((err) => {
  //     console.log(" Promise failed:", err);
  //   });
}
addBook(1,"title1", "bookName1", "genre1", 11);