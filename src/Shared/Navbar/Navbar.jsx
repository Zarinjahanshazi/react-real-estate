import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Navbar = () => {

    const {user,logOut,profilePicture} = useContext(AuthContext);
    // const profilePic = user.photoURL;
    // const profilePic = loading(user.photoURL);
    

  const handleSignOut =() =>{
    logOut()
    .then()
    .catch()
  }

  const photo =() =>{
    profilePicture()
    .then()
    .catch()

  }

    const navLinks =<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/property'>Property</NavLink></li>
    <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
    
    </>
    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">

  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <img alt="Tailwind CSS Navbar component" src={profilePic} /> */}
          {/* <img alt="Tailwind CSS Navbar component" src={userDefaultPic} /> */}
          {/* <img alt="Tailwind CSS Navbar component" src={profilePic} /> */}


          {
                user && <div>
                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                </div>
            }
        </div>
      </div>
   
  </div>

{/* <img src="" alt="" /> */}

            {

          user?
          <button onClick={handleSignOut} className="btn">Log Out</button>
          :

          <Link to='/login'>
          <button className="btn">Log In</button></Link>

          }
</div>
            
        </div>
    );
};

export default Navbar;