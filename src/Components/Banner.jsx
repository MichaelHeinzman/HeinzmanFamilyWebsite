import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <li>
        <div className="BannerContent">
          <span>{this.props.Text}</span>
        </div>
        <div className="Welcome">
          <div>
            <span>
              {this.props.Header}
              <br />
            </span>
          </div>
        </div>
      </li>
    );
  }
}

export default Banner;
