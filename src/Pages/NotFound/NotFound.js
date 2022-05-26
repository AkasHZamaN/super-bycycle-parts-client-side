import { HomeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <article className='w-50 mx-auto text-center'>
            <img className='w-100 mx-auto' src="https://i.postimg.cc/s2S4M55B/404not-Found-2.png" alt="" />
            <p className=' pb-5'>
            <Link className='flex justify-center items-center gap-2 font-bold' to="/"> <HomeIcon className='w-6 h-6'></HomeIcon>Go Home Page</Link>
            </p>
            </article>
        </section>
    );
};

export default NotFound;