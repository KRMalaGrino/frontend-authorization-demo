import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (isLoggedIn) {
    return <Outlet />;
  } else if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
