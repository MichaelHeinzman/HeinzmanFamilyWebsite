import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

// NavBar
import NavBar from "./Components/NavBar";

//Pages
import HomePage from "./Pages/HomePage";
import FamilyPage from "./Pages/FamilyPage";
import GalleryPage from "./Pages/GalleryPage";
import NotFoundPage from "./Pages/404";

class App extends Component {
  state = {
    currentPage: "Home",
    websiteTitle: "Heinzman Family Website",
    websiteTitleCSS: "WebsiteTitle",
  };

  // Delete this
  UpdateChosenPage = (PageId) => {
    this.setState((this.currentPage = { PageId }));
  };

  render() {
    return (
      <Router>
        <NavBar
          websiteTitle={this.state.websiteTitle}
          websiteTitleCSS={this.state.websiteTitleCSS}
          onPageChosen={this.UpdateChosenPage}
          currentPage={this.state.currentPage}
        ></NavBar>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Family" component={FamilyPage} />
          <Route exact path="/Gallery" component={GalleryPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
    // <div className="App">
    //   <NavBar
    //     websiteTitle={this.state.websiteTitle}
    //     websiteTitleCSS={this.state.websiteTitleCSS}
    //     onPageChosen={this.UpdateChosenPage}
    //     currentPage={this.state.currentPage}
    //   ></NavBar>
    //   <HomePage> </HomePage>
    // </div>
  }
}

export default App;
