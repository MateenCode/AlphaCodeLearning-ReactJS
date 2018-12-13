import React, { Component } from "react";
import "./App.css";

import Navigation from "./component/Navigation";
import Header from "./component/Header";
import Servers from "./component/Servers";
import Team from "./component/Team";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Servers />
        <Team />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
