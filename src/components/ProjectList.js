import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const ProjectList = ({ projects }) => {
	return projects.length === 0 ? (
		<p className="empty-state">
			Keine Projekte mit dieser Technologie gefunden.
		</p>
	) : (
		<div className="projects-grid">
			{projects.map((project, index) => (
				<Reveal delay={index * 100} key={project.slug}>
					<ProjectCard project={project} />
				</Reveal>
			))}
		</div>
	);
};

export default ProjectList;
