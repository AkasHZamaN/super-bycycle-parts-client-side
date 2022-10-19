import React from "react";
import about1 from "../../Images/about-1.jpg";
import about2 from "../../Images/about-2.jpg";
import about3 from "../../Images/about-3.jpg";
import cycle from "../../Images/cycle.png";
import ContactForm from "../ContactForm/ContactForm";

const BussinessCard = () => {
  return (
    <div>
      <div className="flex justify-center items-center mx-6">
        <img className="w-12 h-10 mr-2 " src={cycle} alt="" />
        <h1 className="font-bold text-2xl text-secondary uppercase my-6">
          Million Bussiness Trust Us
        </h1>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div id="logo" className="flex justify-center items-center mx-6">
          <div className="text-center text-accent font-bold mr-6">
            <div className="w-24 mask mask-hexagon">
              <img src={about1} alt="" />
            </div>
            <h1>120K+</h1>
            <p>Happy Client</p>
          </div>

          <div className="text-center text-accent font-bold  mr-6">
            <div className="w-24 mx-auto mask mask-hexagon">
              <img className="text-center" src={about2} alt="" />
            </div>
            <h1>25K+</h1>
            <p>Completed Delevery</p>
          </div>

          <div className="text-center text-accent font-bold mr-6">
            <div className="w-24 mask mask-hexagon">
              <img src={about3} alt="" />
            </div>
            <h1>20K+</h1>
            <p>Export Products</p>
          </div>
        </div>

        <div className="stats w-4/5 mx-auto px-6 my-6">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?w=128&h=128"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>

        <div className="card-body">
          <div className="mockup-window border bg-accent">
            <div className="flex justify-between bg-white items-center px-6">
              <div>
                <h1 className="text-2xl font-bold p-4">
                  Have any question with us or get a products request ?
                </h1>
                <p className="p-4">Don't Hesitate to contact us !</p>
              </div>
              <div>
                <p className="mb-2">
                  <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white ">
                    Request Quote
                  </button>
                </p>
                <label htmlFor="contactModal" className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white">
                  Contact Us
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default BussinessCard;
