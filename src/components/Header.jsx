import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import api from "../utils/axios";

const Header = () => {
	const { token, user, logout } = useAuthStore();
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
					className="nav-menu d-md-none"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<i className="bi bi-menu-button-fill" />
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
							<Link className="nav-link" href="/#service">
								Service
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/#about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/#portfolio">
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/#testimonial">
								Testimonials
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/#blog">
								Blog
							</Link>
						</li>
						{token ? (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/dashboard">
										Welcome {user.username}
									</Link>
								</li>
								<li className="nav-item">
									<Link onClick={logout} className="nav-link">
										Logout
									</Link>
								</li>
							</>
						) : null}
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
