import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App