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
          <Link to="/project" className = "link">
            Projects
          </Link>
          <Link to="/contact/" className = "link">
            Contact
          </Link>
        </div>
      </div>

    )
  };
}

export default Topbar;
