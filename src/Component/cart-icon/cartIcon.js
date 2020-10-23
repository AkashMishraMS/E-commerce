import React from 'react'
import {ReactComponent as  Icon}  from '../../asset/bag.svg' 
import './cartIcon.scss'
import { connect } from "react-redux";
import toggleCartHidden from "../../redux/Cart/cartAction";

const CartIcon = ({toggleCartHidden  }) => (   
   <div className='cart-icon' onClick={toggleCartHidden}>
       <Icon className='bag-icon'/>
       <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)