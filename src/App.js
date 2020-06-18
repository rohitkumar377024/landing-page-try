import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
