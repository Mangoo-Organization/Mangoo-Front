import Image from 'next/image'
import './SideBar.css'
import React from 'react'

import { SidebarProps } from '@/types'
import { useRouter } from 'next/navigation'

const SideBar = ({minhaConta, instituicao, token}: SidebarProps) => {

  const router = useRouter()
  
  const handleNavigationToken = () => {
    router.push('/tokenedit')
  }
  const handleNavigationOwner = () => {
    router.push('/owneredit')
  }
  const handleNavigationinstitution = () => {
    router.push('/instituedit')
  }




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
            <p className={minhaConta} onClick={handleNavigationOwner}>Minha Conta</p>
            <p className={instituicao} onClick={handleNavigationinstitution}>Instituição</p>
            <p className={token} onClick={handleNavigationToken}>Token</p>
            <p className='sidebar__text'>Sair</p>
        </div>


      

    </div>
</div>
  )
}

export default SideBar