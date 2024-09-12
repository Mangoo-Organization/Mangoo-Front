'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import Dropdown from "../components/Dropdown/Dropdown";
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin'
import Student from '../../../public/icones/student_choosen2.svg'
import Teacher from '../../../public/icones/teacher_choosen2.svg'
import Owner from '../../../public/icones/owner_choosen2.svg'

 const ChoosenProfile = () => {
  return (
    <div>
        <NavBar/>

        <div className='container__choosen'>

            <div className='student__choosen'>
              <div className='container__text__choosen'>
                <p className='choosen__title'>Estudante</p>
                <p className='choosen__subtitle'>Clique aqui para fazer Login ou cadastrar-se</p>
                <div className='container__img__student'>
                  <Image
                  src={Student}
                  alt='student choosen'
                  />
                </div>
              </div>  
            </div>

            <div className='teacher__choosen'>
              <div className='container__text__choosen'>
                <p className='choosen__title'>Professor</p>
                <p className='choosen__subtitle'>Clique aqui para fazer Login ou cadastrar-se</p>
                <div className='container__img__teacher'>
                <Image
                  src={Teacher}
                  alt='teacher choosen'
                  />
                </div>
              </div>  
            </div>

            <div className='owner__choosen'>
              <div className='container__text__choosen'>
                <p className='choosen__title'>Proprietário</p>
                <p className='choosen__subtitle'>Clique aqui para fazer Login</p>
                <div className='container__img__owner'>
                <Image
                  src={Owner}
                  alt='owner choosen'
                  />
                </div>
              </div>  
            </div>
        </div>
    </div>
  )
}

export default ChoosenProfile