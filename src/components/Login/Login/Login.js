import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


      const navigateRegister = event => {
        navigate('/register')
    }
    let errorMessages;
    if(error){
        errorMessages = <div>
                            <p className='text-danger'>{'Please put correct email/password'}</p>
                        </div>
    }
    if(loading || sending){
        return <Loading></Loading>
    }
    if (user){
        navigate(from, { replace: true });
    }
    const loginHandleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email check your inbox')
        }
    }
    

    return (
        <div className='container'>
            <div className="row">
            <h1 className='text-center my-5'>Please Login here</h1>
                <div className="col-md-12 w-50 mx-auto">
                    <Form onSubmit={loginHandleSubmit}>
                    {errorMessages}
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
                    <p>Forget Password? <Button  className='text-danger pe-auto text-decoration-none' variant='Link' onClick={ resetPassword }>Forget Password</Button></p>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            
        </div>
    );
};

export default Login;