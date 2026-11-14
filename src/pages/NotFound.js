import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
	const { t } = useLanguage();

	return (
		<section className="not-found">
			<p className="not-found__code">404</p>
			<h1 className="not-found__title">{t.notFound.title}</h1>
			<p className="not-found__text">{t.notFound.text}</p>
			<Link to="/" className="btn btn--primary">
				{t.notFound.backHome}
			</Link>
		</section>
	);
};

export default NotFound;
