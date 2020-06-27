import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <li>
        <img id={this.props.id} src={this.props.src} alt="" />
      </li>
    );
  }
}

export default Picture;
