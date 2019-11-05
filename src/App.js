import React, { Component } from 'react';
import './App.css';
import Films from './components/films';
import People from './components/people';
import Home from './components/home';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <Router>
        <Link to='/' className='links'>Home</Link>
        <Link to="/films" className='links'>Show Me the Films</Link>
        <Link to="/people" className='links'>Show Me the People</Link>
        <Route path="/films" component={Films} />
        <Route path="/people" component={People} />
        <Route path='/' component={Home} />
      </Router>
    ) 
  }
}

export default App;


