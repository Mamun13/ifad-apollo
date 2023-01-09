import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLogo from '../../../asset/images/logo/LOGO.png';
import {AiOutlineSearch} from 'react-icons/ai';
import Number from '../../../asset/images/footer/contact.png';

const Manubar = () => {

    return (
        <Fragment>
            <header id="header">
                <Navbar bg="light" expand="lg" className='py-3'>
                    <Container fluid className='px-3 px-lg-5'>
                        <Navbar.Brand> 
                                <NavLink to="/" className="logoLink">
                                    <img className='nav_logo' src={NavLogo} alt="img"/>
                                </NavLink>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink exact={true} to="/" className="nav-link">
                                    <span className="menu-title">Home</span>
                                </NavLink>
                                <NavLink to="/about_product" className="nav-link">
                                    <span className="menu-title">Products</span>
                                </NavLink>
                                <NavLink to="/page-link-here" className="nav-link">
                                    <span className="menu-title">Dealer</span>
                                </NavLink>
                                <NavLink to="/page-link-here" className="nav-link">
                                    <span className="menu-title">News & Events</span>
                                </NavLink>
                                <NavLink to="/about_us" className="nav-link">
                                    <span className="menu-title">About US</span>
                                </NavLink>
                                <NavLink to="/page-link-here" className="nav-link">
                                    <span className="menu-title">Contact</span>
                                </NavLink>
                            </Nav>

                            <Form className="d-flex flex-column  align-items-lg-end  align-items-center">
                                <InputGroup className="mb-1">
                                    <Form.Control className="ps-3 pe-4 searchBox" placeholder="SEARCH"/>
                                    <AiOutlineSearch className='searchIcon'/>
                                </InputGroup>

                                <div className="hotline">
                                    <img src={Number} alt="" className="ms-2 hotNumber"/>
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
