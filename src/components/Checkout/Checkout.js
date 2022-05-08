import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {inventoryId} = useParams();
    const [item] = useItemDetails(inventoryId);
    const [user] = useAuthState(auth);
    
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email: user.email,
            service: item.ServiceName,
            inventoryId: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('https://damp-scrubland-08522.herokuapp.com/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('your order is booked')
                event.target.reset();
            }
           
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Please Order: {item.ServiceName}</h1>
            <form onSubmit={handlePlaceOrder} className='d-flex flex-column my-5'>
                <input className='mb-3 p-1 text-danger' type="email" value={user.email} name="email" placeholder='Email' disabled readOnly required/>
                <input className='mb-3 p-1 text-danger' type="text" value={item.ServiceName} name="ServiceName" placeholder='Service Name' readOnly required disabled/>
                <input className='mb-3 p-1' type="text" name="address" placeholder='Address'  required/>
                <input className='mb-3 p-1' type="text" name="phone" placeholder='Phone'  required/>
                <input className='btn btn-danger' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;