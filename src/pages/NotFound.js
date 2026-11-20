import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
	const { t } = useLanguage();

	return (
		<section className="text-center py-5">
			<p className="not-found-code mb-3">404</p>
			<h1 className="h3 fw-bold mb-2">{t.notFound.title}</h1>
			<p className="text-body-secondary mb-4">{t.notFound.text}</p>
			<Button as={Link} to="/">
				{t.notFound.backHome}
			</Button>
		</section>
	);
};

export default NotFound;
