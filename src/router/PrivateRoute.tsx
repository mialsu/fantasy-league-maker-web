import React from "react";
import { Navigate } from "react-router-dom";

export interface ProtectedRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
  }

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
    if (!isAuthenticated) {
      return <Navigate to="/landing" replace />;
    }
  
    return children;
  };

export default ProtectedRoute;