import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

// import appStore from "../utils/appStore";
// import cartSlice from "../utils/cartSlice";
const Header = () => {
  const { loginWithRedirect,logout,user,isAuthenticated } = useAuth0();
  const online = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  return (
    <div className="header shadow-md text-orange-300  h-20 flex justify-between p-4 m-4 items-center border-b border-gray-500">
    {/* <Link to="/">  <img className="logo  object-cover w-16 cursor-pointer" src={logo} /></Link> */}
      <div className="nav-items flex  p-3 ">
        <div className="m-3 hover:text-orange-500">
          <Link to="/">Home </Link>
        </div>
        <div className="m-3 hover:text-orange-500">
          <Link to="/grocery">Grocery </Link>
        </div>
        <div className="m-3 hover:text-orange-500">
          <Link to="/about">About Us</Link>
        </div>
        <div className="m-3 hover:text-orange-500">
          <Link to="/contactus">Contact us</Link>
        </div>
        <div className="m-3 hover:text-orange-500">
          <Link to="/cart"><i class="fa-solid fa-cart-shopping fa-lg"></i>({cartItems.length})</Link></div>
          {/* <button
          className="LoginBtn m-3 hover:text-orange-500 "
          onClick={() => {
            loginWithRedirect()
          }}
        >
          Login
          {online === true ? "🟢" : "🔴"}
        </button>    */}
        
        {isAuthenticated && <div className="flex items-center">"Welcome {user.nickname}"
          <img className="h-7 rounded-full" src={user.picture}/>
</div>} 
        {console.log(user)}
      
      {isAuthenticated?(<button className="  bg-orange-300 font-bold text-white p-3 rounded-lg m-1" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>):(<button className="bg-orange-300 font-bold text-white p-3 rounded-lg m-1" onClick={() => loginWithRedirect()}>Log In</button>)}  
        
        
     
      </div>
  </div>
  );
};
export default Header;
