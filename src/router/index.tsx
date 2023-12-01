import React from "react";
import {
    Route,
    BrowserRouter as Router,
    //Route,
    Routes,
    //Link,
    Navigate
  } from "react-router-dom";

import LoginView from '../views/LoginView'

const CustomRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginView/>} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    )

}

export default CustomRouter;