/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { UserCheck, TrendingUp, ShieldCheck, Star, ArrowUpRight } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: UserCheck,
      title: 'HR PERSONALIZADO',
      description: 'Adaptamos cada proceso de selección y cultura al ADN único de tu empresa.',
      tag: 'Personalizado'
    },
    {
      icon: TrendingUp,
      title: 'CRECIMIENTO',
      description: 'Estructuramos planes de carrera y compensaciones estratégicas para escalar.',
      tag: 'Estrategia'
    },
    {
      icon: ShieldCheck,
      title: 'MITIGACIÓN DE RIESGOS',
      description: 'Garantizamos auditorías permanentes y el pleno cumplimiento legal vigente.',
      tag: 'Legal'
    },
    {
      icon: Star,
      title: 'EQUIPO EXPERTO',
      description: 'Profesionales de HR con décadas de experiencia en mercados globales.',
      tag: 'Experiencia'
    }
  ];

  return (
    <section id="why-choose-us" className="bg-neutral-dark text-white py-20 relative overflow-hidden">
      {/* Absolute Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 border-b border-neutral-border pb-12">
          <div className="lg:col-span-6">
            <span className="font-mono text-[10px] font-bold text-brand-300 tracking-widest uppercase block mb-3">
              ¿POR QUÉ ELEGIRNOS?
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight uppercase">
              OPTIMIZANDO TALENTO,<br />
              <span className="text-brand-500">MAXIMIZANDO CRECIMIENTO</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md lg:text-right">
              Diseñamos soluciones ágiles de talento que eliminan la fricción operativa, garantizan el pleno cumplimiento fiscal y legal, y potencian la escalabilidad de tu equipo.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            
            // Define custom styles for each card index surgically
            let bgClass = '';
            let textTitleClass = '';
            let textDescClass = '';
            let tagClass = '';
            let iconBgClass = '';
            let borderClass = '';
            
            if (index === 0) {
              bgClass = 'bg-[#F2F2F2] hover:bg-[#e6e6e6]';
              textTitleClass = 'text-neutral-dark';
              textDescClass = 'text-slate-600';
              tagClass = 'text-neutral-dark bg-slate-300/60 border-slate-400/20';
              iconBgClass = 'bg-slate-300/50 text-slate-800 border-slate-300';
              borderClass = 'border-slate-300/30';
            } else if (index === 1) {
              bgClass = 'bg-[#E3E5F4] hover:bg-[#d5d7e7]';
              textTitleClass = 'text-neutral-dark';
              textDescClass = 'text-slate-700';
              tagClass = 'text-brand-900 bg-white/50 border-brand-300/50';
              iconBgClass = 'bg-white/60 text-brand-700 border-brand-300/50';
              borderClass = 'border-brand-300/30';
            } else if (index === 2) {
              bgClass = 'bg-[#AAAACC] hover:bg-[#9b9bbc]';
              textTitleClass = 'text-neutral-dark';
              textDescClass = 'text-brand-950';
              tagClass = 'text-brand-950 bg-white/30 border-white/30';
              iconBgClass = 'bg-white/40 text-brand-900 border-white/30';
              borderClass = 'border-brand-400/30';
            } else {
              // Fourth card is the "lila intenso" bg-brand-500
              bgClass = 'bg-brand-500 hover:bg-brand-600';
              textTitleClass = 'text-white';
              textDescClass = 'text-brand-100';
              tagClass = 'text-white bg-white/15 border-white/20';
              iconBgClass = 'bg-white/10 text-white border-white/20';
              borderClass = 'border-brand-600/30';
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`${bgClass} transition-all p-8 rounded-3xl border ${borderClass} flex flex-col justify-between h-[340px] relative group cursor-pointer shadow-sm`}
              >
                {/* Arrow Top Right */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-neutral-border group-hover:bg-brand-500 text-slate-400 group-hover:text-white transition-all flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </div>

                <div>
                  {/* Icon Area */}
                  <div className={`w-11 h-11 rounded-2xl ${iconBgClass} border flex items-center justify-center mb-8`}>
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-bold text-xs tracking-wide ${textTitleClass} uppercase leading-snug mb-3`}>
                    {card.title}
                  </h3>
                </div>

                {/* Description & Tag */}
                <div>
                  <p className={`font-sans text-[11px] ${textDescClass} leading-relaxed mb-4`}>
                    {card.description}
                  </p>
                  <span className={`font-mono text-[8px] ${tagClass} px-2 py-0.5 rounded uppercase font-black tracking-wider border`}>
                    {card.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
