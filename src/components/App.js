import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import {Route, Link} from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import Nav from './nav';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <Nav/>
        <Route exact path ="/" component ={Home}/>
        <Route exact path ="/chat" component ={Chat}/>
      </div>
    );
  }
}

export default App;
