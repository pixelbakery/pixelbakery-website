import React from 'react';
import {Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import CareersCreativeDirector from './pages/careers/careers-creative-director';
import Team from './pages/Bio';
import ServicesAnimation from './pages/Services/Services-Animation';
import SinglePost from './pages/Singlepost';
import Nav from './components/Navigation';
import BecomeAClient from './pages/BecomeAClient';
import IconRef from './pages/IconRef';
import NotFound from './pages/404';


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
                <Route path="/services/animation" component={ServicesAnimation} exact />
                <Route path="/services" component={Work} exact />
                <Route path="/work" component={Work} exact />
                <Route path="/onboarding" component={BecomeAClient} exact />
                <Route path="/icons" component={IconRef} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/careers" component={Careers} exact />
                <Route path="/careers/creative-director" component={CareersCreativeDirector} exact />
                <Route path="/about" component={About} exact />
                <Route path="/recipes" component={SinglePost} exact />
                {/* <Route path='/:id' component={Team} exact />  */}
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
              </Switch>
              <Footer />
            </Route>
            </Switch>
        </div>
    </BrowserRouter>

    
  )
}

export default App