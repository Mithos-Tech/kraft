/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star, CheckCircle2, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  // Select exactly 4 outstanding testimonials for the automated vertical carousel
  const carouselTestimonials = TESTIMONIALS.slice(0, 4);

  return (
    <section 
      id="testimonials-section" 
      className="bg-white py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Precision vertical and horizontal wireframe grid background matching Nuestros Servicios */}
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
        
        {/* Soft elegant violet ambient glow on the left border matching the lila palette */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-brand-500/5 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sophisticated Title & Trust Metrics */}
          <div className="lg:col-span-5 space-y-6 lg:max-w-md">
            
            {/* Elegant tiny brand badge */}
            <span className="inline-flex items-center gap-2 text-brand-500 bg-brand-50 font-mono text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-brand-100">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Historias de Éxito
            </span>

            {/* Premium, high-contrast, uppercase title matching your color palette */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-neutral-dark tracking-tight uppercase leading-[1.05]">
              RESPALDADO POR<br />
              COMPAÑÍAS QUE<br />
              <span className="text-brand-500">MUEVEN LATAM</span>
            </h2>

            {/* Sleek, readable description */}
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Reduzca riesgos, gane visibilidad y automatice sus procesos para que su equipo de Recursos Humanos se concentre exclusivamente en el crecimiento sostenible.
            </p>

            {/* Framer-style Trust Metrics List */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="font-display font-black text-3xl text-neutral-dark block leading-none">
                  98.4%
                </span>
                <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                  Índice de Retención
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-display font-black text-3xl text-neutral-dark block leading-none">
                  +80
                </span>
                <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                  Empresas Activas
                </span>
              </div>
            </div>

            {/* Quick security assurance bullet */}
            <div className="bg-brand-50/50 border border-brand-100/60 p-4 rounded-2xl flex items-start gap-3 mt-4">
              <div className="p-1 rounded-lg bg-white shadow-sm border border-brand-100 text-brand-500 shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Todas las opiniones mostradas representan a directores de finanzas y operaciones reales auditados periódicamente bajo cumplimiento estricto.
              </p>
            </div>

          </div>

          {/* Right Column: Sophisticated Vertical Carousel with Fade Masks */}
          <div className="lg:col-span-7 relative h-[480px] sm:h-[560px] w-full overflow-hidden rounded-[32px] border border-slate-100 bg-[#fbfbfe]">
            
            {/* Top and Bottom gradient masks to smoothly fade cards in and out of the carousel */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#fbfbfe] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#fbfbfe] to-transparent z-20 pointer-events-none" />

            {/* Infinite vertical scrolling marquee wrapper */}
            <div className="h-full py-4 overflow-hidden relative">
              <div className="flex flex-col gap-5 animate-marquee-y hover:play-state-paused">
                
                {/* First set of 4 cards */}
                {carouselTestimonials.map((testimonial) => (
                  <div
                    key={`carousel-1-${testimonial.id}`}
                    className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-300 mx-4 shrink-0 group relative"
                  >
                    {/* Header Row: User Info and custom lila Quote */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatarUrl}
                          alt={testimonial.clientName}
                          className="w-10 h-10 rounded-full object-cover border border-slate-100 group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-sans font-bold text-xs sm:text-sm text-neutral-dark block leading-tight">
                            {testimonial.clientName}
                          </h4>
                          <p className="font-sans text-[11px] text-slate-400">
                            {testimonial.clientRole}
                          </p>
                        </div>
                      </div>

                      {/* Brand Lila Quote Icon with smooth hover opacity */}
                      <div className="text-brand-500/80 group-hover:text-brand-500 transition-colors duration-300">
                        <Quote size={20} fill="currentColor" className="opacity-15 group-hover:opacity-25" />
                      </div>
                    </div>

                    {/* Testimonial Quote text */}
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Micro star ratings & validation flag */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50/80">
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                        ))}
                      </div>
                      <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-emerald-500" /> Cliente Verificado
                      </span>
                    </div>
                  </div>
                ))}

                {/* Second set of identical cards to enable flawless infinite vertical scroll without skipping */}
                {carouselTestimonials.map((testimonial) => (
                  <div
                    key={`carousel-2-${testimonial.id}`}
                    className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-300 mx-4 shrink-0 group relative"
                  >
                    {/* Header Row: User Info and custom lila Quote */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatarUrl}
                          alt={testimonial.clientName}
                          className="w-10 h-10 rounded-full object-cover border border-slate-100 group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-sans font-bold text-xs sm:text-sm text-neutral-dark block leading-tight">
                            {testimonial.clientName}
                          </h4>
                          <p className="font-sans text-[11px] text-slate-400">
                            {testimonial.clientRole}
                          </p>
                        </div>
                      </div>

                      <div className="text-brand-500/80 group-hover:text-brand-500 transition-colors duration-300">
                        <Quote size={20} fill="currentColor" className="opacity-15 group-hover:opacity-25" />
                      </div>
                    </div>

                    {/* Testimonial Quote text */}
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Micro star ratings & validation flag */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50/80">
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                        ))}
                      </div>
                      <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-emerald-500" /> Cliente Verificado
                      </span>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
