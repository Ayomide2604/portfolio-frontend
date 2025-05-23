import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import NotFound from "./screens/404";
import ProjectDetail from "./screens/ProjectDetailScreen";

function App() {
	return (
		<>
			<Header />
			<Container fluid>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/projects/:id" element={<ProjectDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
			<Footer />
		</>
	);
}

export default App;
