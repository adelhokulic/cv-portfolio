import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectList from "../components/ProjectList";

function Home() {
	const featuredProjects = projects.filter(
		(project) => project.featured === true,
	);

	return (
		<>
			<section className="hero">
				<p className="hero__greeting">Hallo, ich bin</p>
				<h1 className="hero__name">
					Adel Hokulic<span>.</span>
				</h1>
				<p className="hero__role">Junior Frontend Developer</p>
				<p className="hero__text">
					Ursprünglich aus Bosnien und Herzegowina, heute in Berlin zu Hause.
					Ich baue schnelle, responsive React-Anwendungen mit sauberem
					State-Management und echten APIs.
				</p>

				<div className="hero__actions">
					<Link to="/projects" className="btn btn--primary btn--large">
						Projekte ansehen
					</Link>
					<Link to="/contact" className="btn btn--ghost btn--large">
						Kontakt aufnehmen
					</Link>
				</div>
			</section>

			<section className="section">
				<div className="section__header">
					<h2 className="section__title">Ausgewählte Projekte</h2>
					<Link to="/projects" className="section__link">
						Alle Projekte →
					</Link>
				</div>

				<ProjectList projects={featuredProjects} />
			</section>

			<section className="section about-teaser">
				<div className="about-teaser__text">
					<h2 className="section__title">Über mich</h2>
					<p>
						Aufgewachsen in Bosnien und Herzegowina, angekommen in Berlin. Ich verbinde gern
						Design und Logik und lerne jeden Tag dazu, von HTML und CSS bis zu React, Next.js
						und Firebase.
					</p>
					<Link to="/about" className="section__link">
						Mehr über mich →
					</Link>
				</div>
			</section>

			<section className="cta">
				<h2 className="cta__title">Lass uns sprechen!</h2>
				<p className="cta__text">
					Du suchst einen motivierten Junior Frontend Developer in Berlin oder remote? Ich freue
					mich auf deine Nachricht.
				</p>
				<Link to="/contact" className="btn btn--large cta__btn">
					Kontakt aufnehmen
				</Link>
			</section>
		</>
	);
}

export default Home;
