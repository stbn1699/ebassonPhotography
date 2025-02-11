import './Projets.css';
import {useEffect, useState} from "react";

interface Projet {
	image: string;
	alt: string;
	link: string;
}

function Projets() {
	const [projets, setProjets] = useState<Projet[]>([]);

	useEffect(() => {
		fetch('/Projets/projets.json')
			.then(response => response.json())
			.then(data => setProjets(data))
			.catch(error => console.error('Error fetching projects:', error));
	}, []);

	const handleProjectClick = (link: string) => () => {
		window.open(link, '_blank');
	}

	return (
		<div className="projets">
			<div className="title">Projets</div>
			<div className="projectsBox">
				{projets.map((projet, index) => (
					<div key={index} className="project" onClick={handleProjectClick(projet.link)}>
						<img src={projet.image} alt={projet.alt} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Projets;