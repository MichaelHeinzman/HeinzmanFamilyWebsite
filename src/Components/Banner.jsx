import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
      <li>
        <div className="BannerContent">
          <span>
            Blah blah blah <br />
            Blah Blah Blah <br />
            Blah Blah Blah.
          </span>
        </div>
        <div className="Welcome">
          <div>
            <span>
              Welcome
              <br />
            </span>
          </div>
        </div>
      </li>
    );
  }
}

export default Banner;
