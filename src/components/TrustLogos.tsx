/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Award, Layers, Cpu, Compass } from 'lucide-react';

export default function TrustLogos() {
  const logos = [
    { icon: ShieldCheck, name: 'SECURA' },
    { icon: Award, name: 'VORTEX' },
    { icon: Layers, name: 'STACK' },
    { icon: Cpu, name: 'INTELLIA' },
    { icon: Compass, name: 'APEX' },
  ];

  return (
    <section id="trust-logos" className="bg-neutral-dark py-8 sm:py-10 rounded-t-[32px] sm:rounded-t-[48px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo slider structure with smooth loop marquee effect */}
        <div className="relative flex overflow-x-hidden w-full select-none">
          <div className="flex animate-marquee whitespace-nowrap py-2 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer mr-16"
              >
                <logo.icon size={22} className="text-brand-300 stroke-[1.5]" />
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap py-2 shrink-0" aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer mr-16"
              >
                <logo.icon size={22} className="text-brand-300 stroke-[1.5]" />
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind utility styles for custom keyframes marquee with a single forward motion */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
