import React, { Component } from 'react'
import './App.css';
import Navbar from './compomtion/Navbar';
import News from './compomtion/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/Home"><News key="general" country="in" category="general" pageSize={10} /></Route>
            <Route exact path="/sports"><News key="sports" country="in" category="sports" pageSize={10} /></Route>
            <Route exact path="/science"><News key="science" country="in" category="science" pageSize={10} /></Route>
            <Route exact path="/business"><News key="business" country="in" category="business" pageSize={10} /></Route>
            <Route exact path="/health"><News key="health" country="in" category="health" pageSize={10} /></Route>
            <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment" pageSize={10} /></Route>
            <Route exact path="/technology"><News key="technology" country="in" category="technology" pageSize={10} /></Route>
          </Switch>

        </Router>

      </div>
    )
  }
}
