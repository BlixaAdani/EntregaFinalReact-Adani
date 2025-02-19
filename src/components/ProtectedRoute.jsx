import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // 🔹 Usa `useAuth`, no `AuthContext` directamente.

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth(); // 🔹 Obtiene el usuario desde el hook

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
}

export default ProtectedRoute;