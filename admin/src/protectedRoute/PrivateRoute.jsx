import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");

  if (!adminToken) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default PrivateRoute;
