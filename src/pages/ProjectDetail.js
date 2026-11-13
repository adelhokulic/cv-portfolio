import { Link, useParams } from "react-router-dom";
import projects from "../data/projects.json";

const ProjectDetail = () => {
	const { slug } = useParams();
	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return (
			<section className="not-found">
				<p className="not-found__code">404</p>
				<h1 className="not-found__title">Projekt nicht gefunden.</h1>
				<p className="not-found__text">
					Dieses Projekt existiert nicht oder wurde umbenannt.
				</p>
				<Link to="/projects" className="btn btn--primary">
					Zurück zu den Projekten
				</Link>
			</section>
		);
	}

	return (
		<article className="project-detail">
			<Link to="/projects" className="back-link">
				← Alle Projekte
			</Link>

			<header className="project-detail__header">
				<h1 className="project-detail__title">{project.title}</h1>
				<p className="project-detail__description">{project.description}</p>

				<ul className="tags">
					{project.technologies.map((technology) => {
						return (
							<li key={technology} className="tag">
								{technology}
							</li>
						);
					})}
				</ul>

				<div className="project-detail__links">
					<a
						href={project.github}
						className="btn btn--ghost"
						target="_blank"
						rel="noreferrer"
					>
						Code auf GitHub
					</a>

					{project.demo !== "" && (
						<a
							href={project.demo}
							className="btn btn--primary"
							target="_blank"
							rel="noreferrer"
						>
							Live-Demo
						</a>
					)}
				</div>
			</header>

			<img
				className="project-detail__image"
				src={project.image}
				alt={project.title}
			/>

			<section className="project-detail__section">
				<h2 className="project-detail__subtitle">Funktionen</h2>

				<ul className="highlights">
					{project.highlights.map((highlight) => {
						return <li key={highlight} className="highlights__item">{highlight}</li>;
					})}
				</ul>
			</section>
		</article>
	);
};

export default ProjectDetail;
