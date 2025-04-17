const Hero = () => {
	return (
		<section className="home pt-5 pb-5" id="home">
			<div className="row justify-content-evenly align-middle">
				<div
					className="col-10 col-md-6 text-center text-md-start"
					data-aos="slide-right"
				>
					<h2 style={{ color: "#3f396d" }}>
						Hello! I'm <br />
						<span className="c-orange">Ayomide</span>
					</h2>
					<p className="text-muted">
						I'm a backend web developer with a passion for building efficient,
						scalable, and secure server-side solutions. With a background in
						physiotherapy, I bring a unique perspective to problem-solving and
						user-centric design. My expertise includes working with databases
						and APIs to create seamless and reliable web applications.
					</p>
					<button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
						Hire Me
					</button>
				</div>
				<div className="col-10 col-md-4 mt-3 d-md-block">
					<img
						src="/img/hero.png"
						className="img-fluid"
						alt="Ayomide's Profile"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
