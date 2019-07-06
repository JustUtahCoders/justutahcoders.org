import React from 'react'
import { Link } from '@reach/router'

export default function Header() {
    return (
        <header>
            <Link to="/">
                <div className="header-logo"></div>
            </Link>
        </header>
    )
}