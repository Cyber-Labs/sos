import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.page";
import Organizations from "./pages/Organizations.page";
import Organization from "./components/Organization";
import Projects from "./pages/Projects.page";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ paddingBottom: "4rem" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/organizations" element={<Organizations />} />
            <Route
              exact
              path="/organizations/:orgId"
              element={<Organization />}
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
