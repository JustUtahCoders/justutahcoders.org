const React = require('react')
const datafire = require('datafire')
const project = datafire.Project.main()

const CompLibrary = require('../../core/CompLibrary.js')

class ContactUs extends React.Component {
    render(){
        return (
            <div className="contact-us-container">
                <div className="blurb">
                    <h2>Get in Touch</h2>
                    <p>Got a project in mind or want to find out more about our non-profit work? Send us a message.</p>
                </div>
                <form
                    action="https://justutahcoders.dev.with-datafire.io/contact"
                    method="post"
                >
                    <p>Name:</p>
                    <input  
                        type="text"
                        name="clientName"
                    />
                    <p>Email:</p>
                    <input
                        type="text"
                        name="emailAddress"
                    />
                    <p>Topic of Inquiry:</p>
                    <select name="subject">
                        <option value=""></option>
                        <option value="a non-profit project">I work for a non-profit interested in your services</option>
                        <option value="a small business project">I work for a local small business interested in your services</option>
                        <option value="a project for a government agency">I represent a government agency that is interested in your services</option>
                        <option value="a project idea">I have an idea for a project that may interest JustUtahCoders</option>
                        <option value="internship information">I would like more info on your internship program</option>
                        <option value="volunteering">I would like more information on volunteering with JustUtahCoders</option>
                        <option value="sponsering">I would like more info on how to sponser JustUtahCoders</option>
                        <option value="a question">Other</option>
                    </select>
                    <p>Message:</p>
                    <textarea
                        name="message"
                        rows="10"
                        cols="50"
                    />
                    <button type="button">Submit</button>
                </form>
            </div>
        )
    }
}

module.exports = ContactUs