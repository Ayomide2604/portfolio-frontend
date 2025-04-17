import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="text-center text-muted py-4">
			<h3 className="text-white pt-4" data-aos="fade-up">
				AyoTheDev
			</h3>
			<div className="link-group mt-5" data-aos="fade-up">
				<a href="#home">Home</a>
				<div className="vr" />
				<a href="#about">About</a>
				<div className="vr" />
				<a href="#service">Service</a>
				<div className="vr" />
				<a href="#portfolio">Portfolio</a>
				<div className="vr" />
				<a href="#blog">Blog</a>
				<div className="vr" />
				<a href="#contact">Contact</a>
			</div>
			<div className="social-links mt-5" data-aos="fade-up">
				<button href="" className="rounded-pill ">
					<FaLinkedin size={30} color="#0A66C2" />
				</button>
				<button href="" className="rounded-pill ">
					<FaWhatsapp size={30} color="#25D366" />
				</button>
				<button href="" className="rounded-pill ">
					<FaGithub size={30} color="#181717" />
				</button>
			</div>
			<hr className="text-muted my-4" />
			<p>Copyright 2025 AyoTheDev | All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
