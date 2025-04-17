const Hero = () => {
	return (
		<section className="home pt-5 pb-5" id="home">
			<div className="row justify-content-evenly align-middle">
				{/* here data-aos is used for adding aos animation  */}
				<div
					className="col-10 col-md-6 text-center text-md-start"
					data-aos="slide-right"
				>
					<h2 style={{ color: "#3f396d" }}>
						Hello! I Am <br />
						<span className="c-orange">Ayomide</span>
					</h2>
					<p className="text-muted">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
						omnis natus neque amet fuga error, delectus molestiae, nemo
						provident deleniti quae laudantium veritatis rerum magni aliquam
						reiciendis iste quo atque?
					</p>
					<button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
						Hire Me
					</button>
				</div>
				<div className="col-10 col-md-4 d-none d-md-block">
					<img src="/img/hero.png" className="img-fluid" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
