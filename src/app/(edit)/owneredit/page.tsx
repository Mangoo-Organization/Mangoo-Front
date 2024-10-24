'use client';
import Dropdown from "../../components/Dropdown/Dropdown";
import { InputSimple } from "../../components/InputSimple/InputSimple";
import NavBar from "../../components/NavBar/NavBar";
import ProfilePhoto from "../../components/ProfilePhoto/ProfilePhoto";
import SideBar from "../../components/Sidebar/SideBar";
import * as Button from '../../components/Button/Button';
import "./style.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const OwnerEdit = () => {
    // Estado de carregamento
    const [loading, setLoading] = useState(true);
    const router = useRouter(); 
    // dados puxados da api
    const [data, setData] = useState<any[]>([]);
    const [email, setEmail] = useState('');
    const [itr, setItr] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [second_name, setSecond_name] = useState('');
    const token = localStorage.getItem('authToken');
    
   
    
    // Função para buscar os dados do usuário ao carregar a página
    useEffect(() => {
        const userType = localStorage.getItem('userType');

        if (!token) {
            // Caso o token não exista, redirecione para a página de login
            console.error('token não encontrado.');
            router.push('/without-permission');
            return;
          }
        if (userType !== 'O') {
            router.push('/without-permission');
            return;
          }
        
          

    

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
            setData(result);
            setEmail(result.email);
            setItr(result.itr);
            setPhone1(result.phone1);
            setPhone2(result.phone2);
            setFirst_name(result.first_name);
            setSecond_name(result.second_name);
            console.log("Dados carregados com sucesso");
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchUserData();
        setLoading(false); // Define o carregamento como concluído
      }, [router]);

      if (loading) {
        return <p>Carregando...</p>;
      }
    

    // Função para salvar as alterações
    const handleSave = async () => {
        try {
            const response = await fetch('http://45.174.64.137:8000/api/v1/user/1/', {
                method: 'PATCH',
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    itr: itr,
                    phone1: phone1,
                    phone2: phone2,
                    first_name: first_name,
                    second_name: second_name,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao salvar as alterações');
            }

            const result = await response.json();
            console.log("Dados atualizados:", result);
            alert("Alterações salvas com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar os dados:", error);
        }
    };

    return (
        <>
        <NavBar isLogIn/>
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
                            <Button.Transparent>Remover foto</Button.Transparent>
                        </div>  
                    </div>
                </div>
                
                <div className="owneredit__dados">
                    <p className="owneredit__dados-titulo">Dados Pessoais</p>

                    <div className="input__data">
                        <div className='boxes'>
                            <p className='owneredit__text'>Nome<span className='asterisk'>*</span></p>
                            <InputSimple 
                                extra 
                                placeholder='Fulano'
                                value={first_name} //first_name + " "+ second_name 
                                onChange={(e) => {
                                    const names = e.target.value.split(" ");
                                    setFirst_name(names[0] || '');
                                    setSecond_name(names[1] || '');
                                }}
                            />
                        </div>
                        
                        <div className='boxes'>
                            <p className='owneredit__text'>Email<span className='asterisk'>*</span></p>
                            <InputSimple  
                                extra 
                                placeholder='fulano@gmail.com'
                                value={email}  
                                onChange={(e) => setEmail(e.target.value)}
                            />                            
                        </div>
                    </div>
                    
                    <div className="input__data">
                        <div className='boxes'>
                            <p className='owneredit__text'>CPF<span className='asterisk'>*</span></p>
                            <InputSimple  
                                placeholder='Nome da instituição'
                                value={itr}  
                                onChange={(e) => setItr(e.target.value)}
                            />
                        </div>
                        <div className='boxes'>
                            <p className='owneredit__text'>Telefone 1<span className='asterisk'>*</span></p>
                            <InputSimple
                                placeholder='Nome da instituição'
                                value={phone1}  
                                onChange={(e) => setPhone1(e.target.value)}
                            />
                        </div>
                        <div className='boxes'>
                            <p className='owneredit__text'>Telefone 2</p>
                            <InputSimple  
                                placeholder='Nome da instituição'
                                value={phone2}  
                                onChange={(e) => setPhone2(e.target.value)}
                            />
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
                    <Button.Green onClick={handleSave}>Salvar</Button.Green>
                </div>
            </div>
        </div>
        </>
    );
}

export default OwnerEdit;