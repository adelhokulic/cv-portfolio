import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/LanguageContext";

const RepoCard = ({ repo }) => {
	const { t } = useLanguage();

	return (
		<article className="bento-card d-flex flex-column gap-2 p-4">
			<h3 className="repo-card__name mb-1">{repo.name}</h3>

			<p className="repo-card__description mb-1">
				{repo.description ? repo.description : t.github.noDescription}
			</p>

			<div className="d-flex flex-wrap gap-3 small text-body-secondary">
				{repo.language && (
					<span className="d-inline-flex align-items-center gap-2">
						<span className="repo-card__dot" aria-hidden="true"></span>
						{repo.language}
					</span>
				)}
				<span>
					{t.github.updated}{" "}
					{new Date(repo.updated_at).toLocaleDateString(t.github.dateLocale)}
				</span>
			</div>

			<div className="d-flex gap-2 mt-auto pt-3">
				<Button
					href={repo.html_url}
					target="_blank"
					rel="noreferrer"
					size="sm"
					variant="outline-secondary"
				>
					Code
				</Button>
				{repo.homepage && (
					<Button
						href={repo.homepage}
						target="_blank"
						rel="noreferrer"
						size="sm"
						variant="outline-secondary"
					>
						Demo
					</Button>
				)}
			</div>
		</article>
	);
};

export default RepoCard;
