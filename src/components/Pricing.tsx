/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PageId } from '../types';

interface PricingProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Pricing({ setCurrentPage }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Calculates price with a 20% discount for yearly billing
  const getPrice = (basePrice: number) => {
    if (billingCycle === 'yearly') {
      return Math.round(basePrice * 0.8);
    }
    return basePrice;
  };

  return (
    <div className="bg-white">
      <section 
        id="pricing-section" 
        className="bg-[#fafafc] py-24 rounded-[40px] md:rounded-[56px] lg:rounded-[72px] relative overflow-hidden border-b border-slate-100/80 w-full"
      >
        {/* Background Grid Overlay */}
        <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 border-b border-slate-200 pb-12">
          <div className="lg:col-span-6">
            <span className="font-mono text-[10px] font-bold text-brand-500 tracking-widest uppercase block mb-3">
              PRECIOS TRANSPARENTES
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-dark tracking-tight uppercase leading-tight">
              EL MEJOR PRECIO PARA<br />
              <span className="text-brand-500">EL MEJOR SERVICIO</span>
            </h2>
            
            {/* Quick Pill Categories as in the image */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="font-mono text-[8px] font-bold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full uppercase">PRECIOS</span>
              <span className="font-mono text-[8px] font-bold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full uppercase">DESTACADO</span>
              <span className="font-mono text-[8px] font-bold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full uppercase">ACCESIBLE</span>
            </div>
          </div>
          
          {/* Dynamic Billing Switcher */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-4 w-full">
            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed lg:text-right">
              Elige el esquema de facturación que mejor se adapte al flujo de fondos de tu corporación.
            </p>
            <div className="bg-slate-100/80 p-1 rounded-full border border-slate-200 inline-flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full font-sans text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-neutral-dark shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                MENSUAL
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-full font-sans text-[11px] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                ANUAL
                <span className="bg-emerald-400 text-neutral-dark text-[8px] px-1.5 py-0.5 rounded-full font-black animate-pulse">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isPurple = plan.theme === 'purple';
            const isDark = plan.theme === 'dark';

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.99, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-[36px] border p-8 flex flex-col justify-between relative transition-all ${
                  isPurple
                    ? 'bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white border-brand-500 shadow-xl md:-translate-y-4 scale-105 z-10'
                    : isDark
                    ? 'bg-neutral-dark text-white border-neutral-border shadow-md'
                    : 'bg-white text-neutral-dark border-slate-100 shadow-sm'
                }`}
              >
                {/* Popular Pill */}
                {isPurple && plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-400 text-neutral-dark font-mono text-[9px] font-black px-4 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1">
                    <Sparkles size={10} className="animate-spin" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Category Plan Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${
                      isPurple ? 'text-brand-200' : isDark ? 'text-brand-300' : 'text-slate-400'
                    }`}>
                      {plan.name}
                    </span>
                  </div>

                  {/* Pricing Number Row */}
                  <div className="flex items-baseline gap-1 mb-4 border-b pb-6 border-slate-100/10">
                    <span className="font-display font-black text-5xl tracking-tighter">
                      ${getPrice(plan.price)}
                    </span>
                    <span className={`font-sans text-xs font-semibold ${
                      isPurple || isDark ? 'text-slate-300' : 'text-slate-400'
                    }`}>
                      / {plan.billing}
                    </span>
                  </div>

                  {/* Plan description */}
                  <p className={`font-sans text-xs leading-relaxed mb-8 ${
                    isPurple || isDark ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => setCurrentPage('presupuesto')}
                    className={`w-full font-sans font-bold text-xs tracking-wider uppercase py-4 rounded-2xl flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98] mb-8 ${
                      isPurple
                        ? 'bg-white text-brand-500 hover:bg-slate-50'
                        : isDark
                        ? 'bg-brand-500 hover:bg-brand-600 text-white'
                        : 'bg-slate-100 hover:bg-brand-50 text-neutral-dark hover:text-brand-500 border border-slate-200/50 hover:border-brand-100'
                    }`}
                  >
                    CONTRATAR PLAN
                    <ArrowUpRight size={14} />
                  </button>

                  {/* Bullet Checklist 1 */}
                  <div className="space-y-3 mb-8 border-b pb-8 border-slate-100/10">
                    <span className={`font-mono text-[8px] font-bold uppercase tracking-wider block ${
                      isPurple ? 'text-brand-200' : isDark ? 'text-brand-300' : 'text-slate-400'
                    }`}>
                      Características Principales:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2.5 items-center">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isPurple ? 'bg-white/20 text-white' : 'bg-brand-500/15 text-brand-400'
                        }`}>
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="font-sans text-xs font-medium leading-none">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Bullet Checklist 2 ("Include features") */}
                <div>
                  <span className={`font-mono text-[8px] font-bold uppercase tracking-wider block mb-3 ${
                    isPurple ? 'text-brand-200' : isDark ? 'text-brand-300' : 'text-slate-400'
                  }`}>
                    Incluye también:
                  </span>
                  <div className="space-y-2">
                    {plan.includeFeatures.map((incFeature, incIdx) => (
                      <div key={incIdx} className="flex gap-2.5 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <span className={`font-sans text-[11px] leading-snug ${
                          isPurple || isDark ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {incFeature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  </div>
);
}
