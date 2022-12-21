import React, {Component, Fragment} from 'react';
// import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import $ from 'jquery';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavLogo from '../../../asset/images/logo/LOGO.png';
import Carousel from 'react-bootstrap/Carousel';
import apolloLogo from '../../../asset/images/Apollo-Tyres-Logo-Vector.png';
import slider1 from '../../../asset/images/banner/slider1.jpg';
import slider2 from '../../../asset/images/banner/slider2.jpg';
import slider3 from '../../../asset/images/banner/slider3.jpg';

class TopBanner extends Component {
    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({isSticky: true});
            $('#navsection').addClass('sticky');
        } else if (window.scrollY < 100) {
            this.setState({isSticky: false});
            $('#navsection').removeClass('sticky');
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    // <img className="d-block w-100 tire" src={Bannerimg} alt="First slide" />
    render() {
        return (
            <Fragment>
                <section id='slider'>
					<Carousel fade pause="true">
						<Carousel.Item>
						<img className="d-block w-100 slider_img" src={slider1} alt="img"/>
							{/* <Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption> */}
						</Carousel.Item>
						<Carousel.Item>
						<img className="d-block w-100 slider_img" src={slider2} alt="img"/>
							{/* <Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption> */}
						</Carousel.Item>
						<Carousel.Item>
						<img className="d-block w-100 slider_img" src={slider3} alt="img"/>
							{/* <Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
								</p>
							</Carousel.Caption> */}
						</Carousel.Item>
					</Carousel>

					<img className="apolloLogo" src={apolloLogo} alt="img"/>
				</section>
            </Fragment>
        );
    }
}
export default TopBanner;
