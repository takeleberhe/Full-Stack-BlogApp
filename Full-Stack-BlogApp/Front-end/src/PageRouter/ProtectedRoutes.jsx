import{ useContext } from "react";
import AuthContext from "../Redux/AuthReducer/AuthSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, accessBy }) => {
  const { user } = useContext(AuthContext);
  if (accessBy === "non-authenticated") {
    if (!user) {
      return children;
    }
  } else if (accessBy === "authenticated") {
    if (user) {
      return children;
    }
  }
  return <Navigate to="/"></Navigate>;
};

export default ProtectedRoute;
