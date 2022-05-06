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
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="" className='brand'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/items">All Item</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    
                    <Nav.Link href="#pricing">My Item</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                    
                    {  
                        user ?
                        <>
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
                </div>
            </div>
        </div>
    );
};

export default Header;