import React, {Component,Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import AboutProduct from '../pages/AboutProduct';
import HomePage from "../pages/HomePage";
import NotFountPage from '../pages/NotFountPage';


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
          <Route path="*" component={NotFountPage} />
        </Switch>
      </Fragment>
    );
  }
}



export default AppRoute;