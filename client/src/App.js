import React from 'react'
import { Router } from '@reach/router'

import Footer from './Footer.js'
import Header from './Header.js'
import Landing from './pages/Landing.js'
import NotFound from './pages/NotFound.js'

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <Router basepath="/">
                <Landing path="/" />
                <NotFound path="*" />
            </Router>
            <Footer />
        </div>
    )
}