import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({ project }) => {
	const { language, t } = useLanguage();

	return (
		<Card className="project-card">
			<div className="project-card__image-wrap">
				<Card.Img
					variant="top"
					className="project-card__image rounded-0"
					src={project.image}
					alt={project.title}
					loading="lazy"
				/>
			</div>

			<Card.Body className="d-flex flex-column gap-3 p-4">
				<Card.Title as="h3" className="h5 mb-0">
					{project.title}
				</Card.Title>
				<Card.Text className="mb-0">{project.description[language]}</Card.Text>

				<div className="d-flex flex-wrap gap-2">
					{project.technologies.map((technology) => {
						return (
							<span key={technology} className="tech-pill tech-pill--sm">
								{technology}
							</span>
						);
					})}
				</div>

				<div className="d-flex flex-wrap gap-2 mt-auto pt-2">
					<Button as={Link} to={`/projects/${project.slug}`} size="sm">
						{t.projects.details}
					</Button>
					<Button
						href={project.github}
						target="_blank"
						rel="noreferrer"
						size="sm"
						variant="outline-secondary"
					>
						GitHub
					</Button>
					{project.demo !== "" && (
						<Button
							href={project.demo}
							target="_blank"
							rel="noreferrer"
							size="sm"
							variant="outline-secondary"
						>
							{t.projects.demo}
						</Button>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
