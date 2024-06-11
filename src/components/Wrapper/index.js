import React from "react";

class Wrapper extends React.Component {
  render() {
    return <div className="wrapper container">{this.props.children}</div>;
  }
}

export default Wrapper;
