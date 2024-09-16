import Image from 'next/image'
import React from 'react'
import './TokenPhoto.css'

const TokenPhoto = () => {
  return (
    <div className='token-photo__card'>
        <p>Imagem do Token</p>
        <Image
            src="./icones/TokenImage.svg"
            alt="imagem do tokem"
            width={175.14}
            height={175.14}/>
    </div>
  )
}

export default TokenPhoto