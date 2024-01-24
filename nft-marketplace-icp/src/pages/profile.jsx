import React from 'react'
// import Transaction from '../components/trxn'
import MyNFTCard from '../components/myNftCard'
import NFTCard from '../components/nftCard';

function Profile({ mynfts, account, pastTrxns }) {
    console.log("nfts in profile", mynfts);
    return (
        <div>
            <div className="my-nfts">
                <h3>My NFTs</h3>

                <div className="my-nfts">
                    {mynfts.map((nft) => (
                        <MyNFTCard nft={nft} />
                    ))}
                </div>

                {/* {mynfts.map((nft) => (
                <div class="card my-card" style={{ width: "18rem" }}>
                    <img src={`../nft-images/${nft.id}.jpg`} class="card-img-top" alt="..." />
                    <div class="card-body my-card-body">
                <p class="card-text">{nft.description}</p>
            </div>
        </div>
            ))} */}

            </div>

            {/* <div className="past-trxns">
                <h3>Past Transactions</h3>
                {
                    pastTrxns.map((txn) => {
                        return (<Transaction key={txn.trxnHash} trxnHash={txn.trxnHash} />)
                    })
                }
            </div> */}
        </div>
    )
}

export default Profile
