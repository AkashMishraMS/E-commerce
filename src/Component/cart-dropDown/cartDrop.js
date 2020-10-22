import React from "react"
import './cartDrop.scss'
import CustomeButton from ".././CustomeButton/customBtn";

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cartItem'>
            <CustomeButton>GO TO CHECKOUT</CustomeButton>
        </div>
    </div>
)

export default CartDropDown