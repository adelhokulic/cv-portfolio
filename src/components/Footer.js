import Container from "react-bootstrap/Container";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
	const { t } = useLanguage();

	return (
		<footer className="app-footer py-4">
			<Container className="d-flex flex-column flex-md-row justify-content-between gap-2">
				<span>
					© {new Date().getFullYear()} Adel Hokulic · {t.footer.builtWith}
				</span>
				<a
					href="https://github.com/adelhokulic"
					target="_blank"
					rel="noreferrer"
				>
					github.com/adelhokulic
				</a>
			</Container>
		</footer>
	);
};

export default Footer;
