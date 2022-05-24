import React from 'react';
import  useProduct  from '../../hooks/useProduct';
import Product from '../Home/Product';
import cycle from '../../Images/cycle.png';

const Warehouse = () => {
    const [products] = useProduct();
    return (
        <div>
            <div className='flex justify-center items-center my-2'>
            <img className="w-12 h-10 mr-2" src={cycle} alt="" />
            <h1 className='text-center text-xl text-secondary font-bold my-4 uppercase'>Availabe for this Instrument</h1>
            </div>
            <div className='grid grid-cols-1 md:gridcols-2 lg:grid-cols-3 gap-6 px-6'>
                {
                    products.map(product =><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Warehouse;