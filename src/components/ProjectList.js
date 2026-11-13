import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
	return projects.length === 0 ? (
		<p className="empty-state">
			Keine Projekte mit dieser Technologie gefunden.
		</p>
	) : (
		<div className="projects-grid">
			{projects.map((project) => (
				<ProjectCard key={project.slug} project={project} />
			))}
		</div>
	);
}

export default ProjectList;
