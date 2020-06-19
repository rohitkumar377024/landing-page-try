import React from 'react';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
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
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
