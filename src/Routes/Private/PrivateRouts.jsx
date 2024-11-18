import { useContext } from "react";
import { AuthContext } from "../../Provider/Authproviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouts;
