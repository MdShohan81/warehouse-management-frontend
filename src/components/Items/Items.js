import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useItem from '../../hooks/useItem';

const Items = () => {
    const [items,setItems] = useItem();
    const handleDelete = id => {
        const proceed = window.confirm('are you sure');
        if(proceed){
            const url =`http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                toast('Delete Successfully')
            })
        }
    }
    return (
        <div className="container">
        <div className="row">  
            <h3 className='text-center my-5'>Our Items</h3>  
            <div className="col-md-12 item-container">
        {
            items.map(item => <div className='card' key={item._id}>
            <img src={item.picture} className='img-fluid' alt="img" />
            <div className='card-body'>
                <p>ItemName: <b>{item.ServiceName}</b></p>
                <p>Price: <b>{item.price}</b></p>
                <p>quantity: <b>{item.quantity}</b></p>
                <p>Supplier Name: <b>{item.name}</b></p>
                <p>{item.reviewText}</p>
                <Button onClick={() => handleDelete(item._id)} variant="danger">Delete</Button>
            </div>
            </div>)

        }
        
            </div>
            <Link to="/addproduct"><button className='btn btn-danger my-3'> Add New Item</button></Link>
            <ToastContainer></ToastContainer>
        </div>
    </div>
    );
};

export default Items;