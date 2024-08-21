import './Counter.css'
import { useState } from 'react';

const Counter = () => {

    const [num, setnum] = useState(1)

    const increse = () => {
        if(num < 100)
            setnum(num + 1)
    }
    const decrese = () => {
        if(num > 1)
            setnum(num - 1)
    }

    return(
        <div className="counter__conteiner">
            <div>
                <label htmlFor="number" className='text'>Número</label>
                <div className="counter__input">
                    <input type='text' id='number' placeholder='Digite um número' value={num} className='input__conteiner'/>
                </div>
            </div>
            <button onClick={decrese} className='counter__button'>
                -
            </button>
            <button onClick={increse} className='counter__button'>
                +
            </button>
        </div>
    );

}

export default Counter;

