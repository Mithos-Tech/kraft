/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import WhyChooseUs from './components/WhyChooseUs';
import BannerHelp from './components/BannerHelp';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import Footer from './components/Footer';
import ServicesDetailPage from './pages/ServicesDetailPage';
import BudgetPlanner from './pages/BudgetPlanner';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [scrollToContact, setScrollToContact] = useState(false);

  const navigateToPage = (page: PageId, scrollContact = false) => {
    setScrollToContact(scrollContact);
    setCurrentPage(page);
  };

  // Smooth scroll to top on page navigation, unless we explicitly requested scrolling to the contact form
  useEffect(() => {
    if (currentPage === 'presupuesto' && scrollToContact) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, scrollToContact]);

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <motion.div
            key="inicio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <Hero setCurrentPage={(page) => navigateToPage(page, false)} />
            <TrustLogos />
            <WhyChooseUs />
            <BannerHelp setCurrentPage={(page) => navigateToPage(page, false)} />
            <AboutUs />
            <Services setCurrentPage={(page) => navigateToPage(page, false)} />
            <Pricing setCurrentPage={(page) => navigateToPage(page, false)} />
            <Testimonials />
            <Articles />
          </motion.div>
        );
      case 'servicios_detalle':
        return (
          <motion.div
            key="servicios_detalle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <ServicesDetailPage setCurrentPage={(page) => navigateToPage(page, false)} />
          </motion.div>
        );
      case 'presupuesto':
        return (
          <motion.div
            key="presupuesto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <BudgetPlanner shouldScrollToContact={scrollToContact} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between selection:bg-brand-200 selection:text-brand-900">
      {/* Universal Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={(page) => navigateToPage(page, false)} 
        onContactClick={() => navigateToPage('presupuesto', true)} 
      />

      {/* Main Content Area with dynamic routing page transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Universal Footer */}
      <Footer setCurrentPage={(page) => navigateToPage(page, false)} />
    </div>
  );
}

