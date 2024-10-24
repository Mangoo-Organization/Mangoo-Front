'use client'
import React from 'react'
import { useRouter } from 'next/navigation' // ou 'next/router' dependendo da versão
import './style.css'
import * as Button from "../components/Button/Button";
import Image from 'next/image'
import MangooIcon from '../../../public/icones/mangoo-icon.svg'

const WithoutPermission = () => {

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/choosen-profile');
  }

  return (
    <div className='permission__container'>
      <Image
        src={MangooIcon}
        alt='mangoo icon'
        width={53}
        height={49}
      />
    <p className='permission__title'>Você não tem permissão para acessar essa página.</p>
    <Button.Green extra onClick={handleLoginClick}>Fazer login</Button.Green>
    </div>
  )
}

export default WithoutPermission