import { Link } from "react-router-dom";
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
		<section className="about">
			<header className="page-header">
				<h1 className="page-header__title">{t.about.title}</h1>
			</header>

			<div className="about__content">
				<div className="about__text">
					<p className="about__lead">{t.about.lead}</p>
					<p>{t.about.text1}</p>
					<p>{t.about.text2}</p>

					<Link to="/contact" className="btn btn--primary btn--large">
						{t.about.cta}
					</Link>
				</div>

				<aside className="about__skills">
					<h2 className="about__subtitle">{t.about.skills}</h2>
					<ul className="tags tags--large">
						{skills.map((skill) => {
							return (
								<li key={skill} className="tag">
									{skill}
								</li>
							);
						})}
					</ul>
				</aside>
			</div>
		</section>
	);
};

export default About;
