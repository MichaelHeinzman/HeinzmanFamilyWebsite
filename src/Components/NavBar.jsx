import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/node_modules/react";
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Assets/HomePage.scss";
import LinkButton from "./LinkButton";
import TextLabel from "./TextLabel";
import NavBarSvg from "./NavBarSvg";

class NavBar extends Component {
  render() {
    const { onPageChosen } = this.props;
    return (
      <div id="NavBar">
        <NavBarSvg />
        <TextLabel id="Heinzman_Family__Website" Text={this.props.Title} />
        <ul id="NavBar">
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
