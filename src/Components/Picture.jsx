import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div>
        <img id={this.props.id} src={this.props.src} alt="" />
      </div>
    );
  }
}

export default Picture;
