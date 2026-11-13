import projects from "../data/projects.json";
import ProjectList from "../components/ProjectList";
import { useState } from "react";
import GithubRepos from "../components/GithubRepos";

const Projects = () => {
	const [selectedTechnology, setSelectedTechnology] = useState("Alle");

	const technologies = ["Alle"];
	projects.forEach((project) => {
		project.technologies.forEach((technology) => {
			if (!technologies.includes(technology)) {
				technologies.push(technology);
			}
		});
	});
	const filteredProjects =
		selectedTechnology === "Alle"
			? projects
			: projects.filter((project) =>
					project.technologies.includes(selectedTechnology),
				);

	return (
		<section>
			<header className="page-header">
				<h1 className="page-header__title">Projekte</h1>
				<p className="page-header__text">
					Eine Auswahl meiner Projekte. Filtere nach Technologie, um zu sehen,
					wo ich was eingesetzt habe.
				</p>
			</header>

			<div className="filter">
				{technologies.map((technology) => {
					return (
						<button
							key={technology}
							onClick={() => setSelectedTechnology(technology)}
							className={`filter__btn ${selectedTechnology === technology ? "filter__btn--active" : ""}`}
						>
							{technology}
						</button>
					);
				})}
			</div>

			<ProjectList projects={filteredProjects} />
			<GithubRepos />
		</section>
	);
};

export default Projects;
