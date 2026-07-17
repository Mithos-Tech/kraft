/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    }
  }
};

const riseItem = {
  hidden: { opacity: 0, y: 15, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', duration: 0.6, bounce: 0 }
  }
};

export default function Footer({ setCurrentPage }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live real-time digital clock formatted exactly as shown in the mockup
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2500);
  };

  const handleBlogClick = () => {
    setCurrentPage('inicio');
    setTimeout(() => {
      const section = document.getElementById('articles-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const footerColumns = [
    {
      title: 'COMPAÑÍA',
      links: [
        { label: 'Sobre Nosotros', onClick: () => setCurrentPage('servicios_detalle') },
        { label: 'Nuestro Equipo', href: '#' },
        { label: 'Bolsa de Trabajo', href: '#' },
        { label: 'Nuestro Blog', onClick: handleBlogClick },
      ]
    },
    {
      title: 'PLATAFORMA',
      links: [
        { label: 'Servicios HR', onClick: () => setCurrentPage('servicios_detalle') },
        { label: 'Calculadora de Presupuesto', onClick: () => setCurrentPage('presupuesto') },
        { label: 'Casos de Éxito', href: '#' },
        { label: 'Preguntas Frecuentes', href: '#' },
      ]
    },
    {
      title: 'SOPORTE',
      links: [
        { label: 'Soporte Correo', href: 'mailto:soporte@kraft.com' },
        { label: 'Aviso de Privacidad', href: '#' },
        { label: 'Licencias de Uso', href: '#' },
        { label: 'Iniciar Sesión', href: '#' },
      ]
    }
  ];

  return (
    <motion.footer
      id="main-footer"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative w-full bg-[#0A0A0B] text-neutral-300 font-sans overflow-hidden selection:bg-[#6D4DE6]/30 border-t border-neutral-900"
    >
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Soft violet gradient blur in the bottom-left corner */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#6D4DE6]/15 blur-[120px] rounded-full" />
        {/* Subtle grid of tiny dots */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)', backgroundSize: '24px 24px' }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 flex flex-col min-h-[500px] justify-between">
        
        {/* Top Section - Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <motion.div variants={riseItem} className="max-w-xl">
            <span className="text-sm font-medium text-neutral-200 inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6D4DE6] shadow-[0_0_12px_rgba(109,77,230,0.8)]" />
              BOLETÍN INFORMATIVO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl text-white font-light leading-[1.1] tracking-tight whitespace-pre-line mt-4">
              La información más reciente,{"\n"}módulos y actualizaciones{"\n"}en tu bandeja de entrada semanal.
            </h2>
          </motion.div>

          <motion.div variants={riseItem} className="w-full max-w-md lg:mt-auto relative">
            <form onSubmit={handleSubscribe} className="flex w-full h-12 sm:h-14 bg-neutral-950 border border-neutral-800 rounded-full overflow-hidden p-1 focus-within:border-[#6D4DE6] focus-within:ring-1 focus-within:ring-[#6D4DE6] transition-all">
              <input 
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Introduce tu correo electrónico" 
                className="flex-grow bg-transparent px-4 sm:px-5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none" 
              />
              <button 
                type="submit" 
                className="h-full px-4 sm:px-6 bg-[#6D4DE6] hover:bg-[#553bb8] rounded-full transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-white cursor-pointer select-none whitespace-nowrap group"
              >
                Mantente al día
                <span className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight size={15} />
                </span>
              </button>
            </form>

            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-8 left-2 text-emerald-400 font-sans text-xs font-semibold flex items-center gap-1.5"
                >
                  <CheckCircle2 size={14} />
                  ¡Te has suscrito con éxito!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Middle Section - Links & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <motion.div 
            variants={riseItem} 
            className="flex items-center gap-2 select-none cursor-pointer"
            onClick={() => setCurrentPage('inicio')}
          >
            <img 
              src="https://res.cloudinary.com/chlgeobm/image/upload/v1784306478/logo_kraft_wflgiq.svg" 
              alt="Logo Kraft" 
              className="w-8 h-8 object-contain transition-transform duration-300 hover:rotate-6"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl md:text-2xl font-display font-black tracking-tight text-brand-500">
              Kraft
            </span>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 lg:gap-32">
            {footerColumns.map((col, idx) => (
              <motion.div key={idx} variants={riseItem} className="flex flex-col gap-6">
                <h4 className="text-xs font-semibold tracking-wider text-white uppercase">{col.title}</h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      {link.onClick ? (
                        <button 
                          onClick={link.onClick}
                          className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a 
                          href={link.href} 
                          className="text-sm text-neutral-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Meta */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-900 text-xs text-neutral-500">
          <motion.div variants={riseItem} className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
            <p className="text-center sm:text-left text-neutral-400">
              © 2026 Kraft by <span className="text-brand-500 font-semibold hover:text-brand-400 transition-colors">Inspyrio Studio</span>. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#6D4DE6]" />
              <span>Santiago, CL</span>
            </div>
            {currentTime && (
              <div className="flex items-center gap-2 font-mono">
                <Clock size={14} className="text-[#6D4DE6]" />
                <span>{currentTime}</span>
              </div>
            )}
          </motion.div>
          <motion.div variants={riseItem} className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Sitio Web</a>
          </motion.div>
        </div>

      </div>
    </motion.footer>
  );
}
