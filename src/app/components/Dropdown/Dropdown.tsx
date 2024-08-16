'use client'
import React, { useState } from 'react'
import './Dropdown.css'
import Image from 'next/image'
import { DropdownProps } from '@/types'

const Dropdown = ({ options, onOptionClick, placeholder }: DropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const showPlaceholder = !selectedOption
  const showTitle = !!selectedOption
  const showArrowUp = isExpanded
  const showArrowDown = !isExpanded

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsExpanded(false)
    onOptionClick(option)
  }

  return (
    <div className='dropdown__container'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='dropdown__box'
      >
        <div className='dropdown__title'>
          {showPlaceholder && <div className='dropdown__placeholder'>{placeholder}</div>}
          {showTitle && <div>{selectedOption}</div>}
        </div>

        {showArrowUp && (
          <Image
            src='./icones/dropdown_arrow_top.svg'
            alt='dropdown arrow top'
            width={10}
            height={10}
          />
        )}
        {showArrowDown && (
          <Image
            src='./icones/dropdown_arrow_bottom.svg'
            alt='dropdown arrow bottom'
            width={10}
            height={10}
          />
        )}
      </button>

      {isExpanded && (
        <div className='dropdown__panel'>
          <ul>
            {options.map((option) => (
              <li
                onClick={() => handleOptionClick(option)}
                className='dropdown__option'
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
