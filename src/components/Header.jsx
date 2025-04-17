import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
	return (
		<nav
			id="navbar-top"
			className="navbar navbar-expand-lg navbar-light bg-white sticky-top"
		>
			<div className="container-fluid px-5">
				<Link
					className="navbar-brand fw-bold fs-2"
					to="/"
					style={{ color: "#3f396d" }}
				>
					AyoTheDev
				</Link>
				<button
					className="nav-menu d-md-none d-flex justify-content-center align-items-center"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<RiMenuFill size={40} />
				</button>
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarNav"
				>
					<ul className="navbar-nav gap-4" style={{ fontSize: "1.1rem" }}>
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#service">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#portfolio">
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#testimonial">
								Testimonials
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#blog">
								Blog
							</a>
						</li>
					</ul>
					<button className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">
						Contact
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
