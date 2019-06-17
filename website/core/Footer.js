const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div className="subsection">
            <h5>About</h5>
            <a href={this.pageUrl('mission.html', this.props.language)}>Our Mission</a>
            <a href={this.pageUrl('services.html', this.props.language)}>Our Services</a>
            <a href={this.pageUrl('impact.html', this.props.language)}>Our Impact</a>
            <a href={this.pageUrl('future.html', this.props.language)}>Our Future</a>
          </div>
          <div className="subsection">
            <h5>Community</h5>
            <a>Volunteer with Us</a>
            <a>Sponsers</a>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
          </div>
          <div className="subsection">
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/JustUtahCoders">GitHub</a>
            <a>Careers</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
