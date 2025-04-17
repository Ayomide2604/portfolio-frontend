import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Form,
	Button,
	Alert,
	Row,
	Col,
	Card,
} from "react-bootstrap";
import api from "../utils/axios";
import useAuthStore from "../store/useAuthStore";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { login } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const response = await api.post("/auth/login", {
				email,
				password,
			});
			const { token, user } = response.data;
			login(token, user);
			navigate("/dashboard");
		} catch (err) {
			setError("Invalid email or password");
			console.error("Login error:", err);
		}
	};

	return (
		<Container className="d-flex justify-content-center align-items-center my-5">
			<Row className="w-100 justify-content-center">
				<Col xs={12} md={6} lg={4}>
					<Card className="shadow p-3">
						<Card.Body>
							<h4 className="text-center mb-5">Login</h4>

							{error && <Alert variant="danger">{error}</Alert>}

							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="email" className="mb-3">
									<Form.Label>Email address:</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</Form.Group>

								<Form.Group controlId="password" className="mb-3">
									<Form.Label>Password:</Form.Label>
									<Form.Control
										type="password"
										placeholder="Enter password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</Form.Group>

								<Button type="submit" className=" w-100 mb-5">
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginScreen;
