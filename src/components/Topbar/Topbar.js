import React, { Component } from 'react'
import { Link } from "gatsby";
import css from './Topbar.css';

class Topbar extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "textWrapper">
          <Link to="/" className = "home">
            DORA ZHAO
          </Link>
          <Link to="/" className = "link">
            Select Work
          </Link>
          <Link to="/resume/" className = "link">
            Resume
          </Link>
          <Link to="/about/" className = "link">
            About + Contact
          </Link>
        </div>
      </div>

    )
  };
}

export default Topbar;
