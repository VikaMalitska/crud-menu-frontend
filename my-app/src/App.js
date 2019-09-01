import React, { Component } from "react";
import HotdogsPage from "./pages/hotdogs";
import AddHotdogPage from "./pages/hotdog";
import UpdateHotdogPage from "./pages/updadeHotdog";
import "./App.css";

class App extends Component {
  state = {
    page: "hotdogs",
    data: {}
  };

  showPage(page, data = {}) {
    this.setState({
      page,
      data
    });
  }

  render() {
    switch (this.state.page) {
      case "hotdogs":
        return (
          <HotdogsPage
            pageHandler={(page, data) => {
              this.showPage(page, data);
            }}
          />
        );
      case "addHotdog":
        return (
          <AddHotdogPage
            data={this.state.data}
            pageHandler={page => {
              this.showPage(page);
            }}
          />
        );
        case "updateHotdog":
          return (
            <UpdateHotdogPage
              data={this.state.data}
              pageHandler={page => {
                this.showPage(page);
              }}
            />
          );  
      default:
        return "";
    }
  }
}

export default App;
