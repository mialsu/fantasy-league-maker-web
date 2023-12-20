import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  component: React.ComponentType;
  authenticated?: boolean;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  // Add your authentication logic here
  const isAuthenticated = authenticated || false; // Use the authenticated prop or your own logic

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
