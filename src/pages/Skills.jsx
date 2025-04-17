import React from "react";

import {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaNodeJs,
	FaPython,
	FaJsSquare,
	FaDatabase,
	FaCloud,
	FaKey,
} from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiDjango, SiSqlite } from "react-icons/si";

import Skill from "../components/Skill";

const Skills = () => {
	const skills = [
		{ name: "HTML5", Icon: FaHtml5, color: "#e34c26" },
		{ name: "CSS3", Icon: FaCss3Alt, color: "#264de4" },
		{ name: "Bootstrap", Icon: FaBootstrap, color: "#563d7c" },
		{ name: "JavaScript", Icon: FaJsSquare, color: "#f0db4f" },
		{ name: "Node.js", Icon: FaNodeJs, color: "#8cc84b" },
		{ name: "Django", Icon: SiDjango, color: "#092e20" },
		{ name: "Python", Icon: FaPython, color: "#306998" },
		{ name: "MongoDB", Icon: SiMongodb, color: "#4caa44" },
		{ name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
		{ name: "SQLite", Icon: SiSqlite, color: "#003B57" },
	];

	return (
		<section className="skill mt-5 py-5" id="about">
			<div className="row justify-content-evenly">
				<div
					className="col-10 col-md-5 skill-with-progress"
					data-aos="slide-right"
				>
					<div className="row">
						{skills.map((skill, index) => (
							<div key={index} className="col-10 col-md-4 mt-4 mt-md-0">
								<Skill
									name={skill.name}
									Icon={skill.Icon}
									color={skill.color}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
					<div className="heading mt-5 mt-md-3">
						<small>My Skills</small>
						<h3>Beautiful & Unique Digital Experiences</h3>
						<p className="text-muted">
							As a beginner backend developer, I am passionate about creating
							efficient and scalable server-side solutions. My skills include
							working with various backend technologies to build robust and
							secure web applications.
						</p>
						<button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
							<a
								href="Entry Level Web Developer Resume.pdf"
								download="SampleCV"
								style={{ textDecoration: "none", color: "#fff" }}
							>
								Download CV
							</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
