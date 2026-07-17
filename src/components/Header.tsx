/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onContactClick?: () => void;
}

export default function Header({ currentPage, setCurrentPage, onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when near the top (inside hero, < 80px), fade out when scrolling down past 80px
      setIsVisible(window.scrollY < 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', id: 'inicio' as PageId },
    { label: 'Servicios', id: 'servicios_detalle' as PageId },
    { label: 'Calculadora', id: 'presupuesto' as PageId },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between h-11 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2" onClick={() => setCurrentPage('inicio')}>
            <img 
              src="https://res.cloudinary.com/chlgeobm/image/upload/v1784306478/logo_kraft_wflgiq.svg" 
              alt="Logo Kraft" 
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 hover:rotate-6"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-brand-500 flex items-center">
              Kraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-sans text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer relative py-1 ${
                  currentPage === item.id
                    ? 'text-brand-600'
                    : 'text-slate-600 hover:text-neutral-dark'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="get-quote-btn"
              onClick={onContactClick || (() => setCurrentPage('presupuesto'))}
              className="font-sans font-semibold text-[10px] tracking-widest uppercase bg-brand-500 text-white px-4 py-2.5 rounded-full hover:bg-brand-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95"
            >
              Contacto
              <ArrowUpRight size={12} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-600 hover:text-neutral-dark transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden overflow-hidden mt-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xl p-6"
            >
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full max-w-[220px] text-center py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative group cursor-pointer ${
                      currentPage === item.id
                        ? 'text-brand-500 bg-brand-50/60'
                        : 'text-slate-600 hover:text-brand-500 hover:bg-slate-50/80 hover:scale-[1.03]'
                    }`}
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:tracking-widest">
                      {item.label}
                    </span>
                    {/* Hover indicator accent line */}
                    <span className="absolute inset-x-0 bottom-1 mx-auto h-[2px] w-0 bg-brand-400 group-hover:w-8 transition-all duration-300 rounded-full" />
                  </button>
                ))}

                <div className="w-full pt-4 border-t border-slate-100 flex justify-center">
                  <button
                    onClick={() => {
                      if (onContactClick) {
                        onContactClick();
                      } else {
                        setCurrentPage('presupuesto');
                      }
                      setIsOpen(false);
                    }}
                    className="w-full max-w-[220px] font-sans font-bold text-center text-xs bg-brand-500 text-white py-3 rounded-full hover:bg-brand-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer group"
                  >
                    Contacto
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
