import React from "react";
import aboutImages from "../../Images/about-images.jpg";
import about1 from "../../Images/about-1.jpg";
import about2 from "../../Images/about-2.jpg";
import about3 from "../../Images/about-3.jpg";

const AboutProduct = () => {
  return (
    <div className="w-full mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={aboutImages} className="max-w-sm rounded-lg " alt="" />
          <div className="mx-2">
            <h1 className="text-5xl font-bold">Best Adventure Tourer Bikes</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <div className="carousel carousel-center max-w-lg p-4 space-x-2 bg-neutral rounded-box ">
              <div className="carousel-item">
                <img
                  src={about1}
                  className="rounded-box" alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src={about2}
                  className="rounded-box" alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src={about3}
                  className="rounded-box" alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
