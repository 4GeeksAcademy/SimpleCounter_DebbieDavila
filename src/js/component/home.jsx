import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
let string = "00000"+ props.counter
console.log(string)


	return (
		<div className="container" >
			<div className="secondsCounter box"><i className="far fa-clock"></i></div>
			<div className="four box"> {string.charAt(string.length-4)}</div>
			<div className="three box"> {string.charAt(string.length-3)}</div>
			<div className="two box">{string.charAt(string.length-2)}</div>
			<div className="one box">{string.charAt(string.length-1)}</div>
		</div>
	);
};

export default Home;






