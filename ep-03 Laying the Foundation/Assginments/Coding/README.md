# Coding Assignment
# Task - 01

<!-- import React from "react";
import ReactDOM from "react-dom/client";

Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)

const heading1 = React.createElement("h1",{},"heading 1");
const heading2 = React.createElement("h2",{},"heading 2");
const heading3 = React.createElement("h3",{},"heading 3");

const header = React.createElement("div",
    {className:"title"},
    [heading1,heading2,heading3]
); -->

# Task - 02

<!-- Create the same element using JSX
const header = (
    <div>
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
    </div>
) -->


# Task -03
<!-- Create a functional component of the same with JSX

const Header = () =>{
    return(
        <div>
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
        </div>
    )
} -->

# Task - 04
<!-- 
Pass attributes into the tag in JSX
const Header = () =>{
    return(
        <div id="title" className="div-color">
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
        </div>
    )
} -->

# Task - 05
<!-- 
Composition of Component(Add a component inside another)

const Logo = () =>(
    <h1>Aditi Deokar</h1>
);

const Header = () =>{
    return(
        <div id="title" className="div-color">
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
        <Logo/>
        </div>
    )
} -->

# Task - 06
<!-- 
{TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

 {TitleComponent} vs {<TitleComponent/>} vs
 {<TitleComponent></TitleComponent>} in JSX

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
 -->
