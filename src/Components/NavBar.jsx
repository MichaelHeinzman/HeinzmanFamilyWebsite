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
      <div>
        <NavBarSvg />
        <ul className="NavBar">
          <TextLabel websiteTitleCSS={websiteTitleCSS} Text={websiteTitle} />
          <LinkButton id="Home" onPageChosen={onPageChosen}></LinkButton>
          <LinkButton id="Family" onPageChosen={onPageChosen}></LinkButton>
          <LinkButton id="Gallery" onPageChosen={onPageChosen}></LinkButton>
          <LinkButton id="Work" onPageChosen={onPageChosen}></LinkButton>
          <LinkButton id="Shop" onPageChosen={onPageChosen}></LinkButton>
        </ul>
      </div>
    );
  }
}

export default NavBar;
