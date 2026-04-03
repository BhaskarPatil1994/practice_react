import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-js Object => HTMLElement(render)

//jsx (transpiled before it reaches the JS) - Parcel - Babel

//JSX => Babels transpiles it to  React.createElement => ReactElement-JS Object => HTMLElement 

const jsxheading = <h1 id="heading" className="headA"> hellow jsx heading </h1>;

console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);


 