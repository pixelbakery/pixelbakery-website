import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Team from './pages/Bio';
import Services from './pages/Services';
import SinglePost from './pages/Singlepost';
import Nav from './components/Navigation';

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
      <div className="">
          <Switch>
            <Route path="/" exact>
              <Home />
              <Footer />
            </Route>
            <Route >
              <Nav />
              <Switch>
                <Route path="/services" component={Services} exact />
                <Route path="/work" component={Work} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/about" component={About} exact />
                <Route path="/post" component={SinglePost} exact />
                <Route path='/:id' component={Team} exact /> 

                <Route component={ErrorPage} />   
              </Switch>
              <Footer />
            </Route>
            </Switch>
        </div>
    </BrowserRouter>

    
  )
}

export default App