import React, { Component, Fragment } from 'react';
import '../asset/css/main.css';
import '../asset/css/animate.css';
// import '../asset/css/style.css'; 
import '../asset/css/responsive.css';
import WOW from 'wowjs';
import TopBanner from "../components/Section/TopBanner/TopBanner";
import BestBike from '../components/Section/BestBike/BestBike';
import Gallery from '../components/Section/Gallery/Gallery';
import Video from '../components/Section/Video/Video';
import NewsEvents from '../components/Section/NewsEvents/NewsEvents';
import Partner from '../components/Section/Partner/Partner';
import MapSearch from '../components/Section/MapSearch/MapSearch';
import Footer from '../components/Section/Footer/Footer';
// import MobileNav from '../components/MobileNav/MobileNav';
import Loading from '../components/Loading/Loading';




class HomePage extends Component {


  state = { isLoading: true }
  componentDidMount() {
    window.addEventListener('load', (event) => {
      this.setState({isLoading: false})
    });
    new WOW.WOW({
      live: false
    }).init();
  }
  
  render() {
    if(this.state.isLoading) {
      return (<Loading/>);
    }else {
      return (
        <Fragment>
          {/* <MobileNav/> */}
          <TopBanner />
          <BestBike/>
          <Gallery/>
          <Video/>
          <NewsEvents/>
          <Partner/>
          <MapSearch/>
          <Footer/>
        </Fragment>
      );
    }
  }
}

export default HomePage;