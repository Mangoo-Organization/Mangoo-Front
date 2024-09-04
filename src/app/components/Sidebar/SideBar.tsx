import Image from 'next/image'
import './SideBar.css'
import React from 'react'

const SideBar = () => {
  return (
    <div className="sidebar__container">
    <div className="sidebar__header">
        <div className="sidebar__perfil">
        <Image
                src="./icones/sidebar_photo_perfil.svg"
                alt= "user icon"
                width={76.8}
                height={76.8}/>
            <p className="sidebar__perfil-text">Fulano <br /> <span className='sidebar__perfil-span'>proprietário</span></p> 
        </div>
        <div className='sidebar__textsub'>
            <p>Minha Conta</p>
        </div>

        <div className='sidebar__text'>
            <p>Instituição</p>
            <p>Token</p>
            <p>Sair</p>
        </div>

      

    </div>
</div>
  )
}

export default SideBar