const RepoCard = ({ repo }) => {
	return (
		<article className="repo-card">
			<h3 className="repo-card__name">{repo.name}</h3>

			<p className="repo-card__description">
				{repo.description ? repo.description : "Keine Beschreibung vorhanden."}
			</p>

			<div className="repo-card__meta">
				{repo.language && (
					<span className="repo-card__language">
						<span className="repo-card__dot" aria-hidden="true"></span>
						{repo.language}
					</span>
				)}

				<span>
					Aktualisiert am{" "}
					{new Date(repo.updated_at).toLocaleDateString("de-DE")}
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
