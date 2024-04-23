import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    console.log("Login attempted", username, password);
    setIsAuthenticated(true);
  };

  const signup = (username, password) => {
    console.log("Signup attempted", username, password);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>{children}</AuthContext.Provider>;

  // This line is removed as it's a duplicate of the previous return statement.
};
