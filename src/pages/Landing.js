import React from 'react'
import { Link } from '@reach/router'

import '../static/style/landing.css'
import designProcessImage from "../static/images/design-process.svg"
import mobileAppImage from "../static/images/mobile-application-lean.svg"
import mobileBuildingImage from "../static/images/mobile-building.svg"
import organizationImage from "../static/images/organization-folder.svg"

export default function Landing(){
    const imgStyle = (image, position) => {
        return {
            backgroundImage: `url(${image})`,
            backgroundPosition: position
        }
    }

    return (
        <main className="page-container landing-container" style={{marginTop: "7vh"}}>
            <section className="landing-section img-section everyone">
                <h2 className="everyone-title">Every industry needs software developers. Community organizations and non-profits are no exception.</h2>
                <div className="img-container everyone-image" style={imgStyle(mobileAppImage, "right")}>
                    <p style={{padding: "39% 43% 0 36%"}}>What can we make for you?</p>
                </div>
            </section>

            <section className="landing-section summary-section mission-summary">
                <h2>Software and Web Design Experts with a Purpose</h2>
                <p>Our mission is to build software for Utah's non-profits, government agencies, and general public that further a wide variety of social causes.</p>
                <p>Whether that be providing better tools and resources or helping to mentor the next wave of developers, we've got it covered.</p>
                {/* <Link to="/mission">
                    <button>Learn more about our mission</button>
                </Link> */}
            </section>

            <section className="landing-section img-section organize" style={{margin: "4vh 0 4vh 0"}}>
                <div className="img-container organize-image" style={imgStyle(organizationImage, "left")}>
                    <p style={{padding: "48% 37% 0 20%"}}>We can build the perfect fit!</p>
                </div>
                <h2>One size fits all solutions don't always fit. Don't slow down your cause by using limited data solutions.</h2>
            </section>

            <section className="landing-section summary-section services-summary">
                <h2>Why Some Big Name Data Solutions Aren't a Good Fit</h2>
                <p>Every business and organization is unique. While big name pre-made data and program solution companies seem to offer enough features to fit everyone the realitity is you'll be paying for many things your organization doesn't need and missing a lot that you do need.</p>
                <p>And while sometimes those same companies will offer a discounted rate or free services for your cause, there is often a much larger price tag attached, your client's data! That's just not right.</p>
                <p>We believe that businesses and organizations designed to help the community should have access to affordable software that meets all of their needs, and doesn't ask for client data in return.</p>
                {/* <Link to="/services">
                    <button>Learn more about our services</button>
                </Link> */}
            </section>

            <section className="landing-section img-section design" style={{margin: "8vh 0 9vh 0"}}>
                <h2>Experience a dev team that learns your process before beginning theirs</h2>
                <div className="img-container" style={imgStyle(designProcessImage, "right")}>
                    <p style={{padding: "30% 24% 0 56%"}}>Designed around use</p>
                </div>
            </section>

            <section className="landing-section summary-section img-section process">
                <h2>We listen to the problem first</h2>
                <p>It's too important to stop at the what of a problem and just dive in. We listen and work with you to find out the why.</p>
                <p>We understand that your time, funding, and workforce are all limited resources.</p>
                <p>To accomplish this we make sure that what we make for you is going to provide a true benefit to your cause. We work to create more organization, better access to the community you are aiming to help, and ways to get more out of your resources.</p>
                {/* <Link to="/portfolio">
                    <button>Learn more about our process and projects</button>
                </Link> */}
            </section>

            <section className="landing-section img-section build" style={{margin: "4vh 0 4vh 0"}}>
                <div className="img-container" style={imgStyle(mobileBuildingImage, "right")}>
                    <p style={{padding: "20% 65% 0 20%"}}>Let us help you grow</p>
                </div>
                <h2>You pull together for the community, let the dev community pull together for you.</h2>
            </section>

            <section className="landing-section summary-section img-section community">
                <h2>Our Community is Here to Help</h2>
                <p>Utah is fast becoming a major tech hub. That means that there are more skilled developers, designers, and software engineers available to your oraganization than ever</p>
                <p>With that comes the social awareness and drive to help that the tech community is know for.</p>
                <p>We help connect and guide developers who want to grow Utah's community into a better place for all.</p>
                {/* <Link to="/about">
                    <button>Learn more about us</button>
                </Link> */}
            </section>
        </main>
    )
}