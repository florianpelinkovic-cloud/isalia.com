/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NeuralNetworkBackground } from './components/NeuralNetworkBackground';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { ServicesPreview } from './components/ServicesPreview';
import { CasUsage } from './pages/CasUsage';
import { MethodSection } from './components/MethodSection';
import { Technologie } from './pages/Technologie';
import { Tarifs } from './pages/Tarifs';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { MentionsLegales } from './pages/MentionsLegales';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper for pages that are actually components in this simplified structure
const ServicesPage = () => (
  <div className="pt-20">
    <ServicesPreview />
  </div>
);

const MethodePage = () => (
  <div className="pt-20">
    <MethodSection />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <NeuralNetworkBackground />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/cas-usage" element={<CasUsage />} />
            <Route path="/methode" element={<MethodePage />} />
            <Route path="/technologie" element={<Technologie />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

