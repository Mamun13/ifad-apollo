import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLogo from '../../../asset/images/logo/LOGO.png';
import { ImSearch } from 'react-icons/im';
import Number from '../../../asset/images/footer/number.png';

const Manubar=()=> {
	
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
									<Nav.Link className="text-dark home_line">
										<Link to="/" className="text-dark">
											Home
										</Link>
									</Nav.Link>
									<Nav.Link className="text-dark bike_line">
										<Link to="" className="text-dark">
											Royalenfield
										</Link>
									</Nav.Link>

									{/* <NavDropdown title="Link" id="navbarScrollingDropdown">
										<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
										<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
									</NavDropdown> */}
									<Nav.Link className="text-dark dealer_line">
										<Link to="" className="text-dark">
											Dealer
										</Link>
									</Nav.Link>
									<Nav.Link className="text-dark news_line">
										<Link to="" className="text-dark">
											News & Events
										</Link>
									</Nav.Link>
									<Nav.Link className="text-dark about_line">
										<Link to="/about_product"  className="text-dark">
											About US
										</Link>
									</Nav.Link>
									<Nav.Link href="#action6" className="text-dark contact_line">
										<Link to="" className="text-dark">
											Contact
										</Link>
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
				</header>
			</Fragment>
		);
	}

export default Manubar;
