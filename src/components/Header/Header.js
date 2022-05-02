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
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link as={Link} to="/items">All Item</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Add Product</Nav.Link>
                    <Nav.Link href="#pricing">My Item</Nav.Link>
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