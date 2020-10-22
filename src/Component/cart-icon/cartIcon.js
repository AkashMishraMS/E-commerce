import React from 'react'
import {ReactComponent as  Icon}  from '../../asset/bag.svg' 
import './cartIcon.scss'

const CartIcon = () => (   
   <div className='cart-icon'>
       <Icon className='bag-icon'/>
       <span className='item-count'>0</span>
    </div>
)

export default CartIcon