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
					Aus Bosnien und Herzegowina. Ich baue schnelle, responsive
					React-Anwendungen mit sauberem State-Management und echten APIs.
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
		</>
	);
}

export default Home;
