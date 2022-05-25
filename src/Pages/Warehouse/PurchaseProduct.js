import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PurchaseProduct = () => {
  const { productId } = useParams();
  const [items, setItems] = useState(productId);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/AkasHZamaN/red-onion-restuarent/main/public/product.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const prodInfo = data?.find((item) => item._id === parseInt(productId));
        setItems(prodInfo);
      });
  }, [productId]);


  const orderQuantity = event => {
      event.preventDefault();
      const number = parseInt(event.target.number.value);
      if(number > 0 && number !== ''){
        console.log(number)
      }
      else{
          console.error('Please INPUT Positive Value')
      }
  }

  return (
    <div>
      <h1>Product Id: {productId} </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={items.photo}
            alt="Album"
          />
        </figure>
        <div className="mx-6 my-6">
          <h2 className="card-title text-secondary font-bold">{items.name}</h2>
          <span className="font-bold">$ {items.price}</span>
          <p className="font-bold">{items.quantity}<small className="text-secondary border px-2 ml-2"> In Stock</small></p>
          <small className="w-4/5 font-bold">{items.details}</small>
          <p className="font-bold my-4">Product Id: <small className="font-bold">{items._id}</small></p>
          <div className="card-actions justify-end">
          <form onSubmit={orderQuantity}>
          <input type="number" name="number" id="number" defaultValue="100" placeholder="Order Quantity" className="input input-bordered input-secondary w-1/2 max-w-xs" />
          <button as="input" className="btn btn-outline btn-secondary ml-4">Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
