import React from "react";
import newCycle from "../../Images/secoundbanner.jpg";
import reviewPic from "../../Images/review-pic.png";
import reviewPic2 from "../../Images/reviewPic.png";
import reviewPic3 from "../../Images/reviews-concept.png";
import cycle from '../../Images/cycle.png';

const ReviewCarousal = () => {
  return (
    <div className="">
        <div className="flex items-center mt-6 mx-6">
            <img className="w-12 h-10 mr-2 " src={cycle} alt="" />
            <h1 className="font-bold text-2xl text-secondary uppercase my-6">Customer Review Zone</h1>
        </div>
      <div className="card lg:card-side  bg-base-100  mb-6 p-6">
        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={reviewPic} className="w-full" alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={reviewPic2} className="w-full" alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={reviewPic3} className="w-full" alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={reviewPic} className="w-full" alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item lg:w-3/5">
          <img style={{height:"385px"}} src={newCycle} className="w-full mx-auto rounded-3xl " alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousal;
