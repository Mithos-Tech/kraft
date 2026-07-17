/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, ArrowUpRight, Clock } from 'lucide-react';
import { BLOG_ARTICLES } from '../data';

export default function Articles() {
  return (
    <div className="bg-white">
      <section 
        id="articles-section" 
        className="bg-[#fafafc] py-24 rounded-[40px] md:rounded-[56px] lg:rounded-[72px] relative overflow-hidden border-b border-slate-100/80 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="font-mono text-[10px] font-bold text-brand-500 tracking-widest uppercase block mb-3">
              NUESTRO BLOG
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-dark tracking-tight uppercase leading-tight">
              MANTENTE INFORMADO,<br />
              <span className="text-brand-500">MANTENTE INSPIRADO</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md lg:text-right">
              Explora artículos redactados por nuestro equipo de consultores senior con metodologías prácticas e insights laborales de alto valor.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.99, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group flex flex-col justify-between h-[450px]"
            >
              {/* Image Area with category badge */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[8px] font-bold text-white bg-brand-500 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Date & Read time */}
                  <div className="flex items-center gap-4 text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span className="font-mono text-[9px] font-medium">{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span className="font-mono text-[9px] font-medium">{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-sm text-neutral-dark tracking-tight leading-snug line-clamp-2 uppercase group-hover:text-brand-500 transition-colors mb-2">
                    {article.title}
                  </h3>

                  {/* Short snippet */}
                  <p className="font-sans text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </div>

                {/* Bottom link button */}
                <div className="border-t border-slate-100 pt-4 mt-4">
                  <button className="flex items-center justify-between w-full font-sans font-bold text-[10px] tracking-wider uppercase text-neutral-dark hover:text-brand-500 transition-colors cursor-pointer">
                    Leer Artículo Completo
                    <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-brand-50 text-slate-400 group-hover:text-brand-500 flex items-center justify-center transition-colors">
                      <ArrowUpRight size={12} />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  </div>
);
}
