import {useEffect, useState} from "react";
import "./App.scss";
import Header from "./Components/Header/Header.tsx";
import Home from "./Components/Home/Home.tsx";
import Projets from "./Components/Projets/Projets.tsx";
import Prix from "./Components/Prix/Prix.tsx";

function App() {
	const [images, setImages] = useState<string[]>([]);
	const [backgroundImage, setBackgroundImage] = useState<string>("");

	useEffect(() => {
		fetch("/caroussel/array.json")
			.then((response) => response.json())
			.then((data) => {
				setImages(data);
				setBackgroundImage(data[0]);
			});
	}, []);

	useEffect(() => {
		if (images.length > 0) {
			const interval = setInterval(() => {
				const randomIndex = Math.floor(Math.random() * images.length);
				setBackgroundImage(images[randomIndex]);
			}, 30000); // 30 secondes

			return () => clearInterval(interval);
		}
	}, [images]);

	return (
		<>
			<Header/>
			<div className="corps">
				<Home/>
				<div className="gradientSeparator"></div>
				<Projets/>
				<Prix/>
			</div>
			<div
				className="caroussel"
				style={{backgroundImage: `url(${backgroundImage})`}}
			>
			</div>
		</>
	);
}

export default App;