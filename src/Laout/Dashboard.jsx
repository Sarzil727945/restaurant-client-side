import React from 'react';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Dashboard = () => {
     return (
          <div className="drawer drawer-mobile">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

               </div>
               <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                         <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                         <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                         <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                         <li><NavLink to='/dashboard/myCard'><FaShoppingCart></FaShoppingCart> My Card</NavLink></li>

                         <div className="divider">OR</div>

                         <li><Link to='/'><FaHome></FaHome>User Home</Link></li>
                         <li><Link to='/ourMenu'>Our Menu</Link></li>
                         <li><Link to='/order'>Our Order</Link></li>
                    </ul>

               </div>
          </div>
     );
};

export default Dashboard;