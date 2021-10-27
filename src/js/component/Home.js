import React from "react";
import { MusicList } from "./MusicList";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1 className="text-primary">Music Player</h1>
			<MusicList />
		</div>
	);
};

export default Home;
