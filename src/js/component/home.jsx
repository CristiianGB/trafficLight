import React from "react";
import TrafficLightBodyTop from "./trafficLightBodyTop/trafficLightBodyTop.jsx";
import TrafficLightBody from "./trafficLightBody/trafficLightBody.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<TrafficLightBodyTop />
			<TrafficLightBody />
			
		</div>
	);
};

export default Home;
