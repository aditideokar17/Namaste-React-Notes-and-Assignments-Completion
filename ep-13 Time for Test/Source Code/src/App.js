import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from './components/Contact';
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// lazy loading
const Grocery  = lazy(() => import("./components/Grocery"));

//AppLayout Component
const AppLayout = () => {

  
  // Local State Variable
  const [userName,setUserName] = useState(); 

  // Authentication (Context Provider)
  const data = {
    name:"Akshay Saini"
  };
  // Make an api call and send username and password
  useEffect(()=>{
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>   
      <div className="app">
      <Header />
      <Outlet/>
      </div>
    </UserContext.Provider>
    </Provider>

  );
};

// App Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />
  }
])

// rendering
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <RouterProvider router={appRouter} />
);