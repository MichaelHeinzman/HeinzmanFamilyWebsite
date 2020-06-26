import React, { Component } from "react";

class TextLabel extends Component {
  render() {
    return <text id={this.props.id}>{this.props.Text}</text>;
  }
}

export default TextLabel;
