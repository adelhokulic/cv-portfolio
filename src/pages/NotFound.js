import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section className="not-found">
			<p className="not-found__code">404</p>
			<h1 className="not-found__title">Seite nicht gefunden.</h1>
			<p className="not-found__text">
				Die Seite, die du suchst, existiert nicht oder wurde verschoben.
			</p>
			<Link to="/" className="btn btn--primary">
				Zur Startseite
			</Link>
		</section>
	);
};

export default NotFound;
