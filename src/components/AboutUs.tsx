/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Eye, Search, Play, Users, ArrowUpRight } from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchVal, setSearchVal] = useState('');

  const tabs = [
    {
      num: '01/',
      title: 'ANALÍTICAS PROFUNDAS',
      desc: 'Obtén tableros completos sobre rotación voluntaria, costos promedio por contratación y efectividad del onboarding en tiempo real.'
    },
    {
      num: '02/',
      title: 'ESTRATEGIAS INTELIGENTES',
      desc: 'Diseñamos planes de compensación basados en analítica de mercado local y regional, garantizando ofertas atractivas y competitivas.'
    },
    {
      num: '03/',
      title: 'CRECIMIENTO INFORMADO',
      desc: 'Escala tu estructura interna mediante auditorías de brecha de habilidades, asegurando que cada ascenso esté respaldado por datos objetivos.'
    }
  ];

  return (
    <div className="bg-white">
      <section id="about-us" className="bg-[#fafafc] py-24 border-b border-slate-100 relative overflow-hidden rounded-b-[40px] md:rounded-b-[56px] lg:rounded-b-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Grid containing 2 columns starting at the exact same horizontal position */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Unified Header + Vision & Mission Cards */}
            <div className="space-y-12">
              {/* Header with Title, Subtitle, and Phrase */}
              <div className="max-w-3xl">
                <span className="font-mono text-[10px] font-bold text-brand-500 tracking-widest uppercase block mb-3">
                  SOBRE KRAFT
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-dark tracking-tight uppercase leading-tight mb-4">
                  LIDERANDO EL CAMINO<br />
                  <span className="text-brand-500">DEL TALENTO HUMANO</span>
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Fusionamos tecnología moderna con asesoría premium para proveer un servicio integral que protege tu negocio y deleita a tus colaboradores.
                </p>
              </div>

              {/* Vision & Mission Cards stacked vertically */}
              <div className="space-y-6">
                {/* Vision Card - Background #F2F2F2 */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="bg-[#F2F2F2] hover:bg-[#e9e9e9] p-8 rounded-3xl shadow-sm border border-slate-300/30 flex gap-5 items-start transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-neutral-dark tracking-wider uppercase mb-1.5">
                      NUESTRA VISIÓN
                    </h3>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed">
                      Convertir la administración de capital humano en una ventaja competitiva ágil y digitalizada para cada uno de nuestros socios comerciales.
                    </p>
                  </div>
                </motion.div>

                {/* Mission Card - Background #AAAACC */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="bg-[#AAAACC] hover:bg-[#9c9cbc] p-8 rounded-3xl shadow-sm border border-brand-400/30 flex gap-5 items-start transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/60 text-brand-950 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-brand-950 tracking-wider uppercase mb-1.5">
                      NUESTRA MISIÓN
                    </h3>
                    <p className="font-sans text-xs text-brand-950/90 leading-relaxed">
                      Blindar jurídicamente a las empresas de tecnología, optimizar sus procesos de nómina e impulsar un ambiente de trabajo excepcional.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Purple Interactive Cards Widget (Accordion) */}
            <div className="w-full lg:sticky lg:top-8">
              {/* Elegant Purple Panel */}
              <div className="bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white p-8 rounded-[36px] shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  {/* Fake search input inside gradient card */}
                  <div className="relative mb-8">
                    <input
                      type="text"
                      placeholder="Escribe y presiona enter..."
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      className="w-full bg-white/10 text-white placeholder-white/50 text-xs px-4 py-3 rounded-xl border border-white/15 focus:outline-none focus:bg-white/15 transition-all pr-10"
                    />
                    <Search size={14} className="absolute right-3.5 top-3.5 text-white/60" />
                  </div>

                  {/* Expandable Tabs List 01, 02, 03 */}
                  <div className="space-y-4">
                    {tabs.map((tab, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          activeTab === idx
                            ? 'bg-white text-neutral-dark border-white shadow-md'
                            : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <span className={`font-mono text-xs font-bold ${activeTab === idx ? 'text-brand-500' : 'text-white/60'}`}>
                              {tab.num}
                            </span>
                            <h4 className="font-display font-extrabold text-xs tracking-wider uppercase">
                              {tab.title}
                            </h4>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            activeTab === idx ? 'bg-brand-500 text-white border-brand-500' : 'border-white/20'
                          }`}>
                            <ArrowUpRight size={10} />
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {activeTab === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="font-sans text-xs text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-3">
                                {tab.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive circular play row underneath */}
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-white text-brand-500 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                      <Play size={12} fill="currentColor" className="ml-0.5" />
                    </button>
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/80">TALENTO EN ACCIÓN</span>
                  </div>
                  <span className="font-sans text-[10px] text-white/50">Módulo de demostración</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
