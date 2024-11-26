import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";






//AppLayout Component
const AppLayout = () =>{
  return(
      <div className="app">
      <Header/>
      <Body/>
      </div>
  );
};


// rendering
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AppLayout/>
);