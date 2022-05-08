import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myitem = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        const getOrders = async() =>{
            const email = user.email;
            const url =`http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);

        }
        getOrders();

    },[user])
    return (
        <div>
            <h1 className='text-center'>Your Order: {orders.length}</h1>
        </div>
    );
};

export default Myitem;