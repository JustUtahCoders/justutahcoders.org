import React, { useState } from 'react'
import { Link } from '@reach/router'

import './static/style/header.css'

const navData = ([
    {
        label: "our mission",
        path: "/mission",
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
        <nav className="nav-mobile">
            <button 
                className="hamburger"
                onClick={props.handleOpenToggle}
            >
                <div className={!props.isOpen ? "hamburger-bar first-bar"  : "hamburger-bar first-bar  is-active"}></div>
                <div className={!props.isOpen ? "hamburger-bar second-bar" : "hamburger-bar second-bar is-active"}></div>
                <div className={!props.isOpen ? "hamburger-bar third-bar"  : "hamburger-bar third-bar  is-active"}></div>
            </button>
        </nav>
    )
}

function NavMobileDropdown() {
    return (
        <div className="drop-menu">
            {mapNavData}
        </div>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <Link to="/">
                <div className="header-logo"></div>
            </Link>
            <NavDesktop />
            <NavMobile isOpen={isOpen} handleOpenToggle={handleOpenToggle} />
            <NavMobileDropdown isOpen={isOpen} />
        </header>
    )
}

export default Header