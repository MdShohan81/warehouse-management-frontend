import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Add Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-3' placeholder='Product Name' {...register("serviceName", { required: true, maxLength: 20 })} />
            <input className='mb-3' placeholder='Supplier Name' {...register("Name")} />
            <input className='mb-3' placeholder='Description' {...register("reviewText")} />
            <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
            <input className='btn btn-danger py-3 w-50 mx-auto' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;