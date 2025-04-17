import React, { useState, useEffect } from "react";
import api from "./../utils/axios";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await api.get(`/projects`);
				setProjects(response.data);
			} catch (error) {
				setError("Failed to fetch Projects. Please try again later.");
				console.error("Error fetching projects:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);

	if (loading) {
		return (
			<Container>
				<Row>
					<Col className="text-center my-5">
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</Col>
				</Row>
			</Container>
		);
	}

	if (error) {
		return (
			<Container>
				<Row>
					<Col className="text-center my-5">
						<Alert variant="danger">{error}</Alert>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<section className="portfolio" id="portfolio">
			<div className="heading text-center pt-5">
				<small>Creative Work</small>
				<h3>Check My Portfolio</h3>
			</div>

			<div className="portfolio-body">
				<div className="row px-4 mt-4 justify-content-evenly">
					{projects.length < 1 ? (
						<Container>
							<Row>
								<Col className="text-center my-5">
									<Alert variant="danger">No projects yet </Alert>
								</Col>
							</Row>
						</Container>
					) : (
						projects.map((project) => (
							<div className="post col-md-4 " data-aos="fade-up">
								<div className="card">
									<img
										src="https://picsum.photos/300/200"
										className="card-img-top"
										alt="2048 Game"
									/>
									<div className="card-body text-center">
										<h4 className="card-title">{project.title}</h4>
										{project.tags &&
											project.tags.map((tag) => (
												<span className="badge bg-secondary badge-pill p-2 ms-2">
													{tag}
												</span>
											))}

										<br />
										<a href="#" className="link">
											Read More
										</a>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
