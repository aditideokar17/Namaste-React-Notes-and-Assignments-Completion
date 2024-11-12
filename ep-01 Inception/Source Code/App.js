/**
 * 
 * Creating Nested Element Structure of HTML in React
 * <div id= "parent">
 *      <div id="child">
 *          <h1>I ma h1 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I am H1 tag")
    )
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);