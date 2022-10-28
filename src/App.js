import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.page";
import Organizations from "./pages/Organizatons.page";
import Projects from "./pages/Projects.page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ paddingTop: "1rem", paddingBottom: "4rem" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/organizations" element={<Organizations />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
