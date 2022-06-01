import { CurrencyBangladeshiIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const ManageProductDetails = ({item, index, setDeleteProduct}) => {
    const [user]= useAuthState(auth)
    


    

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.displayName}</td>
            <td>{user.email}</td>
            <td><img className="w-16 h-16" src={item.photo} alt="" /></td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{user?.address ? user?.address : 'Shibgonj, Sylhet-3100, Bangladesh'}</td>
            <td>{user?.phoneNumber ? user?.phoneNumber : '+8801725XXXXX'}</td>
            <td><CurrencyBangladeshiIcon className="w-8 h-8 text-secondary"></CurrencyBangladeshiIcon></td>
            <td>
            <label onClick={()=>setDeleteProduct(item)} htmlFor="delete-modal" className=""><TrashIcon className="w-8 h-8 cursor-pointer text-error"></TrashIcon></label>
            </td>
        </tr>
    );
};

export default ManageProductDetails;