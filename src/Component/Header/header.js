import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'

const Header = () => (
    
    <div className='header'>
        <Link to='/'>
            <h1>Logo</h1>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
    </div>
)

export default Header