import React, { Component } from "react";
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Assets/NavBar.scss";

class TextLabel extends Component {
  render() {
    console.log(this.props.CName);
    return (
      <li>
        <div className={this.props.CName}>{this.props.Text}</div>
      </li>
    );
  }
}

export default TextLabel;
