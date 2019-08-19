import React, { useState } from 'react'
import { Link } from '@reach/router'

import './static/style/header.css'

const navData = ([
    {
        label: "our mission",
        path: "/mission",
    },{
        label: "our services",
        path: "/services",
    },{
        label: "our work",
        path: "/projects",
    },{
        label: "about us",
        path: "/about",
    },{
        label: "contact",
        path: "/contact",
    }
])

const mapNavData = navData.map((link, i) => {
    return (
        <Link 
            to={link.path} 
            key={i}
        >
            {link.label}
        </Link>
    )
})

function NavDesktop() {
    return (
        <nav className="nav-desktop">
            {mapNavData}
        </nav>
    )
}

function NavMobile(props) {
    return (
        <nav className={"nav-mobile"} >
            <button 
                className="hamburger"
                onClick={props.handleMenuToggle}
            >
                <div className={!props.isOpen ? "hamburger-bar first-bar"  : "hamburger-bar first-bar  is-active"}></div>
                <div className={!props.isOpen ? "hamburger-bar second-bar" : "hamburger-bar second-bar is-active"}></div>
                <div className={!props.isOpen ? "hamburger-bar third-bar"  : "hamburger-bar third-bar  is-active"}></div>
            </button>
        </nav>
    )
}

function NavMobileDropdown(props) {
    return (
        <div 
            className={props.isOpen ? "drop-menu" : "drop-menu is-closed"}
            onClick={props.handleMenuToggle}
        >
            {mapNavData}
        </div>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsOpen(!isOpen)
    }

    const handdleCloseMenu = () => {
        setIsOpen(false)
    }

    return (
        <header>
            <Link to="/">
                <div className="header-logo" onClick={handdleCloseMenu}></div>
            </Link>
            <NavDesktop />
            <NavMobile isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
            <NavMobileDropdown isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
        </header>
    )
}

export default Header