const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

class Index extends React.Component {
  render() {
    return (
      <div>

        <section className="phone-lean">
          <h2>Every industry needs software developers. Non-profits and community organizations are no exception.</h2>
          <div className="phone-lean-scene">
            <img src="/img/mobile-application-lean.svg" alt="stylized man leaning on giant mobile phone"/>
            <p id="phone-message">What can we make for you?</p>
          </div>
        </section>

        <section className="folder">
          <div className="folder-scene">
            <img className="folder-img" src="/img/organization-folder.svg" alt="man stuffing files into oversized folder"/>
            <p>We can build the perfect fit!</p>
          </div>
          <h2>One size fits all solutions don't always fit. Don't slow down your cause by using limited data solutions.</h2>
        </section>

      </div>
    )
  }
}

module.exports = Index