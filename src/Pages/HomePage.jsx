import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/node_modules/react";

// Components
import Picture from "../Components/Picture";
import Banner from "../Components/Banner";

// Scss.
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Assets/HomePage.scss";

// Images.
import DadsOtherPicture from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Images/Image_1.png";
import DadsPicture from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Images/Image_2.png";

// Welcome Banner.
const WelcomeHeader = "Welcome";
const WelcomeText = "Blah Blah Blah Blah Blah Blah Blah Blah!";

// About Banner.
const AboutHeader = "About";
const AboutText = "Blah Blah Blah Blah Blah Blah Blah Blah!";

// Our Events Banner.
const EventsHeader = "Our Events";
const EventText = "Blah Blah Blah Blah Blah Blah Blah Blah!";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="flex">
          <ul className="header">
            <Picture className="DadsPicture" src={DadsPicture} />
            <Picture className="DadsOtherPicture" src={DadsOtherPicture} />
          </ul>
          <ul className="body">
            <Banner Text={WelcomeText} Header={WelcomeHeader} />
            <Banner Text={AboutText} Header={AboutHeader} />
            <Banner Text={EventText} Header={EventsHeader} />
          </ul>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
