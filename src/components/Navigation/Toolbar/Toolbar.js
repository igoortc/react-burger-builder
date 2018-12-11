import React from 'react'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.css'

const Toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo />
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header> 
)

export default Toolbar