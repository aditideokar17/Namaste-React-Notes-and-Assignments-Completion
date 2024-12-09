import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from './components/Contact';
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

//AppLayout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
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
        path: "/contact",
        element: <Contact />
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