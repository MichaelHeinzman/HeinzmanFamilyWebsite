import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
      <li className="Banner">
        <div className="BannerContentBackground">
          <svg>
            <rect rx="0" ry="0" x="0" y="0" width="388" height="266"></rect>
          </svg>
          {/* <span className="BannerContent">
            I made different themes
            <br />
            to see how they would look.
            <br />I don't know what I like <br />
            better.
          </span> */}
        </div>
        <div className="BannerSmallBorderBackground">
          <svg>
            <rect rx="0" ry="0" x="0" y="0" width="413" height="75"></rect>
          </svg>
        </div>
        <div className="BannerSmallBackground">
          <svg>
            <rect rx="0" ry="0" x="0" y="0" width="388" height="50"></rect>
          </svg>
          {/* <span className="Welcome">Welcome</span> */}
        </div>
      </li>
    );
  }
}

export default Banner;
