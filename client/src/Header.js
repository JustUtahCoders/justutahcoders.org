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
        <Link to={link.path}>{link.label}</Link>
    )
})

function NavDesktop() {
    return (
        <nav className="nav-desktop">
            {mapNavData}
        </nav>
    )
}

function NavMobile() {
    return (
        <nav className="nav-mobile">
            {mapNavData}
        </nav>
    )
}

export default function Header() {
    return (
        <header>
            <Link to="/">
                <div className="header-logo"></div>
            </Link>
            <NavDesktop />
            {/* <NavMobile  navData={navData} /> */}
        </header>
    )
}