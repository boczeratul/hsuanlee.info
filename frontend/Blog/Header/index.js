import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: 0,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    this.setState({
      scroll: window.pageYOffset,
    });
  }

  render() {
    const navClass = `navbar navbar-light fixed-top navbar-toggleable-md mb-4 ${this.state.scroll > 50 ? 'top-nav-short' : ''}`;

    return (
      <nav className={navClass}>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#main-navbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/blog">Hsuan Lee</Link>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="main-navbar">
            <ul className="nav navbar-nav">
              <li className="nav-item"><a href="https://github.com/boczeratul/blog.hsuanlee.info">GitHub</a></li>
              <li className="nav-item"><Link to="/">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="avatar-container">
          <div className="avatar-img-border">
            <Link to="/blog">
              <img className="avatar-img" src="/images/hsuan.jpg" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
