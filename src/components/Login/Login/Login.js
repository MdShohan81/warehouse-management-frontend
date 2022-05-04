import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const loginHandleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container'>
            <div className="row">
            <h1 className='text-center my-5'>Please Login here</h1>
                <div className="col-md-12 w-50 mx-auto">
                    <Form onSubmit={loginHandleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    </Form>
                    <p>New to Carspot? <Link className='text-primary text-decoration-none' onClick={navigateRegister}   to='/register'>Register here</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;