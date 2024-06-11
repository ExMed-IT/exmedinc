import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul class="nav-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/opportunities">Opportunities</Link>
          </li>
          <li class="test">
          <Link to="/connect" id="connect">Connect</Link>

          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
