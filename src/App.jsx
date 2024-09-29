
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Resume from './pages/Resume';
import MainLayout from './layouts/MainLayout';
import { AppProvider } from './contexts/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
