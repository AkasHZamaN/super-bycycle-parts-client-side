import React from "react";
import banner1 from '../../Images/banner1.jpg';
import banner2 from '../../Images/banner2.jpg';

const AddBanner = () => {
  return (
    <div>
      <div className="carousel rounded-box w-full px-6 mb-12">
        <div className="carousel-item w-1/2">
          <img
            src={banner1}
            className="w-full" alt=""
          />
        </div>
        <div className="carousel-item w-1/2">
          <img
            src={banner2}
            className="w-full" alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddBanner;
