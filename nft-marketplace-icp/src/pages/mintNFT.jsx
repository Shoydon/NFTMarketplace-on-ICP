import React, { useState } from 'react'
import '../styles/mintNFT.css'

function MintNFT() {

  const [file, setFile] = useState('');

  const handleUpload = () => { }

  return (
    <div>
      <div className="mintForm">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-lg-6 col-xl-4 border border-5 rounded shadow mt-3 p-3 mintNFT">
            <h3 class="fw-bolder text-center my-3">Mint Your NFT</h3>
            <hr />
            <div class="mt-3 mb-3">
              <label htmlFor="nft-name" class="form-label fw-bold text-primary">
                NFT name
              </label>
              <input type="text" class="form-control" id="nft-name" placeholder="cryptopunk007"
              />
            </div>
            <div class="mt-4 mb-3">
              <label htmlFor="nft-description" class="form-label fw-bold text-primary">NFT description</label>
              <textarea class="form-control" id="nft-description" rows="3" placeholder="Decribe your NFT"></textarea>
            </div>
            <div class="mt-3 mb-3">
              <label htmlFor="nft-price" class="form-label fw-bold text-primary">NFT price (in wei)</label>
              <input type="number" class="form-control" id="nft-price" placeholder="100 wei" />
            </div>
            <div>
              <label htmlFor="formFile" class="form-label">
                Upload image
              </label>
              <input class="form-control" accept="image/*" type="file" id="formFile" onChange={(e) => { setFile(e.target.files[0]) }} />
            </div>
            <div class="mt-4 mb-3">
              <button class="btn btn-primary mt-3 shadow" type="submit" id="mint-nft" onClick={handleUpload}> Mint my NFT </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MintNFT
