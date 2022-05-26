import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [user]);
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
                  </tr>)
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
