import Image from "next/image";
import './DifficultyButton.css';
import { useState } from "react";

const DifficultButton = () => {
    const [buttonClick1, setButtonClick1] = useState(false);
    const [buttonClick2, setButtonClick2] = useState(false);
    const [buttonClick3, setButtonClick3] = useState(false);

    function handleClick1(){
        setButtonClick1(true)
        setButtonClick2(false)
        setButtonClick3(false)
    }

    function handleClick2(){
        setButtonClick1(false)
        setButtonClick2(true)
        setButtonClick3(false)
    }

    function handleClick3(){
        setButtonClick1(false)
        setButtonClick2(false)
        setButtonClick3(true)
    }

    return(
        <div className="button__box">
            <button className={buttonClick1 ? "easy__buttonActive" : "easy__button"} onClick={handleClick1}>
                <Image src='./icones/emoji-happy.svg' alt='emoji fácil' width={14} height={14}/>
                <span className="box__text">Fácil</span>
            </button>
            <button className={buttonClick2 ? "mediun__buttonActive" : "mediun__button"} onClick={handleClick2}>
                <Image src='./icones/emoji-straight.svg' alt='emoji médio' width={14} height={14}/>
                <span className="box__text">Médio</span>
            </button>
            <button className={buttonClick3 ? "hard__buttonActive" : "hard__button"} onClick={handleClick3}>
                <Image src='./icones/emoji-terrified.svg' alt='emoji difícil' width={14} height={14}/>
                <span className="box__text">Difícil</span>
            </button>
        </div>
    );
}

export default DifficultButton