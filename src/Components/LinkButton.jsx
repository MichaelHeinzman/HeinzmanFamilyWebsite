import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/node_modules/react";
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/familywebsite/src/Assets/HomePage.scss";

class LinkButton extends Component {
  render() {
    const { onPageChosen } = this.props;

    return (
      <li>
        <a href={this.props.id} onClick={() => onPageChosen(this.props.id)}>
          {this.props.id}
        </a>
      </li>
    );
  }
}

export default LinkButton;
