import "./Home.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Home() {
	return (
		<div className="home-container">
			<img src="src/Images/logoCentralBlanc.png" alt=""/>
			<div className="chevron-icon">
				<FontAwesomeIcon icon={faChevronDown}/>
			</div>
		</div>
	);
}

export default Home;