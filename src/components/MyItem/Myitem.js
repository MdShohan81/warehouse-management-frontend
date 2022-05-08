import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Myitem = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        const getOrders = async() =>{
            const email = user.email;
            const url =`https://damp-scrubland-08522.herokuapp.com/order?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }
            catch(error){
                console.log(error);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('login')
                }
            }

        }
        getOrders();

    },[user]);
    const handleDeleteMyItem = id => {
        const proceed = window.confirm('are you sure');
        if(proceed){
            const url =`https://damp-scrubland-08522.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
                toast('Delete Successfully')
            })
        }
    }
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-12 col-12">
                <h1 className='text-center'>Your Order: {orders.length}</h1>
            {
                orders.map(order => <div className='card my-3 mx-auto p-2' key={order._id}>
                    <h3 className='text-center text-secondary'>order details</h3>
                    <div className="card-body">
                    <p>user email: <span className='text-danger'>{order.email}</span></p>
                    <p>Service: <span className='text-danger'>{order.service}</span></p>
                    <Button onClick={() => handleDeleteMyItem(order._id)} variant="danger">Delete</Button>
                    </div>
                </div>)
            }
                </div>
            </div>
        </div>
    );
};

export default Myitem;