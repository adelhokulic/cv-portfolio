import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/LanguageContext";

const skills = [
	"HTML",
	"CSS",
	"Tailwind",
	"Bootstrap",
	"JavaScript",
	"TypeScript",
	"React",
	"React Router",
	"Context API",
	"useReducer",
	"Next.js",
	"Firebase Auth",
	"REST APIs",
	"Axios",
	"Git & GitHub",
];

const About = () => {
	const { t } = useLanguage();

	return (
		<section>
			<h1 className="page-title mb-4">{t.about.title}</h1>

			<Row className="g-4 g-lg-5">
				<Col lg={7}>
					<p className="fs-5 fw-medium text-body-emphasis mb-4">
						{t.about.lead}
					</p>
					<p className="text-body-secondary mb-3">{t.about.text1}</p>
					<p className="text-body-secondary mb-4">{t.about.text2}</p>
					<Button as={Link} to="/contact" size="lg">
						{t.about.cta}
					</Button>
				</Col>

				<Col lg={5}>
					<div className="bento-card h-auto">
						<p className="bento-label">{t.about.skills}</p>
						<div className="d-flex flex-wrap gap-2">
							{skills.map((skill) => {
								return (
									<span key={skill} className="tech-pill">
										{skill}
									</span>
								);
							})}
						</div>
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default About;
