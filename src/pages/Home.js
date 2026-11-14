import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectList from "../components/ProjectList";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
	const { t } = useLanguage();
	const featuredProjects = projects.filter(
		(project) => project.featured === true,
	);

	return (
		<>
			<section className="hero">
				<p className="hero__greeting">{t.home.greeting}</p>
				<h1 className="hero__name">
					Adel Hokulic<span>.</span>
				</h1>
				<p className="hero__role">{t.home.role}</p>
				<p className="hero__text">{t.home.intro}</p>

				<div className="hero__actions">
					<Link to="/projects" className="btn btn--primary btn--large">
						{t.home.viewProjects}
					</Link>
					<Link to="/contact" className="btn btn--ghost btn--large">
						{t.home.contactMe}
					</Link>
				</div>
			</section>

			<section className="section">
				<div className="section__header">
					<h2 className="section__title">{t.home.featuredTitle}</h2>
					<Link to="/projects" className="section__link">
						{t.home.allProjects}
					</Link>
				</div>

				<ProjectList projects={featuredProjects} />
			</section>
			<Reveal>
				<section className="section about-teaser">
					<div className="about-teaser__text">
						<h2 className="section__title">{t.home.aboutTitle}</h2>
						<p>{t.home.aboutText}</p>
						<Link to="/about" className="section__link">
							{t.home.moreAboutMe}
						</Link>
					</div>
				</section>
			</Reveal>
			<Reveal>
				<section className="cta">
					<h2 className="cta__title">{t.home.ctaTitle}</h2>
					<p className="cta__text">{t.home.ctaText}</p>
					<Link to="/contact" className="btn btn--large cta__btn">
						{t.home.contactMe}
					</Link>
				</section>
			</Reveal>
		</>
	);
};

export default Home;
