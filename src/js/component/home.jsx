import React from "react";

//create your first component
const Home = (props) => {
	let string = "00000" + props.counter;
	console.log(string);

	return (
		<div>
			<div className="container" >
				<div className="secondsCounter box"><i className="far fa-clock"></i></div>
				<div className="four box"> {string.charAt(string.length - 4)}</div>
				<div className="three box"> {string.charAt(string.length - 3)}</div>
				<div className="two box">{string.charAt(string.length - 2)}</div>
				<div className="one box">{string.charAt(string.length - 1)}</div>
			</div>
			<div style={{ textAlign: "center" }}>
				Made with ❤️ by <a href="https://debbiedavila.com/">Deborina Dávila</a>
			</div>
		</div>
	);
};

export default Home;




















