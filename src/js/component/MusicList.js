import React, { useEffect, useState } from "react";

const songURL = "https://assets.breatheco.de/apis/sound";

export const MusicList = () => {
	const [songsList, setSongsList] = useState([]);
	const [currentSong, setCurrentSong] = useState("");
	const [songName, setSongName] = useState("No song playing...");

	useEffect(() => {
		fetchData();
	}, []);

	let fetchData = async () => {
		try {
			let response = await fetch(`${songURL}/songs`);
			let data = await response.json();
			setSongsList(data);
			return data;
		} catch {
			throw Error(
				"There was an error fetching the songs from the backend!"
			);
		}
	};

	return (
		<>
			<h2 className="text-dark">Current Song: {songName}</h2>
			<div className="p-2">
				<audio src={`${songURL}/${currentSong}`} controls autoPlay />
			</div>
			<ol className="list-group w-50 mx-auto p-2">
				{songsList.map((item, index) => {
					return (
						<li
							className="list-group-item list-group-item-action list-group-item-warning"
							onClick={() => {
								setCurrentSong(item.url);
								setSongName(item.name);
							}}
							key={index}>
							<div className="justify-content-start">
								{index + 1}. {item.name}
							</div>
						</li>
					);
				})}
			</ol>
		</>
	);
};
