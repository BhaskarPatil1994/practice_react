import React from "react";
import ReactDOM from "react-dom/client";

// React element

const Jsxheading = () => (
  <h1 id="heading" className="headA">
    hellow jsx heading
  </h1>
);

// React Functional components


const HeadingComponent2 = () => (
  <div id="container">
    <Jsxheading/> 
    <h2>{200 * 2} error  </h2>
    <h2>{console.log("testetijij ")} </h2>
    <h1 className="heading"> heres REact functional components </h1>
  </div>
);

console.log(HeadingComponent2);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(root);
root.render(<HeadingComponent2 />);
