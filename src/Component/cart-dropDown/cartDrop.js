import React from "react"
import './cartDrop.scss'
import CustomBtn from ".././CustomeButton/customBtn";
import CartItem from "../cart-Item/cartItem";
import { connect } from "react-redux";

const CartDropDown = ({ cartItem }) => (
    <div className='cart-dropdown'>
        <div className='cartItem'> 
        {
             cartItem.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
                ))
        }
        </div>
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
)

const mapStateToProps = ({ cart: { cartItem } }) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDropDown)