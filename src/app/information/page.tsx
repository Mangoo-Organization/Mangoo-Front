'use client'
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import './style.css'
import ProfilePhoto from "../components/ProfilePhoto/ProfilePhoto";
import InputDefault from "../components/InputDefault/InputDefault";
import { InputSimple } from "../components/InputSimple/InputSimple";
import Dropdown from "../components/Dropdown/Dropdown";
import { Attention, Disable, Focused, Green } from "../components/Button/Button";
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
          <p className="information__info-p">Suas Informações</p>
          <div className="information__border"/>
            <ProfilePhoto/>
            <p className="information__info-p2">Adicionar uma foto</p>
          
          
          
          <div className="information__dadospessoais">
            <div className="box1">
              <p className="information__info-p3">Dados Pessoais</p>
            </div>
            <div className="information__border2"></div>

            <div className="box2">
              <p className="text1">Nome Completo <span>*</span></p> 
              <p className="text2">Telefone 1<span>*</span></p>
              <p className="text3">Telefone 2</p>
            </div>
            <div className="box3">
              <InputSimple extra/>
              <InputSimple/>
              <InputSimple/>
            </div>
            <div className="box2">
              <p className="text1">CPF <span>*</span></p> 
              <p className="text4">Como podemos te chamar?<span>*</span></p>
              
            </div>
            <div className="box4">
              <InputSimple/>
              <div className="box5"><Dropdown options={["opção 1", "opção 2", "opção 3", "opção 4"]}  placeholder="selecione a opção escolhida" title="Como podemos te chamar?" onOptionClick={console.log}/></div>
              
            </div>

            <div className="information__checkbox1">
              <Checkbox content="Aceito os termos de serviço"/>
            </div>
            <div className="information__checkbox2">
              <Checkbox content="Desejo receber atualizações"/>
            </div>

            <div className="information__buttons">
              <Attention extra>Voltar</Attention>
              <Green extra>Avançar</Green>
             
            </div>
            

         </div>
         
      
      
      </div>
     
      
      
    </div>
  
    
    </>
  )
}