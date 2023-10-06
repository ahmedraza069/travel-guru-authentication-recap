import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider/AuthProvider";


const Navbar = () => {

    const navLinks = <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/news'}>News</NavLink></li>
      <li><NavLink to={'/destination'}>Destination</NavLink></li>
      <li><NavLink to={'/contact'}>Contact</NavLink></li>
       
    </>





    const {user, logOut} = useContext(AuthContext)

    
const handleSignOut = () => {
  logOut()
  .then()
  .catch()
}
    return (
        <div className="navbar bg-base-100 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
         <img className="w-24" src="https://i.ibb.co/n0rwXHn/logo.png" alt=""/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <button onClick={handleSignOut} className="btn" type="button">Logout</button>:<Link to={'/login'}><button className="btn" type="button">Login</button></Link>
          }
        </div>
      </div>
    );
};

export default Navbar;