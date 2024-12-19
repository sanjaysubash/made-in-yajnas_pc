import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import PCBuild from './pages/PCBuild';
import Consultant from './pages/Consultant';
import Repair from './pages/Repair';
import Community from './pages/Community';
import About from './pages/About';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar'; // Import the Navbar component
function App() {
  return (
    <Router>
      {/* Navbar is included to display on all pages */}
      <Navbar />  
      <Chatbot />  {/* Add Chatbot below Navbar */}
      
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Home />} />
        <Route path="/pcbuild" element={<PCBuild />} /> {/* Changed to lowercase */}
        <Route path="/consultant" element={<Consultant />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
