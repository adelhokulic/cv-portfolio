import projects from "../data/projects.json";
import ProjectList from "../components/ProjectList";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import GithubRepos from "../components/GithubRepos";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
	const { t } = useLanguage();
	const [selectedTechnology, setSelectedTechnology] = useState("all");

	const technologies = ["all"];
	projects.forEach((project) => {
		project.technologies.forEach((technology) => {
			if (!technologies.includes(technology)) {
				technologies.push(technology);
			}
		});
	});
	const filteredProjects =
		selectedTechnology === "all"
			? projects
			: projects.filter((project) =>
					project.technologies.includes(selectedTechnology),
				);

	return (
		<section>
			<header className="mb-4">
				<h1 className="page-title mb-2">{t.projects.title}</h1>
				<p className="lead-muted mb-0">{t.projects.intro}</p>
			</header>

			<div className="d-flex flex-wrap gap-2 mb-4 pb-2">
				{technologies.map((technology) => {
					return (
						<Button
							key={technology}
							size="sm"
							className="rounded-pill px-3"
							variant={
								selectedTechnology === technology
									? "primary"
									: "outline-secondary"
							}
							onClick={() => setSelectedTechnology(technology)}
						>
							{technology === "all" ? t.projects.all : technology}
						</Button>
					);
				})}
			</div>

			<ProjectList projects={filteredProjects} />
			<GithubRepos />
		</section>
	);
};

export default Projects;
