import React from 'react'
import './checkbox.css'
import { CheckboxProps } from '@/types'

const Checkbox = ({content, checked, onChange}: CheckboxProps) => {
  return (
    <div className='checkbox__container'>
        <input  type='checkbox' checked={checked} onChange={onChange}  /><p>{content}</p>
    </div>
  )
}

export default Checkbox