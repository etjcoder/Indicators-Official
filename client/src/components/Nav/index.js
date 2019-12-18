import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

  state = {
    image: ""
  }

  componentDidMount = () => {
   
  }

 

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          Indicators App
      </a>

        <a href="/protege" className="navbar-text ml-auto"> Protege  </a> 
        ||
        <a href="/mentor" className="navbar-text">  Mentor </a>
        ||
        <a href="/manager" className="navbar-text">  Manager </a>
      </nav>
    );
  }
}

export default Nav;
