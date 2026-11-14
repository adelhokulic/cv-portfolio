import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import axios from "axios";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const GITHUB_API_URL =
	"https://api.github.com/users/adelhokulic/repos?sort=updated&per_page=6";

const GithubRepos = () => {
	const { t } = useLanguage();
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// true/false instead of a text, so the error message follows the selected language
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		const fetchRepos = async () => {
			try {
				const response = await axios.get(GITHUB_API_URL, {
					signal: controller.signal,
				});
				const data = response.data;
				setRepos(data.filter((repo) => repo.fork === false));
			} catch (error) {
				if (axios.isCancel(error)) return;
				setHasError(true);
			}
			setIsLoading(false);
		};

		fetchRepos();

		return () => controller.abort();
	}, []);

	return (
		<section className="section github">
			<div className="section__header">
				<h2 className="section__title">{t.github.title}</h2>
				<a
					href="https://github.com/adelhokulic?tab=repositories"
					className="section__link"
					target="_blank"
					rel="noreferrer"
				>
					{t.github.allRepos}
				</a>
			</div>
			<p className="github__intro">{t.github.intro}</p>

			{isLoading && <p className="github__status">{t.github.loading}</p>}
			{hasError && (
				<p className="github__status github__status--error">
					{t.github.error}
				</p>
			)}
			{!isLoading && !hasError && (
				<div className="repos-grid">
					{repos.map((repo, index) => (
						<Reveal delay={index * 100} key={repo.id}>
							<RepoCard repo={repo} />
						</Reveal>
					))}
				</div>
			)}
		</section>
	);
};

export default GithubRepos;
