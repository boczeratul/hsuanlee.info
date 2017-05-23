import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-light navbar-fixed-top navbar-custom top-nav-short navbar-toggleable-md mb-4">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-navbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/blog">Hsuan Lee</Link>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="main-navbar">
            <ul className="navbar-nav">
              <li className="nav-item"><a href="https://github.com/boczeratul/blog.hsuanlee.info">GitHub</a></li>
              <li className="nav-item"><Link to="/">About</Link></li>
            </ul>
          </div>
          <div className="avatar-container">
            <div className="avatar-img-border">
              <Link to="/blog">
                <img className="avatar-img" src="./images/hsuan.jpg" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
