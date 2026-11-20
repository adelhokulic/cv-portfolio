import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import projects from "../data/projects.json";
import ProjectList from "../components/ProjectList";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

const stack = [
	"React",
	"Next.js",
	"JavaScript",
	"TypeScript",
	"Bootstrap",
	"Firebase",
];

const Home = () => {
	const { t } = useLanguage();
	const featuredProjects = projects.filter(
		(project) => project.featured === true,
	);

	return (
		<>
			<Row className="g-3 g-lg-4">
				<Col lg={8}>
					<div className="bento-card bento-card--hero d-flex flex-column justify-content-center">
						<div className="mb-4">
							<span className="status-badge">
								<span className="status-dot" aria-hidden="true"></span>
								{t.home.status}
							</span>
						</div>
						<p className="hero-greeting mb-2">{t.home.greeting}</p>
						<h1 className="hero-name mb-3">Adel Hokulic</h1>
						<p className="hero-role mb-3">{t.home.role}</p>
						<p className="lead-muted mb-4">{t.home.intro}</p>
						<div className="d-flex flex-wrap gap-2">
							<Button as={Link} to="/projects" size="lg">
								{t.home.viewProjects}
							</Button>
							<Button
								as={Link}
								to="/contact"
								size="lg"
								variant="outline-secondary"
							>
								{t.home.contactMe}
							</Button>
						</div>
					</div>
				</Col>

				<Col lg={4} className="d-flex flex-column gap-3 gap-lg-4">
					<div className="bento-card flex-fill">
						<p className="bento-label">📍 {t.home.locationTitle}</p>
						<p className="bento-big mb-2">{t.home.location}</p>
						<p className="text-body-secondary mb-0">{t.home.origin}</p>
					</div>
					<div className="bento-card flex-fill">
						<p className="bento-number mb-2">{projects.length}</p>
						<p className="fw-semibold mb-2">{t.home.projectsCount}</p>
						<Link to="/projects" className="bento-link">
							{t.home.allProjects}
						</Link>
					</div>
				</Col>

				<Col md={6} lg={4}>
					<Reveal>
						<div className="bento-card">
							<p className="bento-label">{t.home.stackTitle}</p>
							<div className="d-flex flex-wrap gap-2">
								{stack.map((item) => (
									<span key={item} className="tech-pill">
										{item}
									</span>
								))}
							</div>
						</div>
					</Reveal>
				</Col>

				<Col md={6} lg={4}>
					<Reveal delay={100}>
						<div className="bento-card">
							<p className="bento-label">📚 {t.home.learningTitle}</p>
							<p className="bento-big text-accent mb-2">{t.home.learning}</p>
							<p className="text-body-secondary mb-0">{t.home.learningText}</p>
						</div>
					</Reveal>
				</Col>

				<Col lg={4}>
					<Reveal delay={200}>
						<div className="bento-card">
							<p className="bento-label">{t.home.reposTitle}</p>
							<p className="text-body-secondary mb-3">{t.home.reposText}</p>
							<a
								href="https://github.com/adelhokulic"
								target="_blank"
								rel="noreferrer"
								className="bento-link"
							>
								github.com/adelhokulic →
							</a>
						</div>
					</Reveal>
				</Col>
			</Row>

			<section className="mt-5 pt-lg-4">
				<div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-4">
					<h2 className="section-title mb-0">{t.home.featuredTitle}</h2>
					<Link to="/projects" className="bento-link">
						{t.home.allProjects}
					</Link>
				</div>

				<ProjectList projects={featuredProjects} />
			</section>

			<Row className="g-3 g-lg-4 mt-5">
				<Col lg={7}>
					<Reveal>
						<div className="bento-card d-flex flex-column justify-content-center">
							<h2 className="section-title mb-3">{t.home.aboutTitle}</h2>
							<p className="lead-muted mb-3">{t.home.aboutText}</p>
							<Link to="/about" className="bento-link">
								{t.home.moreAboutMe}
							</Link>
						</div>
					</Reveal>
				</Col>
				<Col lg={5}>
					<Reveal delay={100}>
						<div className="cta-card d-flex flex-column justify-content-center">
							<h2 className="section-title mb-3">{t.home.ctaTitle}</h2>
							<p className="mb-4 opacity-75">{t.home.ctaText}</p>
							<div>
								<Button as={Link} to="/contact" variant="light" size="lg">
									{t.home.contactMe}
								</Button>
							</div>
						</div>
					</Reveal>
				</Col>
			</Row>
		</>
	);
};

export default Home;
