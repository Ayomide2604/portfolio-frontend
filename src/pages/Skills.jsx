import React from "react";
import skills from "../data/skills";

import Skill from "../components/Skill";

const Skills = () => {
	return (
		<section className="skill mt-5 py-5" id="about">
			<div className="row justify-content-center">
				<div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
					<div className="heading mt-5 mt-md-3">
						<small>My Skills</small>
						<h3>Beautiful & Unique Digital Experiences</h3>
						<p className="text-muted">
							As a junior backend developer, I am passionate about creating
							efficient and scalable server-side solutions. My skills include
							working with various backend technologies to build robust and
							secure web applications.
						</p>
						<button className="c-btn h-btn my-5 py-3 px-5 rounded-pill">
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
				<div className="col-9 col-md-5 " data-aos="slide-right">
					<div className="row">
						{skills.map((skill, index) => (
							<div className=" col-4 col-sm-4 col-md-3 mt-4 ">
								<Skill
									name={skill.name}
									Icon={skill.Icon}
									color={skill.color}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
