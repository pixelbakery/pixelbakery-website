import React from "react";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Careers from "./pages/Careers";
import ApplicationSubmitted from "./pages/careers/Careers-Submitted";
import CareersCreativeDirector from "./pages/careers/careers-creative-director";
import ProjectFile from "./pages/education/Edu-Project-File";
import Team from "./pages/Bio";
import ServicesAnimation from "./pages/services/Services-Animation";
import SinglePost from "./pages/Singlepost";
import Nav from "./components/Navigation";
import BecomeAClient from "./pages/BecomeAClient";
import IconRef from "./pages/IconRef";
import PrivacyPolicy from "./pages/Privacy";
import NotFound from "./pages/404";
import Login from "./pages/Login";
import SiteMap from "./pages/Sitemap";
import BlackMug from "./pages/store/Store-Product-Mug-Black";
import WhiteMug from "./pages/store/Store-Product-Mug-White";
import OrderConfirmation from "./pages/store/Store-Order-Confirmation";

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Switch>
          <Route path='/' exact>
            <Home />
            <Footer />
          </Route>
          <Route>
            <Nav />
            <Switch>
              <Route
                path='/services/animation'
                component={ServicesAnimation}
                exact
              />
              <Route path='/services' component={Work} exact />
              <Route path='/work' component={Work} exact />
              <Route path='/onboarding' component={BecomeAClient} exact />
              <Route path='/icons' component={IconRef} exact />
              <Route path='/contact' component={Contact} exact />
              <Route path='/careers' component={Careers} exact />
              <Route
                path='/careers/creative-director'
                component={CareersCreativeDirector}
                exact
              />
              <Route
                path='/careers/application/submission-conformation'
                component={ApplicationSubmitted}
                exact
              />
              <Route path='/about' component={About} exact />

              <Route path='/login' component={Login} exact />
              <Route path='/recipes' component={SinglePost} exact />
              <Route path='/store/black-mug' component={BlackMug} exact />
              <Route path='/store/white-mug' component={WhiteMug} exact />
              <Route path='/store' component={Store} exact />
              <Route
                path='/education/project-file'
                component={ProjectFile}
                exact
              />
              <Route path='/sitemap' component={SiteMap} exact />
              <Route
                path='/store/checkout/order-confirmed'
                component={OrderConfirmation}
                exact
              />
              {/* <Route path='/:id' component={Team} exact />  */}

              <Route path='/privacy-policy' component={PrivacyPolicy} exact />
              <Route path='/404' component={NotFound} />
              <Redirect to='/404' />
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
