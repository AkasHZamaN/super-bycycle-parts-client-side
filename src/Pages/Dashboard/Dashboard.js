import React from "react";
import { Link, Outlet } from "react-router-dom";
// import useAdmin from "../../hooks/useAdmin";
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyProfile from "./MyProfile";


const Dashboard = () => {
  const [user] = useAuthState(auth)
//   const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-accent mt-6 text-center">
          Welcome to Your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 my-8 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
            <Link to={"/dashboard"}>My Order</Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>Add Review</Link>
          </li>
          <li>
            <Link to={"/dashboard/users"}>All User</Link>
          </li>
          <li>
            <label htmlFor="mymodal" className="modal-button">My Profile</label>
          </li>         
        </ul>
      </div>
      <MyProfile key={user.uid} user={user}></MyProfile>
    </div>
  );
};

export default Dashboard;
