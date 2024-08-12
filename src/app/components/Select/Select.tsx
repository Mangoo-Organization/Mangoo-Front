import { SelectProps } from '@/types'
import React from 'react'
import './Select.css'
import Image from 'next/image'

const Select = ({title}: SelectProps) => {
  return (
    <div className='select__container'>
        <select title={title} className='select__box'>
            <option value="0" className='select__option'>
                Marina é otaria
            </option>
            <option value="1" className='select__option'>
                Marina é otaria1
            </option>
            <option value="2" className='select__option'>
                Marina é otaria2
            </option>
            <option value="3" className='select__option'>
                Marina é otaria3
            </option>


        </select>
        <div className='select__icon'>
        <Image
              src='/icones/streamline_button-play-solid.svg'
              alt='select arrow icon'
              width={14}
              height={14}
              />
        </div>
        
    </div>
  )
}

export default Select