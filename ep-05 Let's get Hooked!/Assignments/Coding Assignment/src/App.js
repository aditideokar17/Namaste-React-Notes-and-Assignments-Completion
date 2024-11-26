import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer"





// App Layout
const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Body/>
            <Footer />
        </div>
    )
}

//rendering 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppLayout/>
);