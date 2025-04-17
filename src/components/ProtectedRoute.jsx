import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const user = useAuthStore((state) => state.user);
	return user ? children : navigate("/login");
};

export default ProtectedRoute;
