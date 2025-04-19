import { Link } from "react-router-dom";

const Project = ({ title, tags, image }) => {
	return (
		<div className="post col-md-4 " data-aos="fade-up">
			<div className="card">
				<img src={image[0]} className="card-img-top" alt={title} />
				<div className="card-body text-center">
					<h4 className="card-title">{title}</h4>

					{tags &&
						tags.map((tag) => (
							<span
								key={tag}
								className="badge bg-secondary badge-pill p-2 ms-2"
							>
								{tag}
							</span>
						))}
					<br />
					<Link to={`projects/${title}`} className="link">
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Project;
