/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { PageId } from '../types';

interface HeroProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section id="hero" className="relative pt-24 pb-12 overflow-hidden bg-white">
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

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Giant Main Display Title with Integrated Portrait Image Card */}
        {/* We place the big presentation text KRAFT behind the central card */}
        <div className="relative w-full flex items-center justify-center my-6 py-6 min-h-[220px] sm:min-h-[280px] md:min-h-[310px] lg:min-h-[350px]">
          
          {/* Background presentation title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <h1 className="font-display font-black text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] xl:text-[13rem] tracking-[0.08em] text-[#1E1E24] leading-none uppercase text-center whitespace-nowrap">
              KRAFT
            </h1>
          </div>

          {/* Foreground portrait card physically overlapping exactly in the middle */}
          <div className="relative z-10 flex items-center justify-center flex-shrink-0">
            {/* Background shadow layer tilted */}
            <div className="absolute w-[130px] h-[160px] sm:w-[170px] sm:h-[210px] md:w-[200px] md:h-[250px] bg-brand-400 rounded-[28px] rotate-[-6deg] transform origin-center transition-transform duration-500 hover:rotate-[-8deg] shadow-lg" />
            
            {/* Front image tilted opposite */}
            <div className="relative w-[130px] h-[160px] sm:w-[170px] sm:h-[210px] md:w-[200px] md:h-[250px] bg-white rounded-[28px] shadow-2xl overflow-hidden border-4 border-white rotate-[3deg] transform origin-center transition-transform duration-500 hover:rotate-[1deg]">
              <img
                src="https://res.cloudinary.com/chlgeobm/image/upload/v1784319279/hero_xdjnhg.webp"
                alt="Líder de Recursos Humanos"
                className="w-full h-full object-cover scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* Action Buttons & Social Proof Row styled to match reference template asymmetry */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 mb-8 gap-4 border-b border-slate-100 pb-6">
          
          {/* Left Action Block - using the beautiful #ABABCC background color for the main CTA button */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentPage('servicios_detalle')}
                className="font-sans font-bold text-[11px] tracking-wider uppercase bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                Saber Más
                <ArrowRight size={12} />
              </button>
              <button
                onClick={() => setCurrentPage('presupuesto')}
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-brand-500 hover:bg-brand-50 transition-all cursor-pointer"
              >
                <Play size={10} fill="currentColor" className="ml-0.5 text-brand-500" />
              </button>
            </div>
            <p className="font-sans text-[11px] text-slate-400 font-semibold tracking-wide">
              Especialistas en nómina digital y asesoría estratégica.
            </p>
          </div>

          {/* Right Social Proof Block */}
          <div className="flex flex-col items-center sm:items-end gap-1">
            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              1,700+ CLIENTES FELICES
            </span>
            
            {/* Clustered avatar images */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img 
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_01_w5bpyn.webp" 
                  alt="Cliente Kraft" 
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_02_pggvrr.webp" 
                  alt="Cliente Kraft" 
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_03_rsr6cq.webp" 
                  alt="Cliente Kraft" 
                  referrerPolicy="no-referrer"
                />
                <img 
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1784149522/avatar_04_galka5.webp" 
                  alt="Cliente Kraft" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Bottom Cards - with exact user specified background colors (#F9F7FB and #E3E5F4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10">
          
          {/* Card 1 (Left): Background brand-200 (Lila Claro) */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="lg:col-span-3 bg-brand-200 hover:bg-brand-300/80 transition-colors p-6 rounded-[22px] border border-brand-300/30 flex flex-col justify-center items-center text-center h-56 shadow-sm"
          >
            <span className="font-display font-black text-5xl text-neutral-dark tracking-tighter">
              +56
            </span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1 block">
              Años de Experiencia
            </span>
          </motion.div>
 
          {/* Card 2 (Center - Featured): Background brand-400 (Lila Medio) */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="lg:col-span-5 bg-brand-400 hover:bg-brand-500/10 transition-colors p-6 rounded-[22px] border border-brand-500/20 flex flex-col sm:flex-row items-center gap-5 h-auto sm:h-56 shadow-sm"
          >
            {/* Soft abstract thumbnail - Refined size */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-white/40 shadow-inner group">
              <img
                src="https://res.cloudinary.com/chlgeobm/image/upload/v1784319279/textura_abstarcta_q5ei3z.webp"
                alt="Textura abstracta lavanda"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex-grow space-y-1.5 text-center sm:text-left">
              <span className="font-mono text-[8px] font-bold text-brand-900 tracking-widest uppercase block">
                05 DE FEBRERO, 2026
              </span>
              <h3 className="font-display font-bold text-xs text-neutral-dark tracking-wide uppercase leading-snug">
                HR Sin Fricciones,<br />Equipos Más Fuertes
              </h3>
              <p className="font-sans text-[11px] text-brand-950 leading-relaxed">
                Automatiza e integra los flujos operativos de nómina con un enfoque fiscal riguroso.
              </p>
            </div>
          </motion.div>
 
          {/* Card 3 (Right): Background brand-200 (Lila Claro) */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="lg:col-span-4 bg-brand-200 hover:bg-brand-300/80 transition-colors p-6 rounded-[22px] border border-brand-300/30 flex flex-col justify-between h-auto sm:h-56 shadow-sm"
          >
            <div className="flex gap-1.5 justify-center sm:justify-start">
              <span className="font-mono text-[8px] font-black text-brand-700 bg-white/50 border border-brand-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
                KRAFT
              </span>
              <span className="font-mono text-[8px] font-black text-brand-900 bg-white/50 border border-brand-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
                HR SOLUTIONS
              </span>
            </div>
 
            <p className="font-sans text-[11px] text-slate-700 leading-relaxed text-center sm:text-left my-2">
              Un enfoque analítico robusto diseñado para fundadores que escalan compañías y buscan máxima seguridad operativa.
            </p>
 
            {/* Pill-shaped landscape image at the bottom - Increased height & hover effect */}
            <div className="h-11 sm:h-12 w-full rounded-full overflow-hidden relative group/pill shadow-sm">
              <img
                src="https://res.cloudinary.com/chlgeobm/image/upload/v1784319279/reunion_de_equipo_eexvb3.webp"
                alt="Reunión del equipo Kraft"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/pill:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-dark/5 transition-opacity duration-300 group-hover/pill:opacity-0"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

