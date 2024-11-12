/**
 * 
 * Creating Nested Element Structure of HTML in React
 * <div id= "parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * Creating Siblings(more than one children) inside HTML structure using React
 *  <div id= "parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * Creating HTML complex Structure using React
 *  <div id= "parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */

const parent = React.createElement("div",{id:"parent"},
        [
            React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")]),
            
            React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")]),
        ],
        
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);