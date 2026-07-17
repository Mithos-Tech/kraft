/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { UserPlus, Briefcase, CreditCard, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';
import { PageId } from '../types';

interface ServicesProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  // We'll show the top 3 services on the landing page
  const displayServices = SERVICES.slice(0, 3);

  // Map icons manually based on icon name
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserPlus':
        return UserPlus;
      case 'Briefcase':
        return Briefcase;
      case 'CreditCard':
        return CreditCard;
      default:
        return Briefcase;
    }
  };

  // Curated high-quality professional images that represent the topics beautifully
  const serviceImages = [
    'https://res.cloudinary.com/chlgeobm/image/upload/v1784319279/Gesti%C3%B3n_de_n%C3%B3minas_kgfn9z.webp', // talent acquisition
    'https://res.cloudinary.com/chlgeobm/image/upload/v1784319279/Onboarding_de_empleados_swec7f.webp', // onboarding
    'https://res.cloudinary.com/chlgeobm/image/upload/v1784319279/Gestion_de_nominas_qeyssr.webp', // payroll
  ];

  return (
    <section id="services-section" className="bg-white py-24 relative overflow-hidden">
      {/* Precision vertical and horizontal wireframe grid background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="w-px h-full bg-slate-200/45" />
          <div className="w-px h-full bg-slate-200/45 hidden md:block" />
          <div className="w-px h-full bg-slate-200/45" />
          <div className="w-px h-full bg-slate-200/45 hidden md:block" />
          <div className="w-px h-full bg-slate-200/45" />
          <div className="w-px h-full bg-slate-200/45" />
        </div>
        <div className="absolute left-0 right-0 top-1/4 h-px bg-slate-200/35" />
        <div className="absolute left-0 right-0 top-2/4 h-px bg-slate-200/35" />
        <div className="absolute left-0 right-0 top-3/4 h-px bg-slate-200/35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] font-bold text-brand-500 tracking-widest uppercase block mb-3">
            NUESTROS SERVICIOS
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-dark tracking-tight uppercase leading-tight">
            SERVICIOS ESENCIALES<br />
            <span className="text-brand-500">PARA TU CRECIMIENTO</span>
          </h2>
        </div>

        {/* 3 Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayServices.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const imgUrl = serviceImages[index] || 'https://picsum.photos/seed/test/600/400';
            const isEven = index % 2 === 0;
            const cardBg = isEven 
              ? 'bg-brand-200 hover:bg-brand-200/90 border-brand-300/30' 
              : 'bg-brand-400 hover:bg-brand-400/90 border-brand-500/20';
            const tagStyle = isEven
              ? 'text-brand-800 bg-white/60 border-white/40'
              : 'text-brand-900 bg-white/40 border-white/20';
            const btnStyle = isEven
              ? 'bg-white/80 text-neutral-dark hover:bg-brand-500 hover:text-white border-transparent'
              : 'bg-white text-neutral-dark hover:bg-brand-500 hover:text-white border-transparent';
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.99, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`${cardBg} rounded-[32px] border shadow-sm hover:shadow-lg transition-all overflow-hidden group flex flex-col justify-between h-[520px]`}
              >
                {/* Image Area with Icon Floating */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 via-transparent to-transparent"></div>
                  
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-2xl bg-white text-brand-500 flex items-center justify-center shadow-md">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-neutral-dark tracking-tight mb-2 uppercase group-hover:text-brand-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-700 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border ${tagStyle}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => setCurrentPage('servicios_detalle')}
                      className={`w-full font-sans font-bold text-xs tracking-wider uppercase py-3 rounded-2xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${btnStyle}`}
                    >
                      Ver Detalles Completos
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to action to view the second page */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setCurrentPage('servicios_detalle')}
            className="group inline-flex items-center gap-5 bg-white hover:bg-brand-500 text-brand-500 hover:text-white px-7 py-3 rounded-full border border-brand-500/25 shadow-sm hover:shadow-md transition-all duration-300 font-sans font-bold text-xs tracking-widest uppercase cursor-pointer"
          >
            <span className="font-sans font-bold text-xs tracking-widest">Ver más</span>
            <span className="w-8 h-8 rounded-full bg-brand-500 group-hover:bg-white text-white group-hover:text-brand-500 flex items-center justify-center transition-all duration-300 shadow-sm">
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
