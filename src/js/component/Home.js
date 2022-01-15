import React from "react";
import { MusicList } from "./MusicList";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Home = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<i className="fab fa-spotify"></i> Spotify
					</Navbar.Brand>
				</Container>
			</Navbar>
			<div className="text-center pt-5 bg-secondary">
				<MusicList />
			</div>
		</>
	);
};

export default Home;
