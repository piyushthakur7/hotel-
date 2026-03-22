import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}
