/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sliders, Users, Calculator, CheckCircle2, ChevronRight, RefreshCw, Send, HelpCircle } from 'lucide-react';
import { SERVICES } from '../data';

interface BudgetPlannerProps {
  shouldScrollToContact?: boolean;
}

export default function BudgetPlanner({ shouldScrollToContact }: BudgetPlannerProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(['talent-acquisition', 'payroll-management']);
  const [employeeCount, setEmployeeCount] = useState<number>(25);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (shouldScrollToContact) {
      // Small timeout to allow transition animation to finish nicely
      const timer = setTimeout(() => {
        const element = document.getElementById('contact-step-container');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [shouldScrollToContact]);

  // Toggle selected service module
  const handleToggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Calculates pricing math
  const getSubtotal = () => {
    return SERVICES.reduce((total, s) => {
      if (selectedServices.includes(s.id)) {
        return total + s.basePrice;
      }
      return total;
    }, 0);
  };

  // Discount variables
  const isBundle = selectedServices.length >= 3;
  const bundleDiscountVal = isBundle ? 0.15 : 0; // 15% discount for 3+ modules
  const billingDiscountVal = billing === 'yearly' ? 0.20 : 0; // 20% yearly discount

  const calculateTotal = () => {
    const subtotal = getSubtotal();
    let totalPerEmployee = subtotal;

    // Apply bundle discount if applicable
    totalPerEmployee = totalPerEmployee * (1 - bundleDiscountVal);

    // Apply billing cycle discount
    totalPerEmployee = totalPerEmployee * (1 - billingDiscountVal);

    return Math.round(totalPerEmployee * employeeCount);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !company || !email || selectedServices.length === 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setSelectedServices(['talent-acquisition', 'payroll-management']);
    setEmployeeCount(25);
    setBilling('monthly');
    setName('');
    setCompany('');
    setEmail('');
    setSubmitted(false);
  };

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
                KRAFT INTERACTIVE TOOLS
              </span>
              
              {/* Hero Main Heading */}
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-neutral-dark tracking-tight uppercase leading-[1.1]">
                CALCULADORA DE<br />
                <span className="text-brand-500">PRESUPUESTO HR</span>
              </h1>

              {/* Description Paragraph */}
              <p className="font-sans text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
                Diseña una cotización estimada de servicios de Recursos Humanos al instante. Activa módulos, ajusta el volumen de tus colaboradores y descarga tu presupuesto personalizado.
              </p>

              {/* Minimalist Subpage Info Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-slate-200/50">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-dark bg-slate-100 rounded-md px-2 py-0.5">Est.</span>
                  <span className="font-sans text-[10px] text-slate-400 font-semibold tracking-wide uppercase">Cotización en Tiempo Real</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neutral-dark bg-slate-100 rounded-md px-2 py-0.5">PDF</span>
                  <span className="font-sans text-[10px] text-slate-400 font-semibold tracking-wide uppercase">Exportación Habilitada</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium overlapping decorative mockup cards resembling main page style */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[280px]">
              
              {/* Decorative abstract color blob behind cards */}
              <div className="absolute top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6D4DE6]/8 blur-[64px] rounded-full z-0 pointer-events-none" />
              
              {/* Card pile layout */}
              <div className="relative w-full max-w-[340px] h-[250px] z-10 select-none">
                
                {/* Back Card: Beautiful discount indicator card (tilted negative) */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: -6, scale: 1 }}
                  transition={{ delay: 0.15 }}
                  className="absolute left-2 top-2 w-[210px] bg-brand-200 text-neutral-dark p-5 rounded-[22px] border border-brand-300/30 shadow-xl"
                >
                  <span className="font-mono text-[8px] text-slate-500 font-bold tracking-widest uppercase">DESCUENTO MULTI-MÓDULO</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-display font-black text-neutral-dark">-15%</span>
                    <span className="text-[10px] text-slate-500">ahorro</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal mt-1.5">
                    Contrata 3 o más módulos de servicio y obtén tarifas preferenciales.
                  </p>
                </motion.div>

                {/* Middle Card: Beautiful Interactive Calculator widget mockup (tilted positive) */}
                <motion.div 
                  initial={{ opacity: 0, rotate: 8, scale: 0.95 }}
                  animate={{ opacity: 1, rotate: 3, scale: 1 }}
                  transition={{ delay: 0.25 }}
                  className="absolute right-2 bottom-2 w-[240px] bg-white p-5 rounded-[24px] shadow-2xl border border-slate-100/80"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6D4DE6] animate-pulse" />
                      <span className="font-sans text-[10px] font-bold text-slate-400 tracking-wider uppercase">Simulador de Costos</span>
                    </div>
                    <span className="font-mono text-[9px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">Automático</span>
                  </div>
                  
                  {/* Sliders preview inside mockup */}
                  <div className="space-y-3.5">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="font-sans text-slate-400 font-semibold">Colaboradores</span>
                        <span className="font-mono font-bold text-neutral-dark">25</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-2/5 bg-[#6D4DE6] rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-2 rounded-xl">
                      <span className="font-sans text-[10px] text-slate-400">Total Mensual</span>
                      <span className="font-mono text-[10px] font-bold text-neutral-dark">$1,125 USD</span>
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

        {/* Dynamic Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Area (Interactive Settings Form) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Services Selection */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <span className="font-mono text-[9px] font-bold text-brand-500 tracking-wider uppercase block mb-1">
                PASO 1 DE 3
              </span>
              <h3 className="font-display font-extrabold text-lg text-neutral-dark tracking-tight uppercase mb-6 flex items-center gap-2">
                <Calculator size={18} className="text-brand-500" />
                SELECCIONA LOS MÓDULOS REQUERIDOS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((service) => {
                  const isChecked = selectedServices.includes(service.id);

                  return (
                    <div
                      key={service.id}
                      onClick={() => handleToggleService(service.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 relative group ${
                        isChecked
                          ? 'bg-brand-50/40 border-brand-500 shadow-sm'
                          : 'bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-brand-500 border-brand-500 text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>

                      <div>
                        <span className="font-display font-extrabold text-xs tracking-wide text-neutral-dark uppercase block group-hover:text-brand-600 transition-colors">
                          {service.title}
                        </span>
                        <span className="font-sans text-[11px] text-slate-400 block mt-1">
                          {service.description}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-brand-500 mt-2 block">
                          ${service.basePrice} / colaborador base
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Employee Count Slider */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <span className="font-mono text-[9px] font-bold text-brand-500 tracking-wider uppercase block mb-1">
                PASO 2 DE 3
              </span>
              <h3 className="font-display font-extrabold text-lg text-neutral-dark tracking-tight uppercase mb-6 flex items-center gap-2">
                <Users size={18} className="text-brand-500" />
                VOLUMEN DE TU PLANTILLA LABORAL
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100/60">
                  <span className="font-sans text-xs text-slate-500 font-medium">Colaboradores Activos</span>
                  <span className="font-display font-black text-2xl text-brand-600">
                    {employeeCount}
                  </span>
                </div>

                <div className="relative pt-4">
                  <input
                    type="range"
                    min="5"
                    max="300"
                    step="5"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2 font-semibold">
                    <span>5 EMPLEADOS</span>
                    <span>100</span>
                    <span>200</span>
                    <span>300+ EMPLEADOS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Send */}
            <div id="contact-step-container" className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-500">
              <span className="font-mono text-[9px] font-bold text-brand-500 tracking-wider uppercase block mb-1">
                PASO 3 DE 3
              </span>
              <h3 className="font-display font-extrabold text-lg text-neutral-dark tracking-tight uppercase mb-6 flex items-center gap-2">
                <Send size={18} className="text-brand-500" />
                DATOS CORPORATIVOS PARA SOLICITAR PROPUESTA
              </h3>

              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wide block">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wide block">Nombre de la Empresa</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Tech Solutions"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wide block">Correo Electrónico Corporativo</label>
                  <input
                    type="email"
                    required
                    placeholder="Ej. juan@techsolutions.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                  />
                </div>

                <div className="sm:col-span-2 pt-4">
                  <button
                    type="submit"
                    disabled={selectedServices.length === 0 || loading}
                    className="w-full font-sans font-bold text-xs tracking-wider uppercase bg-neutral-dark text-white hover:bg-neutral-dark/90 py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow hover:shadow-md disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        PROCESANDO COTIZACIÓN...
                      </>
                    ) : (
                      <>
                        ENVIAR SOLICITUD DE PROPUESTA
                        <ChevronRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Right Area (Live Price Breakdown Dashboard Card) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-[#7c5df6] via-[#6543e0] to-[#5230c4] text-white p-8 rounded-[36px] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <span className="font-mono text-[8px] font-bold text-brand-200 tracking-wider uppercase block mb-1">
                RESUMEN DE COTIZACIÓN EN TIEMPO REAL
              </span>
              <h3 className="font-display font-black text-xl uppercase tracking-tight mb-8">
                PRESUPUESTO KRAFT
              </h3>

              {/* Dynamic Price counter */}
              <div className="mb-8 border-b border-white/10 pb-6">
                <span className="font-sans text-[10px] text-brand-200 block uppercase font-semibold">VALOR MENSUAL ESTIMADO</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display font-black text-5xl tracking-tight">
                    ${selectedServices.length > 0 ? calculateTotal().toLocaleString() : '0'}
                  </span>
                  <span className="font-sans text-sm text-brand-200 font-medium">/ USD</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setBilling('monthly')}
                    className={`px-3 py-1 rounded-full font-mono text-[9px] uppercase font-bold tracking-wider cursor-pointer border ${
                      billing === 'monthly' ? 'bg-white text-neutral-dark border-white' : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    MENSUAL
                  </button>
                  <button
                    onClick={() => setBilling('yearly')}
                    className={`px-3 py-1 rounded-full font-mono text-[9px] uppercase font-bold tracking-wider cursor-pointer border ${
                      billing === 'yearly' ? 'bg-white text-neutral-dark border-white' : 'border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    ANUAL (-20%)
                  </button>
                </div>
              </div>

              {/* Modules breakdown */}
              <div className="space-y-4 mb-8">
                <span className="font-mono text-[9px] text-brand-200 tracking-wider uppercase block">MÓDULOS ACTIVOS</span>
                {selectedServices.length === 0 ? (
                  <p className="font-sans text-xs text-brand-200 italic">No has seleccionado ningún módulo.</p>
                ) : (
                  SERVICES.filter(s => selectedServices.includes(s.id)).map(s => (
                    <div key={s.id} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="font-display font-extrabold text-[11px] uppercase tracking-wide">{s.title}</span>
                      <span className="font-mono text-[10px]">${s.basePrice}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Discounts detail breakdown */}
              <div className="space-y-2 border-t border-white/10 pt-6">
                <div className="flex justify-between text-xs text-brand-200">
                  <span>Subtotal por Colaborador</span>
                  <span className="font-mono">${getSubtotal()}</span>
                </div>

                {isBundle && (
                  <div className="flex justify-between text-xs text-emerald-300 font-semibold">
                    <span>Descuento Paquete (3+ Módulos)</span>
                    <span className="font-mono">-15%</span>
                  </div>
                )}

                {billing === 'yearly' && (
                  <div className="flex justify-between text-xs text-emerald-300 font-semibold">
                    <span>Descuento Pago Anual</span>
                    <span className="font-mono">-20%</span>
                  </div>
                )}

                <div className="flex justify-between text-xs text-brand-200 pt-1 border-t border-white/5">
                  <span>Multiplicado por Colaboradores</span>
                  <span className="font-mono">x {employeeCount}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Success Submission Popup Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-dark/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white max-w-lg w-full p-8 rounded-[36px] shadow-2xl border border-slate-100 text-center relative overflow-hidden"
            >
              {/* Confetti overlay background simulation */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl" />

              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-sm">
                <CheckCircle2 size={32} />
              </div>

              <span className="font-mono text-[10px] font-bold text-brand-500 tracking-wider uppercase block mb-1">
                KRAFT PROPOSAL ENGINE
              </span>
              <h3 className="font-display font-black text-2xl text-neutral-dark tracking-tight uppercase mb-4">
                ¡COTIZACIÓN ENVIADA CON ÉXITO!
              </h3>
              
              <p className="font-sans text-xs text-slate-500 leading-relaxed mb-6">
                Hola, <strong>{name}</strong>. Hemos generado y enviado la propuesta detallada para <strong>{company}</strong> a tu correo corporativo <strong>{email}</strong>. Uno de nuestros consultores de Kraft te contactará dentro de las próximas 2 horas hábiles.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8 flex justify-between items-center text-left">
                <div>
                  <span className="font-mono text-[9px] text-slate-400 uppercase font-bold block">PRESUSPUESTO TOTAL ESTIMADO</span>
                  <span className="font-display font-black text-xl text-brand-600 mt-1 block">
                    ${calculateTotal().toLocaleString()} USD <span className="text-xs text-slate-400 font-semibold uppercase">/ {billing === 'monthly' ? 'MES' : 'ANUAL'}</span>
                  </span>
                </div>
                <span className="bg-brand-50 border border-brand-100 text-brand-600 font-mono text-[9px] font-black px-3 py-1 rounded">REF: K-2026</span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleReset}
                  className="w-full font-sans font-bold text-xs tracking-wider bg-slate-100 text-neutral-dark hover:bg-slate-200 py-3.5 rounded-xl transition-all uppercase cursor-pointer"
                >
                  Calcular Nueva Cotización
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
