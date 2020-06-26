import React, {
  Component,
} from "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/website/node_modules/react";
import "/Seth/WebProjectFiles/HeinzmanFamilyWebsite/website/src/Assets/HomePage.scss";

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
