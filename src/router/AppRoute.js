import React, {Component,Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import AboutProduct from '../pages/AboutProduct';
import AboutUsP from '../pages/AboutUsP';
import HomePage from "../pages/HomePage";
import NotFountPage from '../pages/NotFountPage';
import Welcome from '../pages/Welcome';


/**
 * ComponentName
 */
 class AppRoute extends Component { 
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about_product" component={AboutProduct}/>
          <Route exact path="/about_us" component={AboutUsP}/>
          <Route exact path="/home" component={Welcome}/>
          
          <Route path="*" component={NotFountPage} />
        </Switch>
      </Fragment>
    );
  }
}



export default AppRoute;