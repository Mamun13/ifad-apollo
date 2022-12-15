import React, { Component, Fragment } from 'react';
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
import ApolloLogo from '../../../asset/images/Apollo-Tyres-Logo-Vector.png';
import Bannerimg from '../../../asset/images/banner/Sliderimg.png';
import Bannerimgtwo from '../../../asset/images/banner/slidertwo.png';
import Bannerimgthree from '../../../asset/images/banner/678.png';

class TopBanner extends Component {
	onScroll = () => {
		if (window.scrollY > 100) {
			this.setState({ isSticky: true });
			$('#navsection').addClass('sticky');
		} else if (window.scrollY < 100) {
			this.setState({ isSticky: false });
			$('#navsection').removeClass('sticky');
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	render() {
		return (
			<Fragment>
				<header className="sectionOne topSection clearfix" id="sectionOne">
					<div className="banner-slider">
						<Carousel fade className=" banner-height">
							<Carousel.Item>
								<img className="d-block w-100 tire" src={Bannerimg} alt="First slide" />
								<Carousel.Caption>
									<img src={ApolloLogo} alt="" className="apollo_logo" />
									{/* <h3>First slide label</h3> */}
									{/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100 tire" src={Bannerimgtwo} alt="Second slide" />

								<Carousel.Caption>
									<img src={ApolloLogo} alt="" className="apollo_logo" />

									{/* <h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100 tire" src={Bannerimgthree} alt="Third slide" />

								<Carousel.Caption>
									<img src={ApolloLogo} alt="" className="apollo_logo" />

									{/* <h3>Third slide label</h3>
									<p>
										Praesent commodo cursus magna, vel scelerisque nisl consectetur.
									</p> */}
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</header>
			</Fragment>
		);
	}
}
export default TopBanner;
