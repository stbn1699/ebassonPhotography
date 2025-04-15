import "./Contact.scss";

function Contact() {
	return (
		<div className="contact">
			<div className="title">Me Contacter</div>
			<div className="content">
				<div className="titres">
					<div className="mail">
						Soit par mail...
					</div>
					<div className="autres">
						...Ou sur mes réseaux sociaux !
					</div>
				</div>
				<div className="corps">
					<div className="mail">
						<a href="">Instagram</a>
					</div>
					<div className="autres">
						<a href="">Instagram</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
