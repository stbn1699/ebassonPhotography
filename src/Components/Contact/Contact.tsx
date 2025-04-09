import "./Contact.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Contact() {
	return (
		<div className="contact">
			<div className="title">Me Contacter</div>
			<div className="content">
			</div>
			<div className="chevron-icon">
				<FontAwesomeIcon icon={faChevronDown}/>
			</div>
		</div>
	);
}

export default Contact;
