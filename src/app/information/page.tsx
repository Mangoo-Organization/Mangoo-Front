import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import './style.css'
import ProfilePhoto from "../components/ProfilePhoto/ProfilePhoto";

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
      
      </div>
      
      
    </div>
  
    
    </>
  )
}