import React from 'react'
import './checkbox.css'
import { CheckboxProps } from '@/types'

const Checkbox = ({content}: CheckboxProps) => {
  return (
    <div className='checkbox__container'>
        <input  type='checkbox'/><p>{content}</p>
    </div>
  )
}

export default Checkbox