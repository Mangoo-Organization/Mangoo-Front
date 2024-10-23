'use client'

import React from 'react'
import './style.css'
import NavBar from '../../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../../components/InputSimple/InputSimple'
import * as Button from '../../components/Button/Button'


 const information = () => {
  return (
    <div>
        <NavBar/>
        <div className='institution__image-progress'>
            <Image
                src="./icones/progress-bar2.svg"
                alt='segunda imagem da barra de progresso'
                width={650}
                height={50}/>
        </div>
        <div className="institution__card">
            <p className='titulo__card'>Sobre a instituição</p>
            <div className="div__line"></div>

            {/* Container with inputs to submit institution informations */}
            <div className="container__inputs">

                    <div className="container__dados-institucionais">
                            <p className='titulo__containers1'>Dados Institucionais</p>

                            <div className="box__dados-institucionais">
                                <div className='boxes'>
                                    <p className='institution__text'>Nome instituição<span className='asterisk'>*</span></p>
                                    <InputSimple extra placeholder='Nome da instituição'/>
                                </div>
                                <div>
                                    <p className='institution__text'>CNPJ<span className='asterisk'>*</span></p>
                                    <InputSimple placeholder='xx.xxx.xxx/xxxx-xx'/>
                                </div>
                            </div>

                            <div className="box__dados-institucionais">
                                <div className='boxes'>   
                                    <p className='institution__text'>E-mail da instituição<span className='asterisk'>*</span></p>
                                    <InputSimple extra placeholder='Email da Instituição'/>
                                </div>
                                <div>   
                                    <p className='institution__text'>Telefone da instituição<span className='asterisk'>*</span></p>
                                    <InputSimple placeholder='(xx) xxxxx-xxxx'/>
                                </div>
                            </div>
                    </div>


                    <div className="container__endereco">
                        <p className="titulo__containers2">Endereço</p>
                        
                        <div className="box__dados-institucionais">
                                <div className='boxes'>
                                    <p className='institution__text'>CEP<span className='asterisk'>*</span></p>
                                    <InputSimple placeholder='xxxxx-xxx'/>
                                </div>
                                <div className='boxes'>
                                    <p className='institution__text'>Cidade<span className='asterisk'>*</span></p>
                                    <InputSimple placeholder='Ex: Fortaleza'/>
                                </div>
                                <div>
                                    <p className='institution__text'>Estado<span className='asterisk'>*</span></p>
                                    <InputSimple placeholder='Ex: Ceará'/>
                                </div>
                        </div>

                        <div className="box__dados-institucionais">
                                <div className='boxes'>   
                                    <p className='institution__text'>Número<span className='asterisk'>*</span></p>
                                    <InputSimple placeholder='Email da Instituição'/>
                                </div>
                                <div>   
                                    <p className='institution__text'>Complemento <span className='optional'>- Opcional</span></p>
                                    <InputSimple extra placeholder='(xx) xxxxx-xxxx'/>
                                </div>
                        </div>
                    </div>
            </div>
            <div className="buttons">
                <Button.Transparent extra>Voltar</Button.Transparent>
                <Button.Green extra>Avançar</Button.Green>
            </div>
        </div>
    </div>
  )
}

export default information