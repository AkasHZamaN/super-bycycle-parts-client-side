import React from "react";
import about1 from '../../Images/about-1.jpg'
import about2 from '../../Images/about-2.jpg'
import about3 from '../../Images/about-3.jpg'
import cycle from '../../Images/cycle.png';

const BussinessCard = () => {
  return (
    <div>
        <div className="flex justify-center items-center mx-6">
            <img className="w-12 h-10 mr-2 " src={cycle} alt="" />
            <h1 className="font-bold text-2xl text-secondary uppercase my-6">Million Bussiness Trust Us</h1>
        </div>
      <div className="card  bg-base-100 shadow-xl">
        <div id="logo" className="flex justify-center items-center mx-6">

        <div className="text-center mr-6">
        <div className="w-24 mask mask-hexagon">
            <img src={about1} alt=""/>
        </div>
          <h1>180+</h1>
          <p>Happy Client</p>
        </div>

        <div className="text-center  mr-6">
        <div className="w-24 mx-auto mask mask-hexagon">
            <img className="text-center" src={about2} alt=""/>
        </div>
          <h1>250K+</h1>
          <p>Completed Delevery</p>
        </div>

        <div className="text-center  mr-6">
        <div className="w-24 mask mask-hexagon">
            <img src={about3} alt=""/>
        </div>
          <h1>20K+</h1>
          <p>Export Products</p>
        </div>
        </div>
        
        <div className="card-body">
            <div className="mockup-window border bg-secondary">
                <div className="flex justify-between bg-white items-center px-6">
                    <div>
                        <h1 className="text-2xl font-bold p-4">Have any question with us or get a products request ?</h1>
                        <p className="p-4">Don't Hesitate to contact us !</p>
                    </div>
                    <div>
                    <p className="mb-2">
                    <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white ">Request Quote</button>
                    </p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessCard;
