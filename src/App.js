import React, { Component } from "react";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import "./Assets/App.scss";

class App extends Component {
  state = {
    currentPage: "Home",
    TitleOfWebsite: "HeinzmanFamily \n Website",
  };

  UpdateChosenPage = (PageId) => {
    this.setState((this.currentPage = { PageId }));
  };

  render() {
    return (
      <div className="App">
        <NavBar
          currentPage={this.currentPage}
          Title={this.TitleOfWebsite}
          onPageChosen={this.UpdateChosenPage}
        ></NavBar>
        <HomePage />
      </div>
    );
  }
}

export default App;
