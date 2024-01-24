import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3 from "web3";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import background from "../src/assets/bg.jpg";
import MintNFT from "./pages/mintNFT";
import { useState } from "react";
import NFTs from './data.json'

function App() {

  const [nfts, setNfts] = useState(NFTs);
  const [cart, setCart] = useState([]);
  const [myNfts, setMyNfts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (nft, index) => {
    nft.index = index;
    setCart([...cart, nft]);
    setTotalAmount(totalAmount + nft.price);
  };

  const removeFromCart = (nftToRemove, index) => {
    nftToRemove.index = index;
    setCart(cart.filter((nft) => nft.index !== index));
    setTotalAmount(totalAmount - nftToRemove.price);
  };

  const handlePayment = async () => {
    if (totalAmount === 0) {
      alert("Your cart can't be empty");
      return;
    }
    // let connectedAccount;
    // try {
    //   if (window.ethereum) {
    //     // const web3 = new Web3(window.ethereum);
    //     const bitfinityRpcUrl = 'https://rpc.bitfinity.com';
    //     const web3 = new Web3(bitfinityRpcUrl);
    //     await window.ethereum.request({ method: "eth_requestAccounts" });
    //     console.log("Wallet connected");
    //     const accounts = await web3.eth.getAccounts();
    //     connectedAccount = accounts[0];
    //     console.log(connectedAccount);
    //   }
    // } catch (error) {
    //   console.error("Error connecting wallet:", error);
    // }
    // const receiverAddress = "0x48552f18C05234D78Ec790d403eb1725DeC9939e";
    // // const web3 = new Web3(provider);
    // const web3 = new Web3(window.ethereum);
    // console.log("Connected Account: ", connectedAccount);
    // console.log("Receiver: ", receiverAddress);
    // console.log("Total Amount: ", totalAmount);
    // try {
    //   const trxnObj = {
    //     from: connectedAccount,
    //     to: receiverAddress,
    //     value: totalAmount,
    //     // gas: "30000",
    //   };
    //   const trxn = await web3.eth.sendTransaction(trxnObj);
    //   const trxnHash = trxn.transactionHash;
    //   console.log("Transaction sent.\n Hash: ", trxnHash);
    //   for (let i = 0; i < cart.length; i++) {
    //     NFTs[cart[i].index].isSold = true;
    //   }
    //   alert("Transaction successful!");
    //   setCart([]);
    //   setTotalAmount(0);
    //   const trxnURL = `https://sepolia.etherscan.io/tx/${trxnHash}`;
    //   const newTrxn = { trxnHash, trxnURL };
    //   // let transactions = [...pastTrxns, newTrxn]
    //   // setPastTrxns(transactions)
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Navbar cart={cart} totalAmount={totalAmount} setTotalAmount={setTotalAmount} setCart={setCart} setNfts={setNfts} handlePayment={handlePayment} removeFromCart={removeFromCart}/>
        <Routes>
          <Route index element={<Home nfts={nfts} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
          <Route path="/mint" element={<MintNFT />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
