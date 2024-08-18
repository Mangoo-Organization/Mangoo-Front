import Image from 'next/image'
import {InputProps} from '@/types'
import React from 'react'
import './InputAlternativa.css'

const InputAlternativa = ({placeholder}: InputProps) => {
  return (
    <div className='container__input'>
    
      <input type='radio' className='input__radio'/>        
      <input className='input__alternativas' type='text' placeholder={placeholder}/>  
      <Image 
        src="/icones/streamline_delete-1.png" 
        alt='X-delete' 
        width={14}
        height={14}/>
        
    </div>
  )
}

export default InputAlternativa