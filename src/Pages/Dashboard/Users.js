import React from "react";
import { useQuery } from 'react-query';
import Loading from '../../Pages/Loading/Loading';

const Users = () => {
  const {data: users, isLoading} = useQuery('users', ()=> fetch('http://localhost:5000/user')
  .then(res => res.json()));

  if(isLoading){
      return <Loading></Loading>
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
                  users.map((user, index) => <tr>
                    <th>{index + 1}</th>
                    <td>{user?.email}</td>
                    <td><button class="btn btn-sm">make admin</button></td>
                    <td><button class="btn btn-sm">remove</button></td>
                  </tr>)
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
