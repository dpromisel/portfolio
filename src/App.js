import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import './App.css';

import Home from './components/home';
import NbaApp from './components/nbaIndex/nbaApp';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
          <Route path={process.env.PUBLIC_URL + '/nbaIndex'} component={NbaApp}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
