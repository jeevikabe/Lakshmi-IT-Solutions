import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    // The basename parameter handles the subfolder path cleanly on GitHub Pages
    <Router basename="/TechCraft">
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        
        {/* Responsive Professional Footer */}
        {/* <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 px-6 w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <span className="text-slate-500 text-sm order-2 md:order-1">
              © {new Date().getFullYear()} TechCraft. All rights reserved.
            </span>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400 order-1 md:order-2">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
              <span className="hidden sm:inline text-slate-700">•</span>
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </footer> */}

        {/* Responsive Professional Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 px-6 w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <span className="text-slate-500 text-sm order-2 md:order-1">
              © {new Date().getFullYear()} Lakshmi IT Solutions. All rights reserved.
            </span>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400 order-1 md:order-2">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
              <span className="hidden sm:inline text-slate-700">•</span>
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}