import "./Prix.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Prix() {
	return (
		<div className="prix">
			<div className="title">Mes Prix</div>
			<div className="content">
			</div>
			<div className="chevron-icon">
				<FontAwesomeIcon icon={faChevronDown}/>
			</div>
		</div>
	);
}

export default Prix;