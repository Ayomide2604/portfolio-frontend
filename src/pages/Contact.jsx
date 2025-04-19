import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccess(null);

		emailjs
			.sendForm(
				"service_d1jb09a",
				"template_d1pc929",
				form.current,
				"rVThJft0mEh2z1jPH"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			)
			.finally(() => {
				setLoading(false);
			});
	};

	// 🌀 Loading Spinner View
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

	// ✅ Success or Error View
	if (success === true) {
		return (
			<Container>
				<Row>
					<Col className="text-center my-5">
						<Alert variant="success">
							You have successfully sent a message!
						</Alert>
					</Col>
				</Row>
			</Container>
		);
	}

	if (success === false) {
		return (
			<Container>
				<Row>
					<Col className="text-center my-5">
						<Alert variant="danger">
							Unable to send message at this time. Please try again.
						</Alert>
					</Col>
				</Row>
			</Container>
		);
	}

	// 📨 Default Contact Form
	return (
		<section className="contact py-5" id="contact">
			<div className="heading text-center">
				<small>Get in Touch</small>
				<h3>Feel Free to Contact Me</h3>
			</div>
			<div className="row justify-content-center mt-5">
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
						<form ref={form} onSubmit={sendEmail}>
							<div className="mb-3">
								<input
									type="text"
									className="form-control"
									name="name"
									placeholder="Name"
								/>
							</div>
							<div className="mb-3">
								<input
									type="email"
									name="email"
									className="form-control"
									placeholder="E-mail"
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="phone"
									className="form-control"
									placeholder="Mobile No."
								/>
							</div>
							<div className="mb-3">
								<textarea
									className="form-control"
									name="message"
									placeholder="Message"
									rows={5}
								/>
							</div>
							<button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
