import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BuildPCPage from './pages/BuildPCPage';
import ConsultingPage from './pages/ConsultingPage';
import RepairPage from './pages/RepairPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build-pc" element={<BuildPCPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/repair" element={<RepairPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
