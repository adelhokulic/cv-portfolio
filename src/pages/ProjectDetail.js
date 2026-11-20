import { Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import projects from "../data/projects.json";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

const ProjectDetail = () => {
	const { slug } = useParams();
	const { language, t } = useLanguage();
	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return (
			<section className="text-center py-5">
				<p className="not-found-code mb-3">404</p>
				<h1 className="h3 fw-bold mb-2">{t.projectDetail.notFoundTitle}</h1>
				<p className="text-body-secondary mb-4">
					{t.projectDetail.notFoundText}
				</p>
				<Button as={Link} to="/projects">
					{t.projectDetail.backToProjects}
				</Button>
			</section>
		);
	}

	return (
		<Row className="justify-content-center">
			<Col lg={10} xl={9}>
				<article>
					<Link
						to="/projects"
						className="link-secondary text-decoration-none d-inline-block mb-4"
					>
						{t.projectDetail.back}
					</Link>

					<header className="mb-4">
						<h1 className="page-title mb-3">{project.title}</h1>
						<p className="lead-muted mb-3">{project.description[language]}</p>

						<div className="d-flex flex-wrap gap-2 mb-4">
							{project.technologies.map((technology) => {
								return (
									<span key={technology} className="tech-pill">
										{technology}
									</span>
								);
							})}
						</div>

						<div className="d-flex flex-wrap gap-2">
							{project.demo !== "" && (
								<Button href={project.demo} target="_blank" rel="noreferrer">
									{t.projectDetail.demo}
								</Button>
							)}
							<Button
								href={project.github}
								target="_blank"
								rel="noreferrer"
								variant="outline-secondary"
							>
								{t.projectDetail.code}
							</Button>
						</div>
					</header>

					<img
						className="detail-image mb-5"
						src={project.image}
						alt={project.title}
					/>

					<section>
						<h2 className="section-title mb-4">{t.projectDetail.features}</h2>

						<Row xs={1} md={2} className="g-3">
							{project.highlights[language].map((highlight, index) => {
								return (
									<Col key={highlight}>
										<Reveal delay={index * 100}>
											<div className="bento-card d-flex gap-3 p-4">
												<span className="highlight-check">✓</span>
												<span>{highlight}</span>
											</div>
										</Reveal>
									</Col>
								);
							})}
						</Row>
					</section>
				</article>
			</Col>
		</Row>
	);
};

export default ProjectDetail;
