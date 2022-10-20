import React from "react";

import LOGO from '../../../assets/img/logo.svg';

import {
    Button,
    Navbar,
    Nav
} from "react-bootstrap";

import './Navbars.css';

const Navbars = () => {
    return (
        <div className="navbars" id="navbars">
            <div className="navbars-content">
                <div className="home-navbar">
                    <Navbar collapseOnSelect expand="lg" variant="dark">
                        <Navbar.Brand className="d-flex align-items-center justify-content-center" href="#">
                            <img src={LOGO} className="d-inline-block align-top" alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="d-flex align-items-center">
                                <Nav.Link href="#">
                                    Rent
                                </Nav.Link>
                                <Nav.Link href="#">
                                    Buy
                                </Nav.Link>
                                <Nav.Link href="#">
                                    Sell
                                </Nav.Link>
                                <Nav.Link href="#">
                                    Manage Property
                                </Nav.Link>
                                <Nav.Link href="#">
                                    Resources
                                </Nav.Link>
                                <div className="nav-ctas ms-auto">
                                    <Button className="navbar-cta1">
                                        <p>Login</p>
                                    </Button>
                                    <Button className="navbar-cta2">
                                        <p>Sign up</p>
                                    </Button>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default Navbars;