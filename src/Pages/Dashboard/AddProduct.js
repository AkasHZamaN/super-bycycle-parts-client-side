import React from 'react';import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit =  (data, event) => {
        console.log(data)
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success('Product Successfully Added')
        })
        event.target.reset();
    };
    return (
        <div className='text-center'>
            <h1 className='w-full max-w-lg my-2 text-2xl font-bold text-accent'>Insert Product Items</h1>
            <div className='flex justify-center items-center'>
            <form className='flex flex-col w-4/5' onSubmit={handleSubmit(onSubmit)}>
              <input className='input input-bordered input-accent w-full max-w-xs my-2' placeholder='Product Photo URL' {...register("photo", { required: true })} />
              <input className='input input-bordered input-accent w-full max-w-xs my-2' placeholder='Product Name' {...register("name")} />
              <input className='input input-bordered input-accent w-full max-w-xs my-2' placeholder='Product Price' type="number" {...register("price")} />
              <textarea className='input input-bordered input-accent w-full max-w-xs my-2' placeholder='Product Details'  {...register("details")} />
              <input className='input input-bordered input-accent w-full max-w-xs my-2' placeholder='Product Quantity' type="number" {...register("quantity")} />
              <input className='bg-secondary w-full max-w-xs my-2 py-2 text-white rounded-lg' type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;