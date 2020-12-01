import React from 'react'
import burgerLogo from '../../assets/burger-logo.png';
import './Logo.css'
const Logo = () => {
    return (
        <div className='Logo'>
            <img src={burgerLogo} alt="Logo"/>
        </div>
    )
}

export default Logo
