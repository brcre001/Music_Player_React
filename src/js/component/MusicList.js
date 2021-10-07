import React, { useEffect, useState } from "react";

const songURL = "https://assets.breatheco.de/apis/sound";

export const MusicList = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	let fetchData = async () => {
		try {
			let response = await fetch(`${songURL}/songs`);
			let data = await response.json();
			console.log("This is the data: ", data);
			setSongs(data);
			return data;
		} catch {
			throw Error(
				"There was an error fetching the songs from the backend!"
			);
		}
	};

	return (
		<ol>
			{songs.map((item, index) => {
				return <li key={index}>{item.name}</li>;
			})}
		</ol>
	);
};
