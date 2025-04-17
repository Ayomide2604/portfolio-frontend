import React, { useState, useEffect } from "react";
import api from "../utils/axios";
import {
	Table,
	Button,
	Modal,
	Form,
	Container,
	Row,
	Col,
	Alert,
	Spinner,
} from "react-bootstrap";

const Dashboard = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		tags: "",
	});
	const [editMode, setEditMode] = useState(false);
	const [editId, setEditId] = useState(null);

	const handleClose = () => {
		setShowModal(false);
		setFormData({ title: "", description: "", tags: "" });
		setEditMode(false);
		setEditId(null);
	};

	const handleShow = (project = null) => {
		if (project) {
			setEditMode(true);
			setEditId(project._id);
			setFormData({
				title: project.title,
				description: project.description,
				tags: project.tags.join(", "),
			});
		}
		setShowModal(true);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			if (editMode) {
				await api.put(`/projects/${editId}`, {
					title: formData.title,
					description: formData.description,
					tags: formData.tags.split(",").map((tag) => tag.trim()),
				});
				const updatedProjects = projects.map((project) =>
					project._id === editId
						? {
								...project,
								...formData,
								tags: formData.tags.split(",").map((tag) => tag.trim()),
						  }
						: project
				);
				setProjects(updatedProjects);
			} else {
				const response = await api.post("/projects", {
					title: formData.title,
					description: formData.description,
					tags: formData.tags.split(",").map((tag) => tag.trim()),
				});
				setProjects([...projects, response.data]);
			}
			handleClose();
		} catch (err) {
			setError("Failed to save project. Please try again later.");
			console.error("Error saving project:", err);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		setLoading(true);
		setError(null);

		try {
			await api.delete(`/projects/${id}`);
			setProjects(projects.filter((project) => project._id !== id));
		} catch (err) {
			setError("Failed to delete project. Please try again later.");
			console.error("Error deleting project:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await api.get("/projects");
				setProjects(response.data);
			} catch (error) {
				setError("Failed to fetch projects. Please try again later.");
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
		<Container className="dashboard my-5">
			<Row>
				<Col>
					<h2 className="text-center mb-4">Dashboard</h2>
					<Button variant="primary" onClick={() => handleShow()}>
						Add Project
					</Button>
				</Col>
			</Row>
			{projects.length < 1 ? (
				<Row className="my-3">
					<h4 className="text-center">No Projects Available in the Database</h4>
				</Row>
			) : (
				<Row className="mt-4">
					<Col>
						<Table striped bordered hover responsive>
							<thead>
								<tr>
									<th>#</th>
									<th>Title</th>
									<th>Description</th>
									<th>Tags</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{projects.map((project, index) => (
									<tr key={project._id}>
										<td>{index + 1}</td>
										<td>{project.title}</td>
										<td>{project.description}</td>
										<td>{project.tags.join(", ")}</td>
										<td>
											<Button
												className="ms-2"
												variant="warning"
												onClick={() => handleShow(project)}
											>
												Edit
											</Button>
											<Button
												className="ms-2"
												variant="danger"
												onClick={() => handleDelete(project._id)}
											>
												Delete
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Col>
				</Row>
			)}

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{editMode ? "Edit Project" : "Add Project"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								value={formData.title}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								name="description"
								value={formData.description}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formTags">
							<Form.Label>Tags</Form.Label>
							<Form.Control
								type="text"
								name="tags"
								value={formData.tags}
								onChange={handleChange}
								required
							/>
						</Form.Group>
						<Button variant="primary" type="submit" className="mt-3">
							{editMode ? "Update" : "Add"}
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</Container>
	);
};

export default Dashboard;
