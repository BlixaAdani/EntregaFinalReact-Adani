// src/components/AuthProvider.jsx
import React, { createContext, useState, useContext } from "react";

// Crear contexto de autenticación
export const AuthContext = createContext(); // 🔹 ¡Exportado correctamente!

// Hook personalizado para acceder al contexto
export function useAuth() {
  return useContext(AuthContext);
}

// Proveedor de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}