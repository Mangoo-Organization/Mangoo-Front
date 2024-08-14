import { ButtonProps } from '../../../types/index'
import React from 'react'
import './Button.css'

const Button = ({title, type}: ButtonProps) => {
  
  return (
    <>
    <button className={type}>{title}</button>
    </>
  )
}

export default Button