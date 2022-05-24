import React from 'react';
import '../Home/Home.css';
import blog1 from '../../Images/blogo1.png';
import blog2 from '../../Images/blogo2.png';
import blog3 from '../../Images/blogo3.png';
import blog4 from '../../Images/blogo4.png';
import blog5 from '../../Images/blogo5.png';
import blog6 from '../../Images/blogo6.png';

const BrandLogos = () => {
    return (
        <div>
            <div id='logo' className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-12 px-6 my-16'>
                <img className='transition duration-300 delay-150 hover:delay-0' src={blog1} alt="" />
                <img src={blog2} alt="" />
                <img src={blog3} alt="" />
                <img src={blog4} alt="" />
                <img src={blog5} alt="" />
                <img src={blog6} alt="" />
            </div>
        </div>
    );
};

export default BrandLogos;