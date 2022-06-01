import React, { useState } from "react";
import useProduct from "../../hooks/useProduct";
import DeleteModal from "./DeleteModal";
import ManageProductDetails from "./ManageProductDetails";

const ManageProduct = () => {
  const [products] = useProduct();
  const [deleteProduct, setDeleteProduct] = useState(null);

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
                    products.map((item, index) => <ManageProductDetails 
                    key={item._id} 
                    item={item} 
                    index={index}
                    setDeleteProduct={setDeleteProduct}
                    ></ManageProductDetails> 
                    )
                }
             
          </tbody>
        </table>
      </div>
      {deleteProduct && <DeleteModal 
      deleteProduct={deleteProduct}
      setDeleteProduct={setDeleteProduct}
      ></DeleteModal>}
    </div>
  );
};

export default ManageProduct;
