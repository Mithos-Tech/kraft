/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface BannerHelpProps {
  setCurrentPage: (page: PageId) => void;
}

export default function BannerHelp({ setCurrentPage }: BannerHelpProps) {
  return (
    <section id="banner-help" className="bg-[#2a2938] text-white py-16 border-t border-b border-brand-900/20 relative overflow-hidden">
      {/* Decorative background grid subtle */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6">
            <span className="font-mono text-[9px] font-bold text-brand-300 tracking-widest uppercase block mb-2">
              SOPORTE Y COMPROMISO
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight uppercase">
              ESTAMOS AQUÍ PARA<br />
              <span className="text-brand-500">AYUDARTE EN CADA PASO.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-4 w-full">
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md lg:text-right">
              ¿Tienes dudas sobre liquidaciones impositivas o redacción de contratos? Nuestro equipo de consultores responde en tiempo real.
            </p>
            <button
              onClick={() => setCurrentPage('presupuesto')}
              className="font-sans font-semibold text-xs tracking-wider uppercase bg-brand-500 text-white hover:bg-brand-600 px-6 py-3.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer self-start lg:self-end"
            >
              Consultar Presupuesto
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
