import { ButtonProps } from '@/types'
import React from 'react'
import './Button.css'

const Button = ({title}: ButtonProps) => {
  return (
    <button className='botao__padrao'>{title}</button>
  )
}

export default Button