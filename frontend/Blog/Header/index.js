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
    const navClass = `navbar navbar-light fixed-top navbar-toggleable mb-4 ${this.state.scroll > 50 ? 'top-nav-short' : ''}`;

    return (
      <nav className={navClass}>
        <div className="navbar-container">
          <Link className="navbar-brand" to="/blog">Hsuan Lee</Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="nav navbar-nav">
              <li className="nav-item nav-link"><Link to="/">About</Link></li>
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
