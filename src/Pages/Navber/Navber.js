import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import navlogo from '../../Images/footer-logo.png';

const Navber = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
  };

  const menuItems = (
      <>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/warehouse'}>Warehouse</Link>
        </li>
          <li>
            <Link to={'/signup'}>Sign Up</Link>
        </li> 
        {
          user ? <button onClick={logout} className="btn btn-ghost text-secondary">Logout</button> :
          <li>
            <Link to={'/login'}>Login</Link>
        </li>
        }
        
      </>
  )

  return (
    <div>
      <div className="navbar bg-accent px-6">
        <div id="logo" className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              
              {menuItems}
              
            </ul>
          </div>
          <img className="" src={navlogo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-slate-100">
            
          {menuItems}

          </ul>
        </div>
        <div className="navbar-end">
          <p className="btn">Get started</p>
        </div>
      </div>
    </div>
  );
};

export default Navber;
