import Project from "../components/Project";
import projects from "../data/projects";
import { Link } from "react-router-dom";

const Portfolio = () => {
	return (
		<section className="portfolio" id="portfolio">
			<div className="heading text-center pt-5">
				<small>Creative Work</small>
				<h3>Check My Portfolio</h3>
			</div>

			<div className="portfolio-body">
				<div className="row px-4 mt-4 justify-content-evenly">
					{projects.map((project) => (
						<Project
							key={project.id}
							title={project.title}
							tags={project.tags}
							image={project.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
