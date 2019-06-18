const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

class Index extends React.Component {
  render() {
    return (
      <div className="home-page">

        <section className="intro-section phone-lean">
          <h2>Every industry needs software developers. Community organizations and non-profits are no exception.</h2>
          <div className="intro-scene phone-lean-scene">
            <img src="/img/mobile-application-lean.svg" alt="stylized man leaning on giant mobile phone"/>
            <p id="phone-message">What can we make for you?</p>
          </div>
        </section>

        <section className="summary-section mission-summary">
          <h2>Software and Web Design Experts with a Purpose</h2>
          <p>Our mission is to build software for Utah's non-profits, government agencies, and general public that further a wide variety of social causes. Whether that be providing better tools and resources or helping to mentor the next wave of developers, we've got it covered.</p>
          <button>Learn more about our mission</button>
        </section>

        <section className="intro-section folder">
          <div className="intro-scene folder-scene">
            <img src="/img/organization-folder.svg" alt="man stuffing files into oversized folder"/>
            <p>We can build the perfect fit!</p>
          </div>
          <h2>One size fits all solutions don't always fit. Don't slow down your cause by using limited data solutions.</h2>
        </section>

        <section className="summary-section services-summary">
          <h2>Why Some Big Name Data Solutions Aren't a Good Fit</h2>
          <p>Every business and organization is unique, and while big pre-made data solution services have a lot of features you'll find yourself paying for a lot of features you just don't need and still missing key features you do need.</p>
          <p>And while sometimes those same companies will offer a discounted rate or free services for your cause, there is often a much larger price tag attached, your client's data. That's just not right.</p>
          <p>We believe that businesses and organizations designed to help the community should have access to affordable software that meets all of their needs, and doesn't ask for client data in return.</p>
          <button>Learn more about our services</button>
        </section>

        <section className="intro-section designing">
          <h2>Experience a dev team that learns your process before beginning theirs</h2>
          <div className="intro-scene designing-scene">
            <img src="/img/design-process.svg" alt="ux designer"/>
            <p>Designed around use</p>
          </div>
        </section>

        <section className="summary-section process-summary">
          <h2>We listen to the problem first, fully</h2>
          <p>It's too important to stop at the what of a problem and just dive in. We listen and work with you to find out the why.</p>
          <p>We understand that your time, funding, and workforce are all limited resources, and vow not to waste them.</p>
          <p>To accomplish this we make sure that what we make for you reduces processing time, intuitively automates repeat processes for you, and can be used by any volunteer with minimal training going forward.</p>
          <button>Learn more about our process and projects</button>
        </section>

        <section className="intro-section building">
          <div className="intro-scene building-scene">
            <img src="/img/mobile-building.svg" alt="man stuffing files into oversized folder"/>
            <p>Let us help you grow</p>
          </div>
          <h2>You pull together for the community, let the dev community pull together for you.</h2>
        </section>

        <section className="summary-section community-summary">
          <h2>Our Community is Here to Help</h2>
          <p>Utah is fast become a major tech hub. That means that there are more skilled developers, designers, and software engineers available to your oraganization than ever.</p>
          <p>With that comes the social awareness and drive to help that the tech community is know for.</p>
          <p>We help connect and guide developers who want to grow Utah's community into a better place for all.</p>
          <button>Learn more about us</button>
        </section>

      </div>
    )
  }
}

module.exports = Index