import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import About from './pages/About.page';
import Home from './pages/Home.page';
import Organizations from './pages/Organizatons.page';
import Projects from './pages/Projects.page';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />
          <Box sx={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/organizations" element={<Organizations />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
