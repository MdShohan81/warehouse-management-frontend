import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const InventoryItem = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url =  `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, []);

   const handleReduceQuantity = () =>{
       const quantity = parseInt(item.quantity) - 1;
       const updateQuantity = { quantity };
       const url = `http://localhost:5000/product/${inventoryId}`;
       fetch(url, {
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(updateQuantity)
       })
       .then(res => res.json())
       .then(data => {
           console.log('success', data);
           alert('Delivery success');
           
       });
   }
    
    return (
        <div className='container'>
            <div className="row">
                <h2>Items Name: {item.ServiceName}</h2>
                <div className="col-md-8">
                <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-5">
                    <img src={item.picture} className="img-fluid w-100" alt="img"/>
                    </div>
                    <div className="col-md-7">
                    <div className="card-body">
                        <small className="card-title">id: <span className='text-danger'> {item._id}</span></small>
                        <h5 className="card-title">{item.ServiceName}</h5>
                        <h3 className="card-title text-danger">${item.price}</h3>
                        <h6 className="text-danger">supplier: {item.name}</h6>
                        <h6 className="text-danger">quantity: {item.quantity}</h6>
                        <span className='card-title'>Description:</span>
                        <p className="card-text"><small>{item.reviewText}</small></p>
                        <button onClick={handleReduceQuantity} className='btn btn-danger'>Delivered</button>
                    </div>
                    </div>
                </div>
                </div>
                <ToastContainer></ToastContainer>
                </div>
                <div className="col-md-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" name="quantity" placeholder="quantity" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        ReStoke
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;