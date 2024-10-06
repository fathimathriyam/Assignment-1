/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Projects from './components/Project';
import About from './components/About';
import Contactme from './components/Contactme';
import Navigation from './components/Navigation';
import Services from './components/Services';
import NotFound from './components/NotFound'; 

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contactme />} />
        <Route path="services" element={<Services />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}
