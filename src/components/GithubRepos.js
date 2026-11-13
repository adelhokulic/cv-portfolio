import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import axios from "axios";

const GITHUB_API_URL =
	"https://api.github.com/users/adelhokulic/repos?sort=updated&per_page=6";

const GithubRepos = () => {
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

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
				setErrorMessage("GitHub-Repositories konnten nicht geladen werden.");
			}
			setIsLoading(false);
		};

		fetchRepos();

		return () => controller.abort();
	}, []);

	return (
		<section className="section github">
			<div className="section__header">
				<h2 className="section__title">Neu auf GitHub</h2>
				<a
					href="https://github.com/adelhokulic?tab=repositories"
					className="section__link"
					target="_blank"
					rel="noreferrer"
				>
					Alle Repositories →
				</a>
			</div>
			<p className="github__intro">
				Woran ich gerade arbeite, automatisch geladen über die GitHub API.
			</p>

			{isLoading && (
				<p className="github__status">Repositories werden geladen…</p>
			)}
			{errorMessage && (
				<p className="github__status github__status--error">
					GitHub-Repositories konnten nicht geladen werden.
				</p>
			)}
			{!isLoading && !errorMessage && (
				<div className="repos-grid">
					{repos.map((repo) => {
						return <RepoCard key={repo.id} repo={repo} />;
					})}
				</div>
			)}
		</section>
	);
};

export default GithubRepos;
