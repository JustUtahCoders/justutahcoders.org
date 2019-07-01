import React from 'react'

import '../static/style/landing.css'
import designProcessImage from "../static/images/design-process.svg"
import mobileAppImage from "../static/images/mobile-application-lean.svg"
import mobileBuildingImage from "../static/images/mobile-building.svg"
import organizationImage from "../static/images/organization-folder.svg"

export default function Landing(){
    const sectionData = [
        {
            name: "everyone",
            title: "Every industry needs software developers. Community organizations and non-profits are no exception.",
            tagline: "What can we make for you?",
            img: mobileAppImage,
            imgOrientation: "right"
        },{
            name: "mission-summary",
            title: "Software and Web Design Experts with a Purpose",
            contents: [
                "Our mission is to build software for Utah's non-profits, government agencies, and general public that further a wide variety of social causes. Whether that be providing better tools and resources or helping to mentor the next wave of developers, we've got it covered."
            ],
            buttonTxt: "Learn more about our mission",
            buttonPath: "/mission"
        },{
            name: "organize",
            title: "One size fits all solutions don't always fit. Don't slow down your cause by using limited data solutions.",
            tagline: "We can build the perfect fit!",
            img: organizationImage,
            imgOrientation: "left"
        },{
            name: "services-summary",
            title: "Why Some Big Name Data Solutions Aren't a Good Fit",
            contents: [
                "Every business and organization is unique, and while big pre-made data solution services have a lot of features you'll find yourself paying for a lot of features you just don't need and still missing key features you do need.",
                "And while sometimes those same companies will offer a discounted rate or free services for your cause, there is often a much larger price tag attached, your client's data. That's just not right.",
                "We believe that businesses and organizations designed to help the community should have access to affordable software that meets all of their needs, and doesn't ask for client data in return."
            ],
            buttonTxt: "Learn more about our services",
            buttonPath: "/services"
        },{
            name: "design",
            title: "Experience a dev team that learns your process before beginning theirs",
            tagline: "Designed around use",
            img: designProcessImage,
            imgOrientation: "right"
        },{
            name: "process",
            title: "We listen to the problem first, fully",
            contents: [
                "It's too important to stop at the what of a problem and just dive in. We listen and work with you to find out the why.",
                "We understand that your time, funding, and workforce are all limited resources, and vow not to waste them.",
                "To accomplish this we make sure that what we make for you reduces processing time, intuitively automates repeat processes for you, and can be used by any volunteer with minimal training going forward."
            ],
            buttonTxt: "Learn more about our process and projects",
            buttonPath: "/portfolio"
        },{
            name: "build",
            title: "You pull together for the community, let the dev community pull together for you.",
            tagline: "Let us help you grow",
            img: mobileBuildingImage,
            imgOrientation: "right"
        },{
            name: "community",
            title: "Our Community is Here to Help",
            contents: [
                "Utah is fast become a major tech hub. That means that there are more skilled developers, designers, and software engineers available to your oraganization than ever.",
                "With that comes the social awareness and drive to help that the tech community is know for.",
                "We help connect and guide developers who want to grow Utah's community into a better place for all."
            ],
            buttonTxt: "Learn more about us",
            buttonPath: "/about"
        }
    ]

    const mapData = sectionData.map((data, i) => {
        
        const sectionStyle = {
            backgroundImage: `url(${data.img})`
        }

        return (
            <section className={`landing-section ${data.name}`} key={`section-${i}`}>
                <h2>{data.title}</h2>
                {
                    data.img 
                        ?   <div style={sectionStyle}>
                                <p>{data.tagline}</p>
                            </div>
                        :   <></>
                }
                {
                    data.contents
                        ?   data.contents.map((paragraph, j) => {
                                return (
                                    <p key={j}>{paragraph}</p>
                                )
                            })
                        :   <></>
                }
                {
                    data.buttonTxt
                        ?   <button>{data.buttonTxt}</button>
                        :   <></>
                }
            </section>
        )
    })

    return (
        <main className="page-container landing-container">
            {mapData}
        </main>
    )
}