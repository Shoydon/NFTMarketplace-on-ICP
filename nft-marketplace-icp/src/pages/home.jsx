import React from 'react'

import NFTCard from '../components/nftCard'

import '../styles/home.css'

function Home({ nfts, addToCart, removeFromCart }) {

  return (
    <div className='home'>
      {nfts.map((nft, index) => !nft.isSold && (
        <NFTCard nft={nft} addToCart={addToCart} removeFromCart={removeFromCart} index={index}/>
      ))}
    </div>
  )
}

export default Home
