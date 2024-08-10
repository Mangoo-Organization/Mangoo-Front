import { InputProps } from '@/types'
import './SearchBar.css'

import React from 'react'

const SearchBar = ({placeHolder}: InputProps) => {
  return (
    //onSubimit = ?
    <form className='searchbar'> 
        <input type="text" placeholder={placeHolder}/>
        <Image
            
            />

    </form>
  )
}

export default SearchBar