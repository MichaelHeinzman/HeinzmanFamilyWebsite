import React, { Component } from "react";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import "./Assets/App.scss";

class App extends Component {
  state = {
    currentPage: "Home",
    websiteTitle: "Heinzman Family Website",
    websiteTitleCSS: "WebsiteTitle",
  };

  UpdateChosenPage = (PageId) => {
    this.setState((this.currentPage = { PageId }));
  };

  render() {
    return (
      <div className="App">
        <NavBar
          websiteTitle={this.state.websiteTitle}
          websiteTitleCSS={this.state.websiteTitleCSS}
          onPageChosen={this.UpdateChosenPage}
          currentPage={this.state.currentPage}
        ></NavBar>
        <HomePage> </HomePage>
      </div>
    );
  }
}

export default App;
