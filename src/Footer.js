import React from 'react'
import { Link } from '@reach/router'

import './static/style/footer.css'
import leftFooterImg from './static/images/left.svg'
import rightFooterImg from './static/images/right.svg'

export default function Footer() {
    const footerData = [
        {
            name: "about us:",
            class: "about",
            subsections: [
                {
                    label: "our services",
                    path: "/services"
                },
                {
                    label: "our mission",
                    path: "/mission"
                },
                {
                    label: "our sponsers",
                    path: "/sponsers"
                },
                {
                    label: "our work",
                    path: "/portfolio"
                },
                {
                    label: "meet our team",
                    path: "/about"
                }
            ]
        },
        {
            name: "participate:",
            class: "join",
            subsections: [
                {
                    label: "become a sponser",
                    path: "/sponsers"
                },
                {
                    label: "events",
                    path: "/events"
                },
                {
                    label: "become a volunteer",
                    path: "/volunteer"
                },
                {
                    label: "join our team",
                    path: "/careers"
                }
            ]
        },
        {
            name: "learn more:",
            class: "more",
            subsections: [
                {
                    label: "contact us",
                    path: "/contact"
                },
                {
                    label: "accountability",
                    path: "/accountability"
                },
                {
                    label: "blog",
                    path: "/blog"
                },
                {
                    label: "meeting notes",
                    path: "/meeting_notes"
                }
            ]
        }
    ]

    const mapFooterData = footerData.map((section, i) => {
        const mapSectionData = section.subsections.map((link, j) => {
            return (
                <Link to={link.path} key={j}>{link.label}</Link>
            )
        })

        return (
            <section className={`footer-${section.class}`} key={i}>
                <h2>{section.name}</h2>
                {mapSectionData}
            </section>
        )
    })

    return (
        <footer>
            <div className="sections-container">
                <img src={leftFooterImg} alt="web developer working" className="left" />
                {/* {mapFooterData} */}
                <button className="splash-button">Want To Learn More?</button>
                <img src={rightFooterImg} alt="web developer working" className="right" />
            </div>
            <div className="copywrite-container">
                <p>Ⓒ JustUtahCoders 2019</p>
            </div>
        </footer>
    )
}