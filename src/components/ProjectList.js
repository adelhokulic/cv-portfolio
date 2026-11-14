import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const ProjectList = ({ projects }) => {
	const { t } = useLanguage();

	return projects.length === 0 ? (
		<p className="empty-state">{t.projects.empty}</p>
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
