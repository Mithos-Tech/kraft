/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, Testimonial, PricingPlan, BlogArticle } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'talent-acquisition',
    title: 'Adquisición de Talento',
    description: 'Encontramos y contratamos a los mejores profesionales para tu equipo mediante estrategias modernas de reclutamiento.',
    longDescription: 'Nuestra metodología de búsqueda combina inteligencia de mercado, bases de datos premium y evaluaciones técnicas detalladas para asegurar que cada nueva contratación se alinee perfectamente con la cultura y objetivos de tu empresa.',
    iconName: 'UserPlus',
    tags: ['Reclutamiento', 'Headhunting', 'Contratación'],
    basePrice: 120,
    benefits: [
      'Acceso a redes de talento exclusivas',
      'Filtrado y pre-entrevistas técnicas completas',
      'Garantía de reemplazo de 90 días',
      'Reducción del tiempo de contratación en un 40%'
    ]
  },
  {
    id: 'employee-onboarding',
    title: 'Onboarding de Empleados',
    description: 'Procesos de inducción automatizados y atractivos que elevan la retención desde el primer día.',
    longDescription: 'Diseñamos y ejecutamos planes de onboarding que garantizan una transición suave para los nuevos ingresos, acelerando su curva de aprendizaje y fomentando un alto nivel de compromiso con la organización.',
    iconName: 'Briefcase',
    tags: ['Inducción', 'Cultura', 'Capacitación'],
    basePrice: 85,
    benefits: [
      'Flujos de trabajo interactivos digitales',
      'Kits de bienvenida y manuales personalizados',
      'Seguimiento automático de hitos de 30, 60 y 90 días',
      'Incremento comprobable del 30% en retención de talento'
    ]
  },
  {
    id: 'payroll-management',
    title: 'Gestión de Nóminas',
    description: 'Liquidación de sueldos, impuestos y beneficios corporativos sin fricciones ni errores.',
    longDescription: 'Administramos la nómina y los beneficios sociales de tus empleados de manera puntual y en estricto cumplimiento con la legislación fiscal local, permitiéndote enfocarte en el crecimiento estratégico.',
    iconName: 'CreditCard',
    tags: ['Finanzas', 'Cumplimiento', 'Nómina'],
    basePrice: 150,
    benefits: [
      'Cálculo automatizado de haberes y retenciones',
      'Gestión integral de aportes previsionales y de salud',
      'Plataforma de autoservicio para recibos de sueldo',
      'Asesoría en compensaciones y beneficios flexibles'
    ]
  },
  {
    id: 'risk-mitigation',
    title: 'Mitigación de Riesgos',
    description: 'Auditorías laborales constantes y asesoramiento legal preventivo ante contingencias.',
    longDescription: 'Protegemos tu empresa de multas y demandas a través de auditorías periódicas, contratos blindados y asesoramiento permanente sobre cambios regulatorios y buenas prácticas de relaciones laborales.',
    iconName: 'ShieldAlert',
    tags: ['Legal', 'Auditoría', 'Cumplimiento'],
    basePrice: 180,
    benefits: [
      'Auditoría completa de contratos y legajos existentes',
      'Protocolos de higiene, seguridad y bienestar laboral',
      'Defensa activa y mediación en conflictos laborales',
      'Actualización mensual ante normativas nacionales'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'La implementación de Kraft transformó radicalmente nuestra cultura. Automatizamos el onboarding y la satisfacción laboral subió a niveles récord en solo tres meses.',
    clientName: 'Samuel Hudson',
    clientRole: 'Director de Operaciones en TechCorp',
    rating: 5,
    avatarUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_01_w5bpyn.webp'
  },
  {
    id: 'test-2',
    quote: 'Gracias a su servicio de gestión de nómina, eliminamos todos los errores mensuales y liberamos más del 50% del tiempo de nuestro equipo interno de finanzas.',
    clientName: 'Elena Rostova',
    clientRole: 'VP de Recursos Humanos en InnovaGroup',
    rating: 5,
    avatarUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_02_pggvrr.webp'
  },
  {
    id: 'test-3',
    quote: 'La mitigación de riesgos de Kraft nos dio la seguridad jurídica que necesitábamos para expandirnos a nivel regional sin preocupaciones fiscales o laborales.',
    clientName: 'Carlos Mendoza',
    clientRole: 'CEO de Apex Logistics',
    rating: 5,
    avatarUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_03_rsr6cq.webp'
  },
  {
    id: 'test-4',
    quote: 'El reclutamiento de talentos clave solía tomarnos meses. Con el equipo de Kraft, cubrimos posiciones directivas críticas en menos de 20 días con un ajuste cultural impecable.',
    clientName: 'Mariana Silva',
    clientRole: 'HR Business Partner en Quantum Finance',
    rating: 5,
    avatarUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784149522/avatar_04_galka5.webp'
  },
  {
    id: 'test-5',
    quote: 'Espectacular nivel de servicio. Los dashboards, reportes en tiempo real y asesoría legal personalizada nos han permitido operar con 100% de cumplimiento normativo.',
    clientName: 'Andrés Belmonte',
    clientRole: 'Director de Finanzas en Soluciones Altius',
    rating: 5,
    avatarUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_01_w5bpyn.webp'
  },
  {
    id: 'test-6',
    quote: 'Lo que más destaco de Kraft es su adaptabilidad. Entienden los retos específicos de la escalabilidad de empresas modernas en Latinoamérica y diseñan soluciones a la medida.',
    clientName: 'Sofía Valenzuela',
    clientRole: 'Chief People Officer en KriptoPay',
    rating: 5,
    avatarUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784149521/avatar_02_pggvrr.webp'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-hr',
    name: 'BASIC HR',
    price: 25,
    billing: 'MES',
    description: 'Ideal para startups y pequeñas empresas que buscan formalizar sus procesos de capital humano de manera sencilla.',
    isPopular: false,
    theme: 'light',
    features: [
      'Gestión de Contratos Básicos',
      'Onboarding Digital Standard',
      'Soporte Técnico por Email',
      'Portal del Empleado Básico'
    ],
    includeFeatures: [
      'Plantillas de contrato pre-aprobadas',
      'Directorio de empleados digital',
      'Soporte con respuesta en 48hs'
    ]
  },
  {
    id: 'complete-hr',
    name: 'COMPLETE HR',
    price: 56,
    billing: 'MES',
    description: 'Nuestra solución insignia. Cobertura total de reclutamiento, nómina y desarrollo de personal a tu medida.',
    isPopular: true,
    badge: 'MÁS POPULAR',
    theme: 'purple',
    features: [
      'Reclutamiento Activo Mensual',
      'Gestión de Nómina Completa',
      'Asesoría Legal de Cumplimiento',
      'Soporte Prioritario 24/7',
      'Evaluaciones de Desempeño'
    ],
    includeFeatures: [
      'Hasta 3 búsquedas activas simultáneas',
      'Liquidación impositiva y de beneficios',
      'Gestor de cuenta exclusivo asignado',
      'Reportes de satisfacción trimestrales'
    ]
  },
  {
    id: 'hr-compliance',
    name: 'HR COMPLIANCE',
    price: 36,
    billing: 'MES',
    description: 'Enfocado 100% en blindar jurídicamente a tu empresa, auditorías preventivas y cumplimiento de normativas vigentes.',
    isPopular: false,
    theme: 'dark',
    features: [
      'Auditoría Laboral Preventiva',
      'Defensa ante Entes Reguladores',
      'Actualización Legal Inmediata',
      'Soporte Legal de Emergencia'
    ],
    includeFeatures: [
      'Auditorías cuatrimestrales de procesos',
      'Revisión y firma de contratos especiales',
      'Canal de denuncias anónimo integrado'
    ]
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'art-1',
    category: 'MEJORES PRÁCTICAS PARA HR',
    title: 'Cómo estructurar un onboarding híbrido altamente efectivo',
    date: '17 de Febrero, 2026',
    description: 'Claves para lograr que los nuevos empleados se sientan integrados y productivos desde cualquier lugar del mundo.',
    imageUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784319280/Hybrid_employee_onboarding_h40k7e.webp',
    readTime: '5 min de lectura'
  },
  {
    id: 'art-2',
    category: 'ALTO RENDIMIENTO',
    title: 'Estrategias de retención de talento en la era de la flexibilidad',
    date: '17 de Febrero, 2026',
    description: 'Analizamos los incentivos más valorados y cómo implementarlos sin afectar el presupuesto de tu empresa.',
    imageUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784319280/Professionals_collaborating_zjgzzp.webp',
    readTime: '6 min de lectura'
  },
  {
    id: 'art-3',
    category: 'GESTIÓN DE ONBOARDING',
    title: 'Mitigación de riesgos laborales en contratos remotos',
    date: '17 de Febrero, 2026',
    description: 'Evita contingencias legales adaptando tus contratos de trabajo a las normativas de empleo distribuido.',
    imageUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784319279/Occupational_risk_mitigation_akkahw.webp',
    readTime: '4 min de lectura'
  },
  {
    id: 'art-4',
    category: 'ADMINISTRACIÓN DE PERSONAL',
    title: 'El impacto de la inteligencia artificial en la gestión de personas',
    date: '17 de Febrero, 2026',
    description: 'Cómo las herramientas automatizadas potencian la labor humana sin perder la empatía ni la cercanía.',
    imageUrl: 'https://res.cloudinary.com/chlgeobm/image/upload/v1784319280/AI_impact_on_management_hpwkeh.webp',
    readTime: '8 min de lectura'
  }
];
