// Components
import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/node_modules/react";
import Picture from "./Picture";
import Banner from "./Banner";
// Scss
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Assets/HomePage.scss";

// Images
import DadsOtherPicture from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/images/Image_1.png";
import DadsPicture from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/images/Image_2.png";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="flex">
          <ul className="header">
            <Picture className="DadsPicture" src={DadsPicture} />
            <Picture className="DadsPicture" src={DadsPicture} />
          </ul>
          <ul className="body">
            <Banner></Banner>
          </ul>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
