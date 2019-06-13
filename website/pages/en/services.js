const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

class Services extends React.Component {
    render() {
        const siteConfig = this.props.config
        return (
            <div>
                {this.props.label}
            </div>
        )
    }
}

module.exports = Services