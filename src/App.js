import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar/toolbar.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Toolbar/>
            <Router>
                <Routes />
            </Router>
        </div>
    );
  }
}

export default App;
