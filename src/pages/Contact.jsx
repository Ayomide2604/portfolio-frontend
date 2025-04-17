import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
	return (
		<section className="contact py-5" id="contact">
			<div className="heading text-center">
				<small>Get in Touch</small>
				<h3>Any Questions? Feel Free to Contact</h3>
			</div>
			<div className="row justify-content-evenly mt-5">
				<div className="col-md-5 col-10 contact-details" data-aos="slide-right">
					<div className="row justify-content-evenly">
						<div className="col-1">
							<FaPhoneAlt size={30} />
						</div>
						<div className="col-11">
							<p>+(234) 812 666 0484</p>
						</div>
					</div>
					<div className="row justify-content-evenly">
						<div className="col-1">
							<FaEnvelope size={30} />
						</div>
						<div className="col-11">
							<p>Theolowuayo@gmail.com</p>
						</div>
					</div>
					<div className="row justify-content-evenly">
						<div className="col-1">
							<FaGlobe size={30} />
						</div>
						<div className="col-11">
							<p>AyotheDev.com</p>
						</div>
					</div>
				</div>
				<div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
					<div className="contact-form">
						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="Name"
							/>
						</div>
						<div className="mb-3">
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="E-mail"
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="Mobile No."
							/>
						</div>
						<div className="mb-3">
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								placeholder="Message"
								rows={5}
								defaultValue={""}
							/>
						</div>
						<button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
							Submit
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
