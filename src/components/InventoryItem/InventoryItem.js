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

    const handleUpdateItem = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const url = event.target.url.value;
        const ServiceName = event.target.ServiceName.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        const updatedItem = {email, url,ServiceName,price,quantity}

        const urls = `http://localhost:5000/product/${inventoryId}`;
        fetch(urls, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast('item updated successfully');
            event.target.reset();
            
        })
    }
    
    return (
        <div className='container'>
            <div className="row">
                <h2>Items Name: {item.ServiceName}</h2>
                <div className="col-md-6">
                <Form onSubmit={handleUpdateItem}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="url" name="url" placeholder="Photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name="ServiceName" placeholder="Item Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name="name" placeholder="Supplier Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" name="price" placeholder="price" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="number" name="quantity" placeholder="quantity" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Delivered 
                    </Button>
                </Form>
                <ToastContainer></ToastContainer>
                </div>
                <div className="col-md-6">
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