import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

import ButtonsPage from './Buttons/ButtonsPage';
import InputsPage from './Inputs/InputsPage';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <div className="main-wrapper">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/buttons" component={ButtonsPage}/>
              <Route exact path="/inputs" component={InputsPage}/>

              {/* 404 page */}
              <Route render={() => 
                <div className="fourOfour">
                  <h1>Lost? Me too...</h1>
                </div>
              }/>

            </Switch>
          </div>
          <Footer />
        </Router>
      </>
    )
  }
};

export default App;
