import React from "react";
const BodyHomeClass = "body--home";

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.add(BodyHomeClass);
    document.getElementById("header").classList.add("nobg");
    document.getElementById("logoimg").classList.add("homelogo");
  }

  componentWillUnmount() {
    document.body.classList.remove(BodyHomeClass);
    document.getElementById("header").classList.remove("nobg");
    document.getElementById("logoimg").classList.remove("homelogo");
  }

  render() {
    return (
      <div class="home">
        <div class="left">
          <h1>
            Ex<span class="small">Med</span>
            <br />
            Inc.
          </h1>
        </div>
        <div class="right">
          <p>
            Welcome! Please be patient and check back soon for our full website
            relaunch!
          </p>

          <span>
            Please don't hesitate to reach out to us via phone or email
          </span>
          <br />
          <span>
            <a href="tel:800-822-9434">800-822-9434</a>
          </span>
          <br />
          <span>
            <a href="mailto:connect@exmedinc.com">connect@exmedinc.com</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
