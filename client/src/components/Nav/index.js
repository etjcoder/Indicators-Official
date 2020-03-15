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
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Indicators App
      </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

{/* 
        <a href="/protege" className="navbar-text ml-auto"> Protege  </a>
        ||
        <a href="/mentor" className="navbar-text">  Mentor </a>
        ||
        <a href="/manager" className="navbar-text">  Manager </a> */}


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/protege">Protege Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="/mentor" className="navbar-text">  Mentor Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="/manager" className="navbar-text">  Manager Dashboard</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
