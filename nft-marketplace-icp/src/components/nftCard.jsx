import React from 'react'
import { TbShoppingBagPlus, TbShoppingBagMinus } from "react-icons/tb";


import '../styles/nftCard.css'

function NFTCard({ nft, addToCart, index, removeFromCart }) {


  const handleAddToCart = () => {
    if(!nft.isAdded){
        nft.isAdded = true;
        addToCart(nft, index);
    }
};

const handleRemoveFromCart = () => {
    if(nft.isAdded){
        nft.isAdded = false;
        removeFromCart(nft, index)
    }
}


  return (
    <div class="card m-3">
      <img src={require(`../nft-images/${nft.id}.jpg`)} class="card-img-top" alt={nft.id} />
      <div class="card-body">
        <h5 class="card-title">{nft.id}</h5>
        <p class="card-text">{nft.description}</p>
        {nft.isAdded ? <button className='btn btn-danger' onClick={handleRemoveFromCart}>Remove from cart <TbShoppingBagMinus />
</button> : <button className='btn btn-success' onClick={handleAddToCart}>Add to cart <TbShoppingBagPlus/></button>}
        <div class="card-footer bg-transparent border-success mt-2">Price: {nft.price} BFT</div>
      </div>
    </div>
  )
}

export default NFTCard
