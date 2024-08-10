import { InputProps } from '@/types'
import './SearchBar.css'
import Image from 'next/image'

import React from 'react'

const SearchBar = ({placeHolder}: InputProps) => {
  return (
    //onSubimit = ?
    <form className='searchbar'> 
        <input type="text" placeholder={placeHolder} className='searchbar__input'/>
        <div className='searchbar__magnifying-container'>
          <Image
              src='/icones/magnifying-glass.svg'
              alt='Magnifying glass icon'
              width={14}
              height={14}
              />
        </div>
        
        

    </form>
  )
}

export default SearchBar