import Image from 'next/image'
import './SideBar.css'
import React from 'react'
import { SidebarProps } from '@/types'

const SideBar = ({text1, text2, text3}: SidebarProps) => {
  return (
    <div className="sidebar__card">
    <div className="sidebar__header">
        <div className="sidebar__perfil">
        <Image
                src="./icones/sidebar_photo_perfil.svg"
                alt= "user icon"
                width={76.8}
                height={76.8}/>
            <p className="sidebar__perfil-text">Fulano <br /> <span className='sidebar__perfil-span'>proprietário</span></p> 
        </div>
        <div >
            <p className={text1}>Minha Conta</p>
            <p className={text2}>Instituição</p>
            <p className={text3}>Token</p>
            <p className='sidebar__text'>Sair</p>
        </div>


      

    </div>
</div>
  )
}

export default SideBar