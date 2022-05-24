import React from "react";

const Product = ({ product }) => {
  const { name, photo, quantity, details, price } = product;
  return (
    <div className="mb-6">
      <div id="logo" className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-80"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
        <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" defaultChecked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
        </div>
          <p className="font-bold">$ {price}</p>
          <p>{quantity}<small className="text-secondary font-bold"> In Stock</small></p>
          <p><small>{details}</small></p>
          <div className="card-actions justify-end">
            <button className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
