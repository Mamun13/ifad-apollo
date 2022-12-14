import React, { Component, Fragment } from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLogo from '../../../asset/images/logo/LOGO.png';
import Carousel from 'react-bootstrap/Carousel';
import { ImSearch } from 'react-icons/im';
import Bannerimg from '../../../asset/images/banner/Sliderimg.png';
import Bannerimgtwo from '../../../asset/images/banner/slidertwo.png';
import Bannerimgthree from '../../../asset/images/banner/678.png';
import Number from '../../../asset/images/footer/number.png';

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
					<Navbar bg="secondary" expand="lg">
						<Container fluid>
							<Navbar.Brand href="#">
								<img src={NavLogo} alt="" />
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="navbarScroll" />
							<Navbar.Collapse id="navbarScroll">
								<Nav className="mx-auto my-2 my-lg-0 text-uppercase font-oswald fw-bold " style={{ maxHeight: '100px' }} navbarScroll>
									<Nav.Link href="#action1" className="text-dark">
										Home
									</Nav.Link>
									<Nav.Link href="#" className="text-dark">
										Royalenfield
									</Nav.Link>

									{/* <NavDropdown title="Link" id="navbarScrollingDropdown">
										<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
										<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
									</NavDropdown> */}
									<Nav.Link href="#action3" className="text-dark">
										Dealer
									</Nav.Link>
									<Nav.Link href="#action4" className="text-dark">
										News & Events
									</Nav.Link>
									<Nav.Link href="/about_product" className="text-dark">
										About US
									</Nav.Link>
									<Nav.Link href="#action6" className="text-dark">
										Contact
									</Nav.Link>
								</Nav>
								<Form className="d-flex">
									<Link to="/">
										<ImSearch className="mt-3 me-2 text-light" />
									</Link>
									<div className="left">
										<Link to="#">
											<img src={Number} alt="" className="float-end ms-2" />
										 </Link>
									</div>
								</Form>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					{/* banner part start */}

					<div className="banner-slider">
						<Carousel fade className=" banner-height">
							<Carousel.Item>
								<img className="d-block w-100 tire" src={Bannerimg} alt="First slide" />
								{/* <Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100 tire" src={Bannerimgtwo} alt="Second slide" />

								{/* <Carousel.Caption>
									<h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100 tire" src={Bannerimgthree} alt="Third slide" />

								{/* <Carousel.Caption>
									<h3>Third slide label</h3>
									<p>
										Praesent commodo cursus magna, vel scelerisque nisl consectetur.
									</p>
								</Carousel.Caption> */}
							</Carousel.Item>
						</Carousel>
					</div>
				</header>
			</Fragment>
		);
	}
}
export default TopBanner;
