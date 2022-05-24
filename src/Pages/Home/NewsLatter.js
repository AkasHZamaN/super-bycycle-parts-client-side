import React from 'react';
import {BellIcon} from '@heroicons/react/solid'

const NewsLatter = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 mb-12'>
                <div className='flex items-center'>
                    <BellIcon className='w-12 h-13 text-secondary'></BellIcon>
                    <h1 className='font-bold text-2xl text-secondary'>News Latter</h1>
                </div>
                <div>
                    <p className='text-normal font-bold'>Enter Your Email And Well Send You A Coupon With 10 Off Your Next Order</p>
                </div>
                <div className='flex gap-2'>
                <input type="email" placeholder="Type Email" class="input input-bordered input-success w-full max-w-xs" />
                <button class="btn bg-gradient-to-r from-primary to-secondary border-0 text-white">Success</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;