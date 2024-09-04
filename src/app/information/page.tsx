'use client'
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import './style.css'
import ProfilePhoto from "../components/ProfilePhoto/ProfilePhoto";
import InputDefault from "../components/InputDefault/InputDefault";
import { InputSimple } from "../components/InputSimple/InputSimple";
import Dropdown from "../components/Dropdown/Dropdown";
import * as Button from '../components/Button/Button'
import Checkbox from "../components/CheckBox/Checkbox";

export default function Information() {
  return(
    <>
    <NavBar/>
    <div className="information__container">
          <div className="information__imagem-progesso">

          <Image
            src="./icones/progress-bar1.svg"
            alt="Imagem progresso 1"
            width={650}
            height={50}
          />
          
          </div>          
          <div className="information__info">
              <p className="card__title">Suas Informações</p>
              <div className="information__border"/>

              

                <div className="information__profilephoto">
                  <ProfilePhoto/>
                  <p className="information__info-p2">Adicionar uma foto</p>
                </div>
            
                
              
              
              
              <div className="container__inputs"> 

                    <div className="container__personal-data">
                        <p className="container__titulo">Dados Pessoais</p>

                        <div className="input__data1">
                            <div className='boxes'>
                                <p className='institution__text'>Nome Completo<span className='asterisk'>*</span></p>
                                <InputSimple extra placeholder='Nome da instituição'/>
                            </div>
                            <div className='boxes'>
                                <p className='institution__text'>Telefone 1<span className='asterisk'>*</span></p>
                                <InputSimple  placeholder='Nome da instituição'/>
                            </div>
                            <div>
                                <p className='institution__text'>Telefone 2 <span> - Opcional</span></p>
                                <InputSimple  placeholder='Nome da instituição'/>
                            </div>
                        </div>


                        <div className="input__data2">
                            <div className='boxes'>
                                <p className='institution__text'>CPF<span className='asterisk'>*</span></p>
                                <InputSimple  placeholder='Nome da instituição'/>
                            </div>
                            <div>
                                <p className='institution__text'>Como podemos te chamar?<span className='asterisk'>*</span></p>
                                <Dropdown options={["ele/dele", "ela/dela"]} onOptionClick={console.log} title="Pronomes" placeholder="Selecione a opção preferida"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="information__checkbox">
                      <Checkbox content="Aceito os termos de serviço"/>
                      <Checkbox content="Desejo receber atualizações por e-mail"/>
                    </div>
            
            </div>

            <div className="information__buttons">
                <Button.Transparent extra>Voltar</Button.Transparent>
                <Button.Green extra>Avançar</Button.Green>
            </div>
            
          
          
          </div>
        
      
      
    </div>
  
    
    </>
  )
}