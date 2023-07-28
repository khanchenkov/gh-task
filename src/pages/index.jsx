import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:login" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default index;
