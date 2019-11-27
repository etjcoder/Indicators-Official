import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home";
import ProtegeDash from "./pages/ProtegeDash";
import MentorDash from "./pages/MentorDash";
import ManagerDash from "./pages/ManagerDash";


class App extends Component {

  constructor() {
    super()
    this.state = {
      user: "",
    }
  }

  componentDidMount() {
    console.log("Component Mounted Home")
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
              <ProtegeDash />
            </Route>
            <Route exact path="/mentor">
              <MentorDash />
            </Route>
            <Route exact path="/manager">
              <ManagerDash />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }


  
}

export default App;
