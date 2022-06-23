import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'
import '../style.css'

export const CartWidget = () => {
  return (
    <div className='containerCartWidget'>
        <Link to='/cart'><AiOutlineShoppingCart className='cartWidget'/></Link>
        <p className='cartWidget-p'>1</p>
    </div>
  )
}
