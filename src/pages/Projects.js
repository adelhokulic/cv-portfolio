import projects from "../data/projects.json";
import ProjectList from "../components/ProjectList";
import { useState } from "react";
import GithubRepos from "../components/GithubRepos";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
	const { t } = useLanguage();
	// "all" is only an internal value, the button shows t.projects.all ("Alle" / "All")
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
			<header className="page-header">
				<h1 className="page-header__title">{t.projects.title}</h1>
				<p className="page-header__text">{t.projects.intro}</p>
			</header>

			<div className="filter">
				{technologies.map((technology) => {
					return (
						<button
							key={technology}
							onClick={() => setSelectedTechnology(technology)}
							className={`filter__btn ${selectedTechnology === technology ? "filter__btn--active" : ""}`}
						>
							{technology === "all" ? t.projects.all : technology}
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
