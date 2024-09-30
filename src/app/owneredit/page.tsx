'use client'
import Dropdown from "../components/Dropdown/Dropdown"
import { InputSimple } from "../components/InputSimple/InputSimple"
import NavBar from "../components/NavBar/NavBar"
import ProfilePhoto from "../components/ProfilePhoto/ProfilePhoto"
import SideBar from "../components/Sidebar/SideBar"
import * as Button from '../components/Button/Button'
import "./style.css"
import { useEffect, useState } from "react"
const OwnerEdit = () => {
    const [data, setData] = useState<any[]>([]);
    const token = '7aff3ca8d54af3c11ce9fd39884cd082db1232e1'; 
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch('http://45.174.64.137:8000/api/v1/user/1/', {
              method: 'GET',
              headers: {
                'Authorization': `Token ${token}`,  
                'Content-Type': 'application/json',
              },
            });
      
            if (!response.ok) {
              throw new Error('Erro ao buscar o usuário');
            }
      
            const result = await response.json();
            console.log(result);
            setData(result)
            console.log("deu certo")
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchUserData();
      }, []);
    return(
        <>
        <NavBar/>
        <div className="owneredit__container">
            <div className="owneredit__sidebar">
                <SideBar minhaConta='sidebar__textsub' instituicao='sidebar__text' token='sidebar__text'/>
            </div>

            <div className="owneredit__card">
                <div className="owneredit__info">
                    <div className="owneredit__titulo">
                        <h3>Informações Pessoais</h3>
                        <p>Configuração de perfil</p>
                    </div>
                    
                    <div className="owneredit__profilephoto">
                        <ProfilePhoto/>
                        <div className="owneredit__button-foto">
                            <Button.Green extra>Alterar foto</Button.Green>
                            <Button.Transparent>  Remover foto</Button.Transparent>
                        </div>  
                    </div>

                </div>
                <div className="owneredit__dados">
                    <p className="owneredit__dados-titulo">Dados Pessoais</p>

                    <div className="input__data">
                            <div className='boxes'>
                                <p className='owneredit__text'>Nome<span className='asterisk'>*</span></p>
                                <InputSimple extra placeholder='Fulano' value={data}></InputSimple>
                                
                            </div>
                            <div className='boxes'>
                                <p className='owneredit__text'>Email<span className='asterisk'>*</span></p>
                                <InputSimple  extra placeholder='fulano@gmail.com'></InputSimple>
                            </div>
                            
                    </div>
                    
                    <div className="input__data">
                            <div className='boxes'>
                                <p className='owneredit__text'>CPF<span className='asterisk'>*</span></p>
                                <InputSimple  placeholder='Nome da instituição'></InputSimple>
                            </div>
                            <div className='boxes'>
                                <p className='owneredit__text'>Telefone 1<span className='asterisk'>*</span></p>
                                <InputSimple  placeholder='Nome da instituição'/>
                            </div>
                            <div className='boxes'>
                                <p className='owneredit__text'>Telefone 2</p>
                                <InputSimple  placeholder='Nome da instituição'/>
                            </div>
                           
                        </div>
                    <div className="input__data">
                        <div className="boxes">
                            <div>
                                <p className='owneredit__text'>Como podemos te chamar?<span className='asterisk'>*</span></p>
                                <Dropdown options={["ele/dele", "ela/dela"]} onOptionClick={console.log} title="Pronomes" placeholder="Selecione a opção preferida"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owneredit__buttons">
                    <Button.Transparent>Cancelar</Button.Transparent>   
                    <Button.Green>Salvar</Button.Green>
                </div>
                
            </div>

        </div>
       
        </>
    )
}

export default OwnerEdit
