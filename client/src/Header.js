import React from 'react'
import { Link } from '@reach/router'

import NavDesktop from './navbar/NavDesktop.js'
import NavMobile from './navbar/NavMobile.js'

export default function Header() {
    return (
        <header>
            <Link to="/">
                <div className="header-logo"></div>
                <NavDesktop />
                <NavMobile />
            </Link>
        </header>
    )
}