import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const ProjectList = ({ projects }) => {
	const { t } = useLanguage();

	return projects.length === 0 ? (
		<p className="text-center text-body-secondary py-5">{t.projects.empty}</p>
	) : (
		<Row xs={1} md={2} lg={3} className="g-4">
			{projects.map((project, index) => (
				<Col key={project.slug}>
					<Reveal delay={index * 100}>
						<ProjectCard project={project} />
					</Reveal>
				</Col>
			))}
		</Row>
	);
};

export default ProjectList;
