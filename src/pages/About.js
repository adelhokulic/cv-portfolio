import { Link } from "react-router-dom";

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

function About() {
	return (
		<section className="about">
			<header className="page-header">
				<h1 className="page-header__title">Über mich</h1>
			</header>

			<div className="about__content">
				<div className="about__text">
					<p className="about__lead">
						Ich komme aus Bosnien und Herzegowina, einem Land, in dem sich Ost
						und West seit Jahrhunderten begegnen. Vielleicht verbinde ich
						deshalb so gern Dinge: Design und Logik, Idee und Code.
					</p>
					<p>
						Meinen Weg ins Frontend habe ich über das Mentoring-Programm
						ITMentorstva gefunden, Schritt für Schritt von HTML und CSS bis zu
						React, Next.js und Firebase. Am Frontend begeistert mich, dass man
						das Ergebnis sofort sieht: Jede Zeile Code wird zu etwas, das ein
						Mensch anklicken kann.
					</p>
					<p>
						Jetzt suche ich meine erste Stelle als Junior Frontend Developer, in
						einem Team, von dem ich lernen und dem ich etwas zurückgeben kann.
					</p>

					<Link to="/contact" className="btn btn--primary btn--large">
						Lass uns reden
					</Link>
				</div>

				<aside className="about__skills">
					<h2 className="about__subtitle">Skills</h2>
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
}

export default About;
