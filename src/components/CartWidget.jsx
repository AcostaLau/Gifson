import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import '../style.css'

export const CartWidget = () => {
  return (
    <div className='containerCartWidget'>
        <AiOutlineShoppingCart className='cartWidget'/>
        <p className='cartWidget-p'>1</p>
    </div>
  )
}
