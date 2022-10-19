import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { TrashIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://mighty-river-69117.herokuapp.com/order?email=${email}`;
      const { data } = await axios.get(url, {
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setOrders(data);
    };
    getOrders();
  }, [user]);


  const deleteItem = id =>{
    const proceed = toast.success('Product Successfully Deleted');
    if(proceed){
        const url =`https://mighty-river-69117.herokuapp.com/order/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log("delete api data",data);
        const remainingItem = orders.filter(order => order._id !== id);
                setOrders(remainingItem);
    })
    }
  }


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actin</th>
            </tr>
          </thead>
          <tbody>
              {
                  orders.map((order, index) => <tr key={order.id}>
                    <th>{index + 1}</th>
                    <td>{order.displayName}</td>
                    <td>{order.email}</td>
                    <td><img className="w-16 h-16" src={order.photo} alt="" /></td>
                    <td>{order.name}</td>
                    <td>{order.quantity}</td>
                    <td>{user?.address ? user?.address : 'Shibgonj, Sylhet-3100, Bangladesh'}</td>
                    <td>{user?.phoneNumber ? user?.phoneNumber : '+8801725XXXXX'}</td>
                    <td><TrashIcon onClick={()=>deleteItem(order._id)} className="w-8 h-8 cursor-pointer text-error"></TrashIcon></td>
                  </tr>)
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
