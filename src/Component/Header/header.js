import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import CartIcon from "../cart-icon/cartIcon";
import CartDropDown from "../cart-dropDown/cartDrop";
import { connect } from "react-redux"


const Header = ({ hidden }) => (
    <div className='header'>
        <Link to='/'>
            <h1>Logo</h1>
        </Link>
        <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/shop'>CONTACT</Link>
    <Link className='option' to='/signin'>SIGN IN</Link>
    <CartIcon/>
        </div>
        {hidden ? null : <CartDropDown/>}
    </div>
)

const mapStateToProps = ({ cart:{hidden} }) => ({
    hidden
})

export default connect(mapStateToProps)(Header)