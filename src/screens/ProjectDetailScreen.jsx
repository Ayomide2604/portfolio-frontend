import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectDetail = () => {
	const { id } = useParams();
	const project = projects.find((project) => project.title === id);

	return (
		<section id="portfolio-details" className="portfolio-details section">
			<div className="container section-title" data-aos="fade-up">
				<h2>Portfolio Details</h2>
				<p>
					Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
					consectetur velit
				</p>
			</div>

			<div className="container" data-aos="fade-up" data-aos-delay={100}>
				<div className="row gy-4">
					<div className="col-lg-8">
						<Swiper
							modules={[Pagination, Navigation]}
							pagination={{ clickable: true }}
							navigation
							spaceBetween={20}
							slidesPerView={1}
							className=""
						>
							{project.image?.length > 0 ? (
								project.image.map((img, index) => (
									<SwiperSlide key={index}>
										<img
											src={img}
											alt={`Slide ${index}`}
											className="img-fluid"
											style={{
												width: "100%",
												maxHeight: "300px",
												objectFit: "contain",
											}}
										/>
									</SwiperSlide>
								))
							) : (
								<SwiperSlide>
									<img
										src="/img/projects/portfolio/portfolio.png"
										alt="Default"
										className="img-fluid"
									/>
								</SwiperSlide>
							)}
						</Swiper>
					</div>

					<div className="col-lg-4">
						<div
							className="portfolio-info"
							data-aos="fade-up"
							data-aos-delay={200}
						>
							<h3>Project information</h3>
							<ul>
								<li>
									<strong>Title:</strong> {project.title}
								</li>
								<li>
									<strong>Client:</strong> ASU Company
								</li>
								<li>
									<strong>Project date:</strong> 01 March, 2020
								</li>
								<li>
									<strong>Project URL:</strong> <a href="#">www.example.com</a>
								</li>
							</ul>
						</div>

						<div
							className="portfolio-description"
							data-aos="fade-up"
							data-aos-delay={300}
						>
							<h2>Exercitationem repudiandae officiis neque suscipit</h2>
							<p>
								Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
								itaque inventore commodi labore quia quia. Exercitationem
								repudiandae officiis neque suscipit non officia eaque itaque
								enim. Voluptatem officia accusantium nesciunt est omnis tempora
								consectetur dignissimos. Sequi nulla at esse enim cum deserunt
								eius.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetail;
