import Image from 'next/image'
import React from 'react'
import './ProfilePhoto.css'

const ProfilePhoto = () => {
  return (
    <div className='profile-photo__card'>
        <p className='profile-photo__p'>Foto de Perfil</p>
        <Image
            src="./icones/profilePhoto_photo.svg"
            alt="foto de perfil"
            width={175.14}
            height={175.14}/>

    </div>
  )
}

export default ProfilePhoto