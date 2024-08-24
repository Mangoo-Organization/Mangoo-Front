import Image from 'next/image'
import React from 'react'
import './UploadImage.css'

const UploadImage = () => {
  return (
    <div className='uploadimage'>
      <div className='uploadimage__container'>
        <Image
          src="./icones/delete_uploadimage.svg"
          alt='X upload image modal'
          width={25}
          height={25}
          className='uploadimage__delete-icon'/>
        <div className='uploadimage__border'>
          <Image
            src="./icones/icon_file_uploadimage.svg"
            alt='icon file image'
            width={220}
            height={220}
            />
            <div className='uploadimage__text'>
              <p className='uploadimage__text-p1'>Arraste ou <span className='uploadimage__text-span'>Selecione uma imagem</span> <p className='uploadimage__text-p2'>Formatos suportados: PNG, JPG, JPEG</p></p>
            </div>
            
            
        </div>
      </div>
      
    </div>
    
  )
}

export default UploadImage