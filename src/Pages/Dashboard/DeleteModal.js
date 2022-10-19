import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { toast } from 'react-toastify';

const DeleteModal = ({deleteProduct, setDeleteProduct}) => {
    const {_id, name} = deleteProduct;

    const deleteItem = id =>{
        
            const url = `https://mighty-river-69117.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount){
                    toast.success(`Product: ${name} is successfully deleted`);
                    setDeleteProduct(null);
                    

                }
                window.location.reload();
            });
        
    }


  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">
            Are You sure you want to delete ? ${name} !
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="delete-modal" className="btn btn-xs"><TrashIcon onClick={()=>deleteItem(_id)} className="w-5 h-5 cursor-pointer text-error"></TrashIcon></label>
            <label htmlFor="delete-modal" className="btn btn-xs">Cencel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
