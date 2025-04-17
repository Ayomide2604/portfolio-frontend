const Services = () => {
	return (
		<section className="expertise mt-5" id="service">
			<div className="heading text-center">
				<small>My Expertise</small>
				<h3>
					Provide Foundational <br />
					Backend Services
				</h3>
			</div>
			<div className="row justify-content-evenly mt-5">
				<div className="col-10 col-md-4" data-aos="fade-up">
					<div className="service-card">
						<div className="img">
							<img
								src="/img/api.png"
								className="w-25 img-fluid img"
								alt="Basic API Development"
							/>
						</div>
						<div className="content mt-3">
							<h4>Basic API Development</h4>
							<p className="text-muted">
								Create simple RESTful APIs for basic CRUD operations to enable
								client-server communication.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-10" data-aos="fade-up">
					<div className="service-card">
						<div className="img">
							<img
								src="/img/database.png"
								className="w-25 img-fluid img"
								alt="Database Integration"
							/>
						</div>
						<div className="content mt-3">
							<h4>Database Integration</h4>
							<p className="text-muted">
								Connect and perform basic operations with SQL databases,
								focusing on data retrieval and storage.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-10" data-aos="fade-up">
					<div className="service-card">
						<div className="img">
							<img
								src="/img/auth.png"
								className="w-25 img-fluid img"
								alt="User Authentication"
							/>
						</div>
						<div className="content mt-3">
							<h4>User Authentication</h4>
							<p className="text-muted">
								Implement basic user authentication and authorization using
								sessions or tokens.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-10" data-aos="fade-up">
					<div className="service-card">
						<div className="img">
							<img
								src="/img/server.png"
								className="w-25 img-fluid img"
								alt="Server Setup"
							/>
						</div>
						<div className="content mt-3">
							<h4>Server Setup</h4>
							<p className="text-muted">
								Set up and configure basic server environments using Node.js,
								Express, Django or similar technologies.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-10" data-aos="fade-up">
					<div className="service-card">
						<div className="img">
							<img
								src="/img/error.png"
								className="w-25 img-fluid img"
								alt="Error Handling"
							/>
						</div>
						<div className="content mt-3">
							<h4>Error Handling</h4>
							<p className="text-muted">
								Implement basic error handling and logging to ensure smooth
								operation and debugging of backend services.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-10" data-aos="fade-up">
					<div className="service-card">
						<div className="img">
							<img
								src="/img/performance.png"
								className="w-25 img-fluid img"
								alt="Basic Performance Optimization"
							/>
						</div>
						<div className="content mt-3">
							<h4>Basic Performance Optimization</h4>
							<p className="text-muted">
								Optimize backend code for basic performance improvements,
								focusing on efficient querying and data processing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
