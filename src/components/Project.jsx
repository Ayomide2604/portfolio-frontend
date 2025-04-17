const Project = ({ title, tags, image }) => {
	return (
		<div className="post col-md-4 " data-aos="fade-up">
			<div className="card">
				<img src={image} className="card-img-top" alt="2048 Game" />
				<div className="card-body text-center">
					<h4 className="card-title">{title}</h4>

					{tags &&
						tags.map((tag) => (
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
	);
};

export default Project;
