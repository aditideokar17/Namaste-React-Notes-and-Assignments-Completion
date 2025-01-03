import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Menu from "../src/components/Menu";
import Services from "../src/components/Services";
import RestaurantMenu from "../src/components/RestaurantMenu";
import Error from "../src/components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";



// App Layout
const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
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
                element:<About/>
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