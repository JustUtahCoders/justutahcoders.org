import React from 'react'
import { Router } from '@reach/router'

import ContactUs from './pages/ContactUs.js'
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
                {/* <Mission path="/mission" /> */}
                {/* <Services path="/services" /> */}
                {/* <Portfolio path="/portfolio" /> */}
                {/* <Sponsers path="/sponsers" /> */}
                {/* <AboutUs path="/about" /> */}
                {/* <Accountablity path="/accountability" /> */}
                {/* <MeetingNotes path="/meetingnotes" /> */}
                {/* <Blog path="/blog" /> */}
                {/* <Careers path="/careers" /> */}
                <ContactUs path="/contact" />
                <NotFound path="*" />
            </Router>
            <Footer />
        </div>
    )
}