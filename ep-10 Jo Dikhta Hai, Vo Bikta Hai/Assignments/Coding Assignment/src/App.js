import React, {lazy,Suspense} from "react";
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

// Lazy Loading
const About = lazy(()=>import("../src/components/About"));

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