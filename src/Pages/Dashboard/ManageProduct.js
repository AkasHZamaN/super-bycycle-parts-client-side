import { CurrencyBangladeshiIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useProduct from "../../hooks/useProduct";

const ManageProduct = () => {
    const [user]= useAuthState(auth)
  const [products, setProducts] = useProduct();

  const deleteItem = id =>{
    const proceed = toast.success('Are You Sure? Your Product has been deleted !')
    if(proceed){
        const url = `https://mighty-river-69117.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const remainingItem = products.filter(item => item._id !== id);
            setProducts(remainingItem);
        });
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
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
                {
                    products.map((item, index) => <tr key={item._id}>
                        <th>{index + 1}</th>
                        <td>{user.displayName}</td>
                        <td>{user.email}</td>
                        <td><img className="w-16 h-16" src={item.photo} alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{user?.address ? user?.address : 'Shibgonj, Sylhet-3100, Bangladesh'}</td>
                        <td>{user?.phoneNumber ? user?.phoneNumber : '+8801725XXXXX'}</td>
                        <td><CurrencyBangladeshiIcon className="w-8 h-8 text-secondary"></CurrencyBangladeshiIcon></td>
                        <td><TrashIcon onClick={()=>deleteItem(item._id)} className="w-8 h-8 cursor-pointer text-error"></TrashIcon></td>
                      </tr>)
                }
             
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
