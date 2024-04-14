import logo from '../../assets/download.jpg'
import { NavLink } from 'react-router-dom';
import 'animate.css';


const Nav = () => {

const links=<>
<li className='text-xl' ><NavLink  to='/'>Home</NavLink></li>
<li className='text-xl'><NavLink to='/update'>User Profile</NavLink></li>

</>

    return (
        <div className="navbar animate__animated animate__bounce container mx-auto text-fuchsia-400 text-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <div className='flex gap-2 items-center '>
    <img className='h-9 w-9' src={logo} alt="" />
    <a className="font-bold text-fuchsia-400 text-2xl  "> Dream Dwellings</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-fuchsia-400">Button</a>
  </div>
</div>
    );
};

export default Nav;