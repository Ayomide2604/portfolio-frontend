import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./pages/Dashboard";
import NotFound from "./screens/404";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/login" element={<LoginScreen />} />
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
			<Footer />
		</>
	);
}

export default App;
