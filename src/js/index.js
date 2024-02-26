//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home";

import '../styles/index.css'; 
import { element } from "prop-types";



let counter = 0;
function incrementCounter() {
    counter++;
    console.log(counter)
    ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
}
setInterval(incrementCounter, 1000)










// include your styles into the webpack bundle


/*function SimpleCounter {

    
}*/


//render your react application



