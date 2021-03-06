import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://damp-scrubland-08522.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast('item added successfully');
            
        })
    };
    
   
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3'>Add Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-3' placeholder='Product Name' {...register("ServiceName", { required: true, maxLength: 20 })} />
            <input className='mb-3' placeholder='Supplier Name' {...register("name")} />
            <input className='mb-3' placeholder='Photo Url' type='url' {...register("picture")} />
            <input className='mb-3' placeholder='Description' {...register("reviewText")} />
            <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
            <input className='btn btn-danger py-3 w-50 mx-auto' type="submit" value='Add Product' />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;