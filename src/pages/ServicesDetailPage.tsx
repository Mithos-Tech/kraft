/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserPlus, Briefcase, CreditCard, ShieldAlert, Check, ArrowRight, Settings2, Sliders } from 'lucide-react';
import { SERVICES } from '../data';
import { PageId } from '../types';

interface ServicesDetailPageProps {
  setCurrentPage: (page: PageId) => void;
}

export default function ServicesDetailPage({ setCurrentPage }: ServicesDetailPageProps) {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'UserPlus':
        return UserPlus;
      case 'Briefcase':
        return Briefcase;
      case 'CreditCard':
        return CreditCard;
      case 'ShieldAlert':
        return ShieldAlert;
      default:
        return Briefcase;
    }
  };

  const IconComponent = getIcon(selectedService.iconName);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Subpage Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-40 md:pb-28 border-b border-slate-100/80 overflow-hidden bg-[#fafafc] rounded-b-[40px] md:rounded-b-[56px] lg:rounded-b-[72px]">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tag / Badge */}
              <span className="inline-flex items-center gap-2 text-brand-500 font-mono text-[10px] font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                CENTRO DE COMPETENCIAS KRAFT
              </span>
              
              {/* Hero Main Heading */}
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-neutral-dark tracking-tight uppercase leading-[1.1]">
                SERVICIOS DE RECURSOS<br />
                <span className="text-brand-500">HUMANOS A DETALLE</span>
              </h1>

              {/* Description Paragraph */}
              <p className="font-sans text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
                Analiza las especificaciones, alcances jurídicos y operacionales de cada uno de nuestros módulos de servicio diseñados para escalar compañías modernas en Latinoamérica.
              </p>

              {/* Minimalist Subpage Info Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-slate-200/50">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-dark bg-slate-100 rounded-md px-2 py-0.5">04</span>
                  <span className="font-sans text-[10px] text-slate-400 font-semibold tracking-wide uppercase">Módulos Activos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-dark bg-slate-100 rounded-md px-2 py-0.5">100%</span>
                  <span className="font-sans text-[10px] text-slate-400 font-semibold tracking-wide uppercase">Cumplimiento Legal</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium overlapping decorative mockup cards resembling main page style */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[280px]">
              
              {/* Decorative abstract color blob behind cards */}
              <div className="absolute top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6D4DE6]/8 blur-[64px] rounded-full z-0 pointer-events-none" />
              
              {/* Card pile layout */}
              <div className="relative w-full max-w-[340px] h-[250px] z-10 select-none">
                
                {/* Back Card: Base price or info indicator card (tilted negative) */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: -8, scale: 1 }}
                  transition={{ delay: 0.15 }}
                  className="absolute left-2 top-2 w-[210px] bg-neutral-dark text-white p-5 rounded-[22px] border border-neutral-border/40 shadow-xl"
                >
                  <span className="font-mono text-[8px] text-[#6D4DE6] font-bold tracking-widest uppercase">KRAFT CLOUD</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-2xl font-display font-black">$29</span>
                    <span className="text-[10px] text-slate-400">/colaborador</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal mt-1.5">
                    Tarifas transparentes sin costos de implementación ocultos.
                  </p>
                </motion.div>

                {/* Middle Card: Beautiful User List preview card (tilted positive) */}
                <motion.div 
                  initial={{ opacity: 0, rotate: 6, scale: 0.95 }}
                  animate={{ opacity: 1, rotate: 4, scale: 1 }}
                  transition={{ delay: 0.25 }}
                  className="absolute right-2 bottom-2 w-[240px] bg-white p-5 rounded-[24px] shadow-2xl border border-slate-100/80"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-sans text-[10px] font-bold text-slate-400 tracking-wider uppercase">Nómina Activa</span>
                    </div>
                    <span className="font-mono text-[9px] font-bold text-[#6D4DE6] bg-brand-50 px-2 py-0.5 rounded-full">CL • MX • AR</span>
                  </div>
                  
                  {/* Mock lists of employees */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=60&h=60" alt="" referrerPolicy="no-referrer" />
                        <div>
                          <span className="font-sans text-[10px] font-bold text-neutral-dark block leading-none">Sofía Valenzuela</span>
                          <span className="font-sans text-[8px] text-slate-400">UX Lead</span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] font-semibold text-emerald-500">Al día</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60&h=60" alt="" referrerPolicy="no-referrer" />
                        <div>
                          <span className="font-sans text-[10px] font-bold text-neutral-dark block leading-none">Mateo Silva</span>
                          <span className="font-sans text-[8px] text-slate-400">Backend Dev</span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] font-semibold text-emerald-500">Al día</span>
                    </div>
                  </div>
                </motion.div>

              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* Main Content section following the Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vertical Selection Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider uppercase block px-3 mb-2">
              SELECCIONA UN MÓDULO
            </span>
            {SERVICES.map((service) => {
              const TabIcon = getIcon(service.iconName);
              const isSelected = service.id === selectedServiceId;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white text-neutral-dark border-brand-500 shadow-md'
                      : 'bg-white/40 hover:bg-white text-slate-500 border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-500'
                    }`}>
                      <TabIcon size={18} />
                    </div>
                    <div>
                      <span className="font-display font-extrabold text-xs tracking-wide uppercase block">
                        {service.title}
                      </span>
                      <span className="font-sans text-[10px] text-slate-400 block mt-0.5">
                        Desde ${service.basePrice}/colaborador
                      </span>
                    </div>
                  </div>
                  <ArrowRight 
                    size={14} 
                    className={`transition-transform duration-300 ${
                      isSelected ? 'translate-x-1 text-brand-500' : 'text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5'
                    }`} 
                  />
                </button>
              );
            })}

            {/* Custom CTA Widget inside the sidebar */}
            <div className="bg-gradient-to-br from-neutral-dark to-neutral-card text-white p-6 rounded-3xl border border-neutral-border mt-8">
              <span className="font-mono text-[8px] font-bold text-brand-300 tracking-wider uppercase block mb-1">
                ¿NECESITAS MÚLTIPLES MÓDULOS?
              </span>
              <h4 className="font-display font-extrabold text-sm uppercase mb-2">
                PLANIFICADOR A MEDIDA
              </h4>
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed mb-4">
                Combina varios servicios, ajusta el volumen de tus colaboradores y obtén descuentos de hasta el 25% integrando la nómina.
              </p>
              <button
                onClick={() => setCurrentPage('presupuesto')}
                className="w-full font-sans font-bold text-[10px] uppercase tracking-wider bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sliders size={12} />
                Abrir Calculadora
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Animated Information Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedServiceId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] border border-slate-100 shadow-md p-8 md:p-10"
              >
                {/* Header detail */}
                <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-100 pb-8 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center border border-brand-100 shadow-sm">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] font-bold text-brand-500 uppercase bg-brand-50 border border-brand-100 px-2 py-0.5 rounded tracking-wider">
                        MÓDULO KRAFT ACTIVO
                      </span>
                      <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-dark tracking-tight uppercase mt-1">
                        {selectedService.title}
                      </h2>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      PRECIO ESTIMADO
                    </span>
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="font-display font-black text-4xl text-neutral-dark">
                        ${selectedService.basePrice}
                      </span>
                      <span className="font-sans text-xs font-semibold text-slate-400">
                        /colaborador
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-bold text-brand-600 bg-brand-50/50 border border-brand-100 px-3 py-1 rounded-full"
                    >
                      #{tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                {/* In-depth descriptions */}
                <div className="space-y-6 mb-10">
                  <p className="font-sans text-sm text-slate-700 leading-relaxed font-semibold">
                    {selectedService.description}
                  </p>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Key Benefits checklists */}
                <div className="border-t border-slate-100 pt-8">
                  <h3 className="font-display font-extrabold text-xs text-neutral-dark tracking-wider uppercase mb-6 flex items-center gap-2">
                    <Settings2 size={14} className="text-brand-500" />
                    BENEFICIOS CLAVE INCLUIDOS EN ESTE MÓDULO:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.benefits.map((benefit, bIdx) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: bIdx * 0.1 }}
                        key={bIdx}
                        className="flex gap-3 items-start bg-slate-50/50 hover:bg-slate-50 p-4 rounded-xl border border-slate-100/60 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-sans text-xs text-slate-600 font-medium leading-relaxed">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="font-sans text-[11px] text-slate-400">
                    *El precio final puede variar según integraciones fiscales de tu país.
                  </span>
                  <button
                    onClick={() => setCurrentPage('presupuesto')}
                    className="font-sans font-bold text-xs tracking-wider uppercase bg-neutral-dark hover:bg-neutral-dark/90 text-white px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Configurar en Calculadora
                    <ArrowRight size={14} />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
