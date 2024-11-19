import React from "react";
import ReactDOM from "react-dom/client";

// {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX

const titleElem = (
    <h1>title React Element</h1>
);

const TitleComponent = () =>(
    <h1>Title React Component</h1>
)

const Header = () =>{
    return(
        <div>
        <h1>{titleElem}</h1>
        <h2><TitleComponent/></h2>
        <h3><TitleComponent></TitleComponent></h3>
        </div>
    )
}



//rendering
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Header/>);