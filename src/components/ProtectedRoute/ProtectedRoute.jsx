import { Navigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/currentUserContent";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const location = useLocation();

  if (!isLoggedIn) return <Navigate to="/" state={{ from: location.pathname }} replace />;

  return children;
}
