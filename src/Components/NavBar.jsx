import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/node_modules/react";
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Assets/NavBar.scss";
import LinkButton from "./LinkButton";
import TextLabel from "./TextLabel";
import NavBarSvg from "./NavBarSvg";

class NavBar extends Component {
  render() {
    const { onPageChosen, websiteTitle, websiteTitleCSS } = this.props;

    return (
      <div position="fixed">
        <NavBarSvg />
        <ul className="NavBar">
          <TextLabel CName={websiteTitleCSS} Text={websiteTitle} />
          <LinkButton
            id="/"
            text="Home"
            onPageChosen={onPageChosen}
          ></LinkButton>
          <LinkButton
            id="Family"
            text="Family"
            onPageChosen={onPageChosen}
          ></LinkButton>
          <LinkButton
            id="Gallery"
            text="Gallery"
            onPageChosen={onPageChosen}
          ></LinkButton>
          <LinkButton
            id="Work"
            text="Work"
            onPageChosen={onPageChosen}
          ></LinkButton>
          <LinkButton
            id="Shop"
            text="Shop"
            onPageChosen={onPageChosen}
          ></LinkButton>
        </ul>
      </div>
    );
  }
}

export default NavBar;
