import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/logo (1).png';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth'



const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="" className='brand'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                    
                    {  
                        user ?
                        <>
                        <Nav.Link as={Link} to="/manageinventory">Manage Item</Nav.Link>
                        <Nav.Link as={Link} to='/myitem'>My Item</Nav.Link>
                        <Nav.Link as={Link} to='/addproduct'>Add Product</Nav.Link>
                        <p><button className='text-decoration-none btn' to="/signout" onClick={handleSignOut}>Sign out</button></p>
                        </> 
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
    );
};
export default Header;