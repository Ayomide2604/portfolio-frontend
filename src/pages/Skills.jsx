const Skills = () => {
	return (
		<section className="skill mt-5 py-5" id="about">
			<div className="row justify-content-evenly">
				<div
					className="col-10 col-md-5 skill-with-progress"
					data-aos="slide-right"
				>
					<div className="row justify-content-evenly">
						<div className="col-10 col-md-6">
							<div className="progress-card ms-3 ms-md-0">
								<div className="circular-progress html-css">
									<span className="progress-value html-progress">0%</span>
								</div>
								<br />
								<span className="text">HTML &amp; CSS</span>
							</div>
						</div>
						<div className="col-10 col-md-6 mt-4 mt-md-0">
							<div className="progress-card ms-3 ms-md-0">
								<div className="circular-progress javascript">
									<span className="progress-value javascript-progress">0%</span>
								</div>
								<br />
								<span className="text">JavaScript</span>
							</div>
						</div>
					</div>
					<div className="row justify-content-evenly mt-4">
						<div className="col-10 col-md-6">
							<div className="progress-card ms-3 ms-md-0">
								<div className="circular-progress php">
									<span className="progress-value php-progress">0%</span>
								</div>
								<br />
								<span className="text">PHP</span>
							</div>
						</div>
						<div className="col-10 col-md-6 mt-4 mt-md-0">
							<div className="progress-card ms-3  ms-md-0">
								<div className="circular-progress reactjs">
									<span className="progress-value reactjs-progress">0%</span>
								</div>
								<br />
								<span className="text">ReactJS</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
					<div className="heading mt-5 mt-md-3">
						<small>My Skills</small>
						<h3>Beautiful &amp; Unique Digital Experiences</h3>
						<p className="text-muted">
							Nostrum exercitationem ullam corporis suscipit laborioa nisi ut
							aliquid exrea commodi consequatur magni dolores aos qui ratione
							voluptatem nesciunt.
						</p>
						<p className="text-muted">
							Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
							consequntar magni dolores.
						</p>
						<button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
							{/* here download attribute is used for adding download functionality to button  */}
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
<section className="skill mt-5 py-5" id="about">
	<div className="row justify-content-evenly">
		<div className="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
			<div className="row justify-content-evenly">
				<div className="col-10 col-md-6">
					<div className="progress-card ms-3 ms-md-0">
						<div className="circular-progress html-css">
							<span className="progress-value html-progress">0%</span>
						</div>
						<br />
						<span className="text">HTML &amp; CSS</span>
					</div>
				</div>
				<div className="col-10 col-md-6 mt-4 mt-md-0">
					<div className="progress-card ms-3 ms-md-0">
						<div className="circular-progress javascript">
							<span className="progress-value javascript-progress">0%</span>
						</div>
						<br />
						<span className="text">JavaScript</span>
					</div>
				</div>
			</div>
			<div className="row justify-content-evenly mt-4">
				<div className="col-10 col-md-6">
					<div className="progress-card ms-3 ms-md-0">
						<div className="circular-progress php">
							<span className="progress-value php-progress">0%</span>
						</div>
						<br />
						<span className="text">PHP</span>
					</div>
				</div>
				<div className="col-10 col-md-6 mt-4 mt-md-0">
					<div className="progress-card ms-3  ms-md-0">
						<div className="circular-progress reactjs">
							<span className="progress-value reactjs-progress">0%</span>
						</div>
						<br />
						<span className="text">ReactJS</span>
					</div>
				</div>
			</div>
		</div>
		<div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
			<div className="heading mt-5 mt-md-3">
				<small>My Skills</small>
				<h3>Beautiful &amp; Unique Digital Experiences</h3>
				<p className="text-muted">
					Nostrum exercitationem ullam corporis suscipit laborioa nisi ut
					aliquid exrea commodi consequatur magni dolores aos qui ratione
					voluptatem nesciunt.
				</p>
				<p className="text-muted">
					Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
					consequntar magni dolores.
				</p>
				<button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
					{/* here download attribute is used for adding download functionality to button  */}
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
</section>;
