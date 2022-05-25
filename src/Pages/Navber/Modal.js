import { MailIcon, PencilAltIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import firebaselogo from '../../Images/firebase.png';

const Modal = ({user}) => {
    
    if(user){
        // console.log("modal user", user);
    }

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
            <div className="avatar online">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} alt="" />
                </div>
            </div>
            <div className="text-left font-bold">
            <p className="py-4 flex gap-4">
                <UserIcon className="w-6 h-6 text-secondary"></UserIcon>
            {user?.displayName}
          </p>
          <p className="pb-4  flex gap-4">
          <MailIcon className="w-6 h-6 text-secondary"></MailIcon>
            {user?.email}
          </p>
          <p className="pb-4  flex gap-4">
            <img className="w-6 h-6 text-secondary" src={firebaselogo} alt="" />
            {user?.providerId}
          </p>
          <p className="pb-4  flex gap-4">
              <PencilAltIcon className="w-6 h-6 text-secondary"></PencilAltIcon>
            {user?.uid}
          </p>
            </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn bg-secondary text-white font-bold border-0">
             X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
