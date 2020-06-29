import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
      <li>
        {/* <div>
          <svg>
            <rect rx="0" ry="0" x="0" y="0" width="413" height="75"></rect>
          </svg>
        </div>
        <div>
          <svg>
            <rect rx="0" ry="0" x="0" y="0" width="388" height="50"></rect>
          </svg>
        </div> */}
        <div>
          <span className="BannerContent">
            Blah blah blah <br />
            Blah Blah Blah <br />
            Blah Blah Blah.
          </span>
        </div>
      </li>
    );
  }
}

export default Banner;
