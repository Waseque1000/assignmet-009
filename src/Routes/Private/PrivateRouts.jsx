import { useContext } from "react";
import { AuthContext } from "../../Provider/Authproviders";
import { Navigate } from "react-router-dom";

const PrivateRouts = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouts;
