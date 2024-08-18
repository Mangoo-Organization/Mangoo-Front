import React from 'react'
import './InputDefault.css'
import { InputProps } from '@/types'

const InputDefault = ({title, placeholder}: InputProps) => {
  return (
    <div className='inputdefault__container'>
        <span>{title}:</span>
        <input placeholder={placeholder}/>
    </div>
  )
}

export default InputDefault