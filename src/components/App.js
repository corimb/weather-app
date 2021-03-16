import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import heartIconRed from '../images/heart.png';

import '../style/App.scss';
import Favorites from './Favorites';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <footer className="footer">
        <p>Made with <img src={heartIconRed} alt="heart Icon"></img> by <a href="https://github.com/corimb/" target="_blank" rel="noopener noreferrer">Corina</a></p>
      </footer>
    </Router>
  );
};

export default App;

