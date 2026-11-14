import { useLanguage } from "../context/LanguageContext";

const RepoCard = ({ repo }) => {
	const { t } = useLanguage();

	return (
		<article className="repo-card">
			<h3 className="repo-card__name">{repo.name}</h3>

			<p className="repo-card__description">
				{repo.description ? repo.description : t.github.noDescription}
			</p>

			<div className="repo-card__meta">
				{repo.language && (
					<span className="repo-card__language">
						<span className="repo-card__dot" aria-hidden="true"></span>
						{repo.language}
					</span>
				)}

				<span>
					{t.github.updated}{" "}
					{new Date(repo.updated_at).toLocaleDateString(t.github.dateLocale)}
				</span>
			</div>

			<div className="repo-card__links">
				<a
					href={repo.html_url}
					className="btn btn--ghost"
					target="_blank"
					rel="noreferrer"
				>
					Code
				</a>
				{repo.homepage && (
					<a
						href={repo.homepage}
						className="btn btn--ghost"
						target="_blank"
						rel="noreferrer"
					>
						Demo
					</a>
				)}
			</div>
		</article>
	);
};

export default RepoCard;
