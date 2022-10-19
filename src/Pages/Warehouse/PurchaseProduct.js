import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useSingleProduct from "../../hooks/useSingleProduct";
import axios from 'axios';

const PurchaseProduct = () => {
  const { id } = useParams();
  const [items] = useSingleProduct(id);
  const [user]= useAuthState(auth)

  const orderQuantity = event => {
      event.preventDefault();
      const number = parseInt(event.target.number.value);
      if(number >= 100 && number !== '' && number <= items.quantity){
        //send order data in the database
        const order = {
          displayName: user.displayName,
          email: user.email,
          photo: items.photo,
          name: items.name,
          quantity: number,
          id: id,
          address: user?.address ? user?.address : 'Sylhet-3100, Bangladesh',
          phoneNumber: user?.phoneNumber ? user?.phoneNumber : '+8801725XXXXXX'
        }
        axios.post(`https://mighty-river-69117.herokuapp.com/order`, order)
        .then(response => {
          const {data}= response;
          if(data.insertedId){
            toast.success(`${number} items are successfully ordered. Thanks for order !`)
            event.target.reset();
          }
        })
      }
      else{
          toast.error(`Minimum order products 100 items or more but ${items.quantity} items are available only !`)
          event.target.reset();
      }
  }

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={items?.photo}
            alt="Album"
          />
        </figure>
        <div className="mx-6 my-6">
          <h2 className="card-title text-secondary font-bold">{items?.name}</h2>
          <span className="font-bold">$ {items?.price}</span>
          <p className="font-bold">{items?.quantity}<small className="text-secondary border px-2 ml-2"> In Stock</small></p>
          <small className="w-4/5 font-bold">{items?.details}</small>
          <p className="font-bold my-4">Product Id: <small className="font-bold">{items?._id}</small></p>
          <div className="card-actions justify-end items-center">
            <span className="font-semibold text-secondary">QTY: </span>
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
