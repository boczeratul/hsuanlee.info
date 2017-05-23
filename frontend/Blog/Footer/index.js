import React from 'react';

import './footer.css';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="list-inline text-center footer-links">
                <li><a href="https://www.facebook.com/boczeratul" title="Facebook"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-stack-1x fa-inverse fa-facebook" /></span></a></li>
                <li><a href="https://github.com/boczeratul" title="GitHub"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-stack-1x fa-inverse fa-github" /></span></a></li>
                <li><a href="mailto:boczeratul@gmail.com" title="Email me"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-stack-1x fa-inverse fa-envelope" /></span></a></li>
                <li><a href="https://www.linkedin.com/in/boczeratul/" title="LinkedIn"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-stack-1x fa-inverse fa-linkedin" /></span></a></li>
              </ul>
              <p className="copyright text-muted">© Hsuan Lee • 2017 • <a href="mailto:boczeratul@gmail.com">boczeratul@gmail.com</a></p>
              <p className="theme-by text-muted">Theme ported from <a href="https://github.com/daattali/beautiful-jekyll">beautiful-jekyll</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
