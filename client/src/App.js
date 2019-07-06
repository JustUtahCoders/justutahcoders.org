import React from 'react'
import { Router } from '@reach/router'

import Footer from './Footer.js'
import Header from './Header.js'
// import Sidebar from './Sidebar.js'
import Landing from './pages/Landing.js'
import NotFound from './pages/NotFound.js'

export default function App() {
    return (
        <div className="app-container">
            <Header />
            {/* <Sidebar /> */}
            <Router basepath="/">
                <Landing path="/" />
                {/* <Mission path="/mission" /> */}
                {/* <Services path="/services" /> */}
                {/* <Portfolio path="/portfolio" /> */}
                {/* <Sponsers path="/sponsers" /> */}
                {/* <AboutUs path="/about" /> */}
                {/* <Accountablity path="/accountability" /> */}
                {/* <MeetingNotes path="/meetingnotes" /> */}
                {/* <Blog path="/blog" /> */}
                {/* <Careers path="/careers" /> */}
                <NotFound path="*" />
            </Router>
            <Footer />
        </div>
    )
}