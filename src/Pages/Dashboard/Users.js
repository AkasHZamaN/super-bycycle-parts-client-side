import React from "react";
import { useQuery } from 'react-query';
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {data: users, isLoading, refetch} = useQuery("users", ()=>fetch('https://mighty-river-69117.herokuapp.com/user', {
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  }).then((res) => res.json())
  );

  if(isLoading){
      return <Loading></Loading>
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
              {
                  users.map((user, index) => <UserRow
                  key={user?._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                  ></UserRow>)
              }          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;