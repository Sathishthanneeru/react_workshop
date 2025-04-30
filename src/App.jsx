import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInForm from "./SignInForm";
import HomePage from "./HomePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
export default App;
