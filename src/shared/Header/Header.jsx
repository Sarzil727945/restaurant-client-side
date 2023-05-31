import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Header = () => {
     const { user, logOut } = useContext(AuthContext)
     // logOut part start
     const handelLogOut = () => {
          logOut()
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               });
     }
     // logOut part end

     return (
          <div>
               <div className="navbar fixed z-10 bg-opacity-30 bg-black lg:text-white max-w-screen-xl ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   <li><a>Item 1</a></li>
                                   <li><a>Item 3</a></li>
                              </ul>
                         </div>
                         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              <></>
                              <li><ActiveLink to='/'>Home</ActiveLink></li>
                              <li><ActiveLink to='ourMenu'>Our Menu</ActiveLink></li>
                              <li><ActiveLink to='order'>Our Order</ActiveLink></li>
                              <li><ActiveLink to='secret'>Secret</ActiveLink></li>
                              <li>
                                   <Link to='/'>
                                        <button className="btn gap-2">
                                             <FaShoppingCart />
                                             <div className="badge badge-secondary">+0</div>
                                        </button>
                                   </Link>
                              </li>
                         </ul>
                    </div>
                    <div className="navbar-end">
                         {
                              user ? <div>
                                    <span className=' me-3'>{user?.displayName}</span>
                                   <button onClick={handelLogOut} className="btn btn-error py-1">Log Out</button>

                              </div> : <ActiveLink to="/login">Login</ActiveLink>
                         }
                    </div>
               </div>
          </div>
     );
};

export default Header;