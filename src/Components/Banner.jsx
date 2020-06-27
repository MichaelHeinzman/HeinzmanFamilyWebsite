import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
      <li id="Banner">
        <div id="BannerBackground">
          <svg className="Rectangle_16">
            <rect
              id="Rectangle_16"
              rx="0"
              ry="0"
              x="0"
              y="0"
              width="488"
              height="266"
            ></rect>
          </svg>
        </div>
        <div id="BannerSmallBorderBackground">
          <svg className="Rectangle_16_o">
            <rect
              id="Rectangle_16_o"
              rx="0"
              ry="0"
              x="0"
              y="0"
              width="513"
              height="103"
            ></rect>
          </svg>
        </div>
        <svg id="Rectangle_26">
          <rect
            id="Rectangle_26"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="3"
            height="2"
          ></rect>
        </svg>
        <div id="BannerSmallBackground">
          <svg className="Rectangle_16_r">
            <rect
              id="Rectangle_16_r"
              rx="0"
              ry="0"
              x="0"
              y="0"
              width="488"
              height="74"
            ></rect>
          </svg>
        </div>
        <div id="Welcome">
          <span>Welcome</span>
        </div>
        <div id="I_made_different_themes_to_see">
          <span>
            I made different themes
            <br />
            to see how they would look.
            <br />I don't know what I like <br />
            better.
          </span>
        </div>
      </li>
    );
  }
}

export default Banner;
