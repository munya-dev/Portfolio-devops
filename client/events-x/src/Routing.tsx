import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default AppRoutes;
