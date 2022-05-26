import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, index, refetch}) => {
    const {email, role}= user
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast.success(`Successfully made an admin`)
        })
    }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.email}</td>
      <td>
        {role !== 'admin' && <button className="btn btn-sm" onClick={makeAdmin}>make admin</button>}
      </td>
      <td>
        <button className="btn btn-sm">remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
