import React from "react";
import "./info.scss";

const BodyInfoClass = "body--info";

class Fun extends React.Component {
  componentDidMount() {
    document.body.classList.add(BodyInfoClass);
  }
  componentWillUnmount() {
    document.body.classList.remove(BodyInfoClass);
  }

  render() {
    return (
      <div className="it-protocols">
        <div>
          {" "}
          <span class="head">I.T. RECOMMENDED PROTOCOLS</span>
        </div>
        <section id="one">
          <div class="content">
            <span class="title">Computer usage</span>
            <span class="text">
              <p>
                When done for the evening completely shut down and power off any
                ExMed Inc. desktop, laptop, or device you were logged in to.
              </p>
              <p>
                Always use an acceptable web browser when using the Internet.
                Recommended browsers are Google Chrome and Mozilla Firefox. Both
                Microsoft Edge and Safari are acceptable but may not always work
                correctly with all software or web content.
              </p>
            </span>
            <span class="button">
              <a href="#two">
                <span class="material-icons">expand_more</span>
              </a>
            </span>
          </div>
        </section>
        <section id="two">
          <div class="content">
            <span class="title">Working Remotely</span>
            <span class="text">
              <p>
                Always ensure you are connected to a secure Wi-Fi that is
                password protected using at least WPA level password protection.
                (If you are unsure speak with me and I can help you walk through
                ensuring your wifi is protected.)
              </p>
              <p>
                Never connect to the server remotely from an unsecured location
                (e.g. Starbucks, Airport, any public wi-fi).
              </p>
              <p>
                Never transfer sensitive data via email over unsecured wi-fi.
              </p>
              <p>
                If you must leave your workstation/laptop for more than a
                minute, lock your screen/desktop by either closing the laptop
                lid or using the lock feature through the Windows Start menu.
              </p>
            </span>
            <span class="button">
              <a href="#three">
                <span class="material-icons">expand_more</span>
              </a>
            </span>
          </div>
        </section>

        <section id="three">
          <div class="content">
            <span class="title">Server usage and file handling</span>
            <span class="text">
              <p>
                Do not store any documents that may contain sensitive data
                outside of the secure Network Server. (Even if they are password
                protected.){" "}
              </p>
              <p>
                If a document contains any kind of personal sensitive data (e.g.
                SSN, EIN, TIN, or other private identification information),
                said document should be encrypted with a secure password using
                AxCrypt software.{" "}
              </p>
              <p>
                No document should remain stored on a local workstation once
                said document is no longer required for the day. Ensure the
                document is uploaded onto the server once you are finished with
                the document, then procede to delete the document from the
                workstation you are working on.
              </p>
            </span>
            <span class="button">
              <a href="#four">
                <span class="material-icons">expand_more</span>
              </a>
            </span>
          </div>
        </section>
        <section id="four">
          <div class="content">
            <span class="title">Passwords</span>
            <span class="text">
              <p>
                Never use a browsers or websites "Remember Me" or “Save
                Password” option to save ExMed Inc. related passwords to any
                device.
              </p>
              <p>
                If a password is required to be changed(e.g. some websites/apps
                require a new password every 3/6 months) notify either the
                General Manager and/or the IT Admin. No passwords should be
                changed without prior authorization from the General Manager or
                your direct supervisor.
              </p>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default Fun;
