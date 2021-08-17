import './index.css'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'


const App = () => {
  return (
    <Router>
      <div>
      <div className="navbar">
        
        <nav>
          <ul>
            <li>
              <Link to="/"> 
                <Button variant="outline-light btn-space">Home</Button>{' '}
              </Link>
            </li>
            <li>
              <Link to="/Projects">
                <Button variant="outline-light btn-space">Projects</Button>{' '}
              </Link>
            </li>
            <li>
              <Link to="/About">
                  <Button variant="outline-light btn-space">About</Button>{' '}
              </Link>
            </li>
          </ul>
        </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}


export default App;
