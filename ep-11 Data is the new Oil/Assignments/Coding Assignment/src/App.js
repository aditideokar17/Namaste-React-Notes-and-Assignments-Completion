import React, {lazy,Suspense, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import Contact from "../src/components/Contact";
import Menu from "../src/components/Menu";
import Services from "../src/components/Services";
import RestaurantMenu from "../src/components/RestaurantMenu";
import Error from "../src/components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

// Lazy Loading
const About = lazy(()=>import("../src/components/About"));

// App Layout
const AppLayout = () =>{

    // Local State Variable
  const [userName,setUserName] = useState(); 

  // Authentication (Context Provider)
  const data = {
    name:"Aditi Deokar"
  };
  // Make an api call and send username and password
  useEffect(()=>{
    setUserName(data.name);
  },[])


 return (
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>   
      <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
      </div>
    </UserContext.Provider>

  );
}

// Creating App Router
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children : [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/menu",
                element:<Menu/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
]);

//rendering 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />
);