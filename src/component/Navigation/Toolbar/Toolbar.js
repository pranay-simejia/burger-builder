import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const Toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <DrawerToggle  click={props.drawerToggleClicked}/>
           <div style={{height:'80%'}}>
               <Logo />
           </div>
            <nav className='DesktopOnly'>
            <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar
