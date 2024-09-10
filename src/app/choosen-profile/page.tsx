'use client'
import React from 'react'
import './style.css'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { InputSimple } from '../components/InputSimple/InputSimple'
import * as Button from '../components/Button/Button'
import Dropdown from "../components/Dropdown/Dropdown";
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin'

 const ChoosenProfile = () => {
  return (
    <div>
        <NavBar/>

        <div className='container__choosen'>
            <div className='student__choosen'>
            </div>
            <div className='teacher__choosen'>
            </div>
            <div className='owner__choosen'>
            </div>
        </div>
    </div>
  )
}

export default ChoosenProfile