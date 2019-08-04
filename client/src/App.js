import React from 'react'
import { Router } from '@reach/router'

import Footer from './Footer.js'
import Header from './Header.js'

import Blog from './pages/Blog.js'
import ContactUs from './pages/ContactUs.js'
import Landing from './pages/Landing.js'
import NotFound from './pages/NotFound.js'

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <Router basepath="/" >
                <Landing path="/" />
                <Blog path="/blog" />
                <ContactUs path="/contact" />
                {/* <AboutUs path="/about" /> */}
                {/* <Accountablity path="/accountability" /> */}
                {/* <Careers path="/careers" /> */}
                {/* <MeetingNotes path="/meetingnotes" /> */}
                {/* <Mission path="/mission" /> */}
                {/* <Portfolio path="/portfolio" /> */}
                {/* <Services path="/services" /> */}
                {/* <Sponsers path="/sponsers" /> */}
                <NotFound path="*" />
            </Router>
            <Footer />
        </div>
    )
}