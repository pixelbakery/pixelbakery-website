import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Team from './pages/Bio';


const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> 404: Page Not Found</h1>
    </div>
  );
};


function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/about" component={About} exact />
        <Route path='/:id' component={Team} exact /> 
        <Route component={ErrorPage} />   
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App