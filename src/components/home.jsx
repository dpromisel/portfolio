import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';

import '../App.css';

import NavBar from './navbar';
import LandingPage from './landing_page';
import Work from './work';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <LandingPage/>
        <Work/>
        <Skills/>
      </div>
    );
  }
}

export default Home;
