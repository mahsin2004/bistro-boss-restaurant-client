import PropTypes from "prop-types";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="max-w-[1440px] mx-auto px-10">
        <p className="loading loading-spinner loading-md"></p>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.object,
};

export default AdminRoute;
