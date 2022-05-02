import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/logo (1).png';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="" className='brand'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link to="">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;