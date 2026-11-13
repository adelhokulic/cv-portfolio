import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
	return (
		<article className="project-card">
			<img
				className="project-card__image"
				src={project.image}
				alt={project.title}
				loading="lazy"
			/>

			<div className="project-card__body">
				<h3 className="project-card__title">{project.title}</h3>
				<p className="project-card__description">{project.description}</p>

				<ul className="tags">
					{project.technologies.map((technologie) => {
						return (
							<li key={technologie} className="tag">
								{technologie}
							</li>
						);
					})}
				</ul>

				<div className="project-card__links">
					<Link to={`/projects/${project.slug}`} className="btn btn--primary">
						Details
					</Link>

					<a
						href={project.github}
						className="btn btn--ghost"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>

					{project.demo !== "" && (
						<a
							href={project.demo}
							className="btn btn--ghost"
							target="_blank"
							rel="noreferrer"
						>
							Live-Demo
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
