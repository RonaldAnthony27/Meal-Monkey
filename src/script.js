import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/AboutUs";
import ContactUs from "./components/ContactUs"
import RestMenu from "./components/RestMenu";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { Auth0Provider } from "@auth0/auth0-react";

//Plan for Creating the Food app
/* Header
  -logo
  -nav-items
  Body
  -search
  -Restaurant Cards
   -- Restaurant cuisine info
   -- Rating
   -- ETA
  Footer
  -license
  Contact info
*/



 

// const Rescard = ({cloudinaryImageId,name,cuisines,avgRating,slaString }) => {           //const Rescard = ({ resName, resCuisine }) destructuring

//   return (
//   <div className="res-card">
//       <img className="res-card-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId  }/>
//     <div className="res-dis">
//     <h2>{name}</h2>
//       <h3>{cuisines} </h3>
//         <h3>{avgRating} </h3>
//         <h3> ETA:{ slaString}</h3>
//     </div>
    
//   </div>
// )
  
// }
const AppLayout = () =>
{return (
  <div className="app-layout">
    <Auth0Provider
    domain="dev-i0w03ta1ilxqu4o4.us.auth0.com"
    clientId="l9LzDVH8QZagjFulGmijM9hQm9Qplw61"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={appStore}>
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer/>
      
        </React.Fragment></Provider>
    </Auth0Provider>
    
  </div>
  
)}

const Grocery=lazy(()=>import("./components/Grocery"))
const appRouter = createBrowserRouter
  ([
  {
    path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element:<Body/>
      },
        {
          path: "/grocery",
          element: <Suspense fallback={<Shimmer/>}>
            <Grocery /></Suspense>
      },
        
          {
            path: "/about",
            element:<About/>
          },
          {
            path: "/contactus",
            element:<ContactUs/>
        },
          {
            path: "/cart",
            element:<Cart/>
        },
          {
            path: "/restaurant/:resid",
            element:<RestMenu/>
          }
        
      ],
     errorElement:<Error/>
  },
  
  ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
