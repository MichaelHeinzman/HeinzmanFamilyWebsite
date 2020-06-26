// Components
import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/website/node_modules/react";
import Picture from "./Picture";
import Banner from "./Banner";
// Scss
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/website/src/Assets/HomePage.scss";

// Images
import DadsOtherPicture from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/website/src/images/Image_1.png";
import DadsPicture from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/website/src/images/Image_2.png";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="grid">
          <div className="header">
            <Picture className="DadsPicture" src={DadsPicture} />
            <Picture className="DadsOtherPicture" src={DadsOtherPicture} />
          </div>
          <div className="body">
            <Banner />
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
