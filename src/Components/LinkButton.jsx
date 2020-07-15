import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/node_modules/react";
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Assets/HomePage.scss";
import { Link } from "react-router-dom";

class LinkButton extends Component {
  render() {
    const { onPageChosen } = this.props;

    return (
      <li>
        <Link to={this.props.id} onClick={() => onPageChosen(this.props.id)}>
          {this.props.text}
        </Link>
      </li>
    );
  }
}

export default LinkButton;
