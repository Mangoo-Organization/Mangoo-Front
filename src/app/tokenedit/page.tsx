'use client'
import React from 'react'
import TokenPhoto from '../components/TokenPhoto/TokenPhoto'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/Sidebar/SideBar'
import * as Button from '../components/Button/Button'
import { InputSimple } from '../components/InputSimple/InputSimple'
import './style.css'

const page = () => {
  return (
    <>
    <NavBar/>
    <div className="tokenedit__container">
        <div className="tokenedit__sidebar">
            <SideBar text1='sidebar__text' text2='sidebar__text' text3='sidebar__textsub'/>
        </div>

        <div className="tokenedit__card">
            <div className="tokenedit__info">
              <div className="tokenedit__titulo">
                <h3>Informações do Token</h3>
                <p>Configuração de perfil do token</p>
              </div>

              <div className="tokenedit__tokenphoto">
                <TokenPhoto/>
                <div className="tokenedit__button-foto">
                  <Button.Green extra>Alterar foto</Button.Green>
                  <Button.Transparent>  Remover foto</Button.Transparent>
                </div>
              </div>

            </div>

            <div className="tokenedit__dados">
                <p className='tokenedit__dados-titulo'>Dados do Token</p>

                <div className="input__data">
                    <div className="boxes">
                      <p className='tokenedit__text'>Nome<span className='asterisk'>*</span></p>
                      <InputSimple extra placeholder='Instituição token'/>
                    </div>
                </div>

                <div className="input__data">
                    <div className="boxes">
                      <p className='tokenedit__text'>Simbolo<span className='asterisk'>*</span></p>
                      <InputSimple extra placeholder='IT'/>
                    </div>
                </div>
            
            </div>

            <div className="tokenedit__buttons">
                    <Button.Transparent>Cancelar</Button.Transparent>   
                    <Button.Green>Salvar</Button.Green>
            </div>

        </div>
    </div>
    </>
  )
}

export default page