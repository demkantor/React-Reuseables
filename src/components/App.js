import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <div className="main-wrapper">
            <Switch>
              <Route exact path="/" component={Home}/>

              {/* 404 page */}
              <Route render={() => 
                <div className="fourOfour">
                  <h1>Lost? Me too...</h1>
                </div>
              }/>

            </Switch>
          </div>
        </Router>
      </>
    )
  }
};

export default App;
