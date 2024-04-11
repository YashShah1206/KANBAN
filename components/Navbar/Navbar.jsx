import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

export default function Navbar(props) {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className="navbar">
      <h2>Kanban Board</h2>
      
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          style={{ transition: "all 200ms" }}
          onChange={props.switchTheme}
        />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon fa-sm"></i>
          <i className="fas fa-sun fa-sm"></i>
          <div className="ball" />
        </label>
      </div>
      
      {/* Render login or logout button based on authentication status */}
      {!isLoading &&
        (isAuthenticated ? (
          <div>
            <span>Hello, {user && user.name}</span>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Log In</button>
        ))}
    </div>
  );
}
