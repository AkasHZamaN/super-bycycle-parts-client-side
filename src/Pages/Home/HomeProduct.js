import React from 'react';
import useProduct from '../../hooks/useProduct';
import Product from './Product';
import cycle from '../../Images/cycle.png';

const HomeProduct = () => {
    const [products] = useProduct();
    return (
        <div className=''>
            <div className='flex items-center mb-6 px-6'>
                <img className="w-12 h-10 " src={cycle} alt="" />
                <h1 className='text-3xl text-accent font-bold ml-2'>New Product</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 px-6 '>
                {
                    products.slice(0,6).map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;