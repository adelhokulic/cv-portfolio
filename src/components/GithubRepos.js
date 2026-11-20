import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import RepoCard from "./RepoCard";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const GITHUB_API_URL =
	"https://api.github.com/users/adelhokulic/repos?sort=updated&per_page=6";

const GithubRepos = () => {
	const { t } = useLanguage();
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
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
		<section className="mt-5 pt-5 border-top">
			<div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
				<h2 className="section-title mb-0">{t.github.title}</h2>
				<a
					href="https://github.com/adelhokulic?tab=repositories"
					className="bento-link"
					target="_blank"
					rel="noreferrer"
				>
					{t.github.allRepos}
				</a>
			</div>
			<p className="text-body-secondary mb-4">{t.github.intro}</p>

			{isLoading && (
				<div className="d-flex align-items-center justify-content-center gap-2 py-5 text-body-secondary">
					<Spinner animation="border" size="sm" />
					{t.github.loading}
				</div>
			)}
			{hasError && <Alert variant="danger">{t.github.error}</Alert>}
			{!isLoading && !hasError && (
				<Row xs={1} md={2} lg={3} className="g-3">
					{repos.map((repo, index) => (
						<Col key={repo.id}>
							<Reveal delay={index * 100}>
								<RepoCard repo={repo} />
							</Reveal>
						</Col>
					))}
				</Row>
			)}
		</section>
	);
};

export default GithubRepos;
