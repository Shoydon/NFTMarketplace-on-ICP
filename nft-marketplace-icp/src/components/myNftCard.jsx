import React from 'react'

import '../styles/myNftCard.css'

function MyNFTCard({ nft }) {

    console.log("nfts in mynftcard", nft);
    return (
        
        // <div class="card m-3">
        //     <div className="card-img">
        //         <img src={(`../nft-images/${nft.id}.jpg`)} class="card-img card-img-top" alt={nft.id} />
        //     </div>
        //     <div class="card-body">
        //         <h5 class="card-title">{nft.id}</h5>
        //         <p class="card-text">{nft.description}</p>
        //     </div>
        // </div>
        <div class="card my-card m-3" style={{ width: "250px", height:"250px" }}>
            {/* <img src={(`../nft-images/${nft.id}.jpg`)} class="card-img-top card-img" alt={nft.id} /> */}
            <div className="card-img">
                <img src={require(`../nft-images/cryptopunk0.jpg`)} class="card-img-top card-img" alt={nft.id} />
            </div>
            <div class="card-body my-card-body">
                <p class="card-text">{nft.description}</p>
                <p class="card-text">hello</p>
            </div>
        </div>
    )
}

export default MyNFTCard
