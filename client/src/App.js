import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home";
import ProtegeDash from "./pages/ProtegeDash";
import MentorDash from "./pages/MentorDash";
import ManagerDash from "./pages/ManagerDash";
import fire from "./config/Fire";

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: "",
    }
  }

  componentDidMount() {
    // console.log("Component Mounted Home");
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({
          user: user
        })
      } else {

      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/protege">
              <ProtegeDash user={this.state.user}/>
            </Route>
            <Route exact path="/mentor">
              <MentorDash user={this.state.user} />
            </Route>
            <Route exact path="/manager">
              <ManagerDash user={this.state.user} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }


  
}

export default App;
