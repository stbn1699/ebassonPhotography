import './Header.scss';

function Header() {
	return (
		<div className="header">
			<a href="#todo">Home</a>
			<a href="#todo">Projets</a>
			<img src="src/Images/logoHeader.png" alt=""/>
			<a href="#todo">Prix</a>
			<a href="#todo">Me contacter</a>
		</div>
	);
}

export default Header;