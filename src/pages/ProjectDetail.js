import { Link, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { useLanguage } from "../context/LanguageContext";

const ProjectDetail = () => {
	const { slug } = useParams();
	const { language, t } = useLanguage();
	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return (
			<section className="not-found">
				<p className="not-found__code">404</p>
				<h1 className="not-found__title">{t.projectDetail.notFoundTitle}</h1>
				<p className="not-found__text">{t.projectDetail.notFoundText}</p>
				<Link to="/projects" className="btn btn--primary">
					{t.projectDetail.backToProjects}
				</Link>
			</section>
		);
	}

	return (
		<article className="project-detail">
			<Link to="/projects" className="back-link">
				{t.projectDetail.back}
			</Link>

			<header className="project-detail__header">
				<h1 className="project-detail__title">{project.title}</h1>
				<p className="project-detail__description">
					{project.description[language]}
				</p>

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
						{t.projectDetail.code}
					</a>

					{project.demo !== "" && (
						<a
							href={project.demo}
							className="btn btn--primary"
							target="_blank"
							rel="noreferrer"
						>
							{t.projectDetail.demo}
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
				<h2 className="project-detail__subtitle">{t.projectDetail.features}</h2>

				<ul className="highlights">
					{project.highlights[language].map((highlight) => {
						return (
							<li key={highlight} className="highlights__item">
								{highlight}
							</li>
						);
					})}
				</ul>
			</section>
		</article>
	);
};

export default ProjectDetail;
