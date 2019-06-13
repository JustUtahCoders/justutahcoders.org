const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

class Index extends React.Component {
  render() {
    return (
      <div>
        <section className="purpose-statement">
          <h2>Every industry needs software developers. Non-profits and community organizations are no exception.</h2>
          <div className="purpose-statement-image-container">
            <img src="/img/mobile-application-lean.svg" alt="stylized man leaning on giant mobile phone"/>
            <h3 id="phone-message">What can we make for you?</h3>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = Index