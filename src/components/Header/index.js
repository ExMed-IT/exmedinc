import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div class="header" id="header">
        <div class="container">
          <div class="logo">
            <Link to="/">
              <img
                id="logoimg"
                src="/images/Logo-White-Abrv.svg"
                alt="exmed logo"
              />
            </Link>
          </div>
          {/* <Nav /> */}
        </div>
      </div>
    );
  }
}

export default Header;
