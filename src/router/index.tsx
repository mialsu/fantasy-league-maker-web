import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginView from "../views/LoginView";

import PrivateRoute from "./PrivateRoute";

const CustomRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={LoginView} />}
        />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default CustomRouter;
