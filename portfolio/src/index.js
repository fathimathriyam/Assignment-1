/*Fathimath Riya Manali Peedikayil*/
/*301419323*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Projects from './components/Project'; 
import About from './components/About';
import Contactme from './components/Contactme';
import Services from './components/Services';
import NotFound from './components/NotFound'; 

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />  
        <Route path="/contact" element={<Contactme />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
