import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Terms from "./components/Terms";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
