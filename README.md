# Kraft • Soluciones y Consultoría Integral de Recursos Humanos

> **Kraft** es una plataforma web premium de última generación diseñada para la gestión integral de Recursos Humanos en Latinoamérica. Con un enfoque estético inspirado en los diseños modernos de Framer, ofrece una experiencia de usuario fluida, interactiva, responsiva y altamente optimizada para dispositivos móviles y de escritorio.

---

## 🎨 Concepto de Diseño y Experiencia

El diseño del sitio web gira en torno a la sofisticación, el uso intencional del espacio negativo y una tipografía nítida para crear una atmósfera profesional, moderna y pulida:
- **Tema Dual Elegante**: Un fondo claro y luminoso con acentos de **Lila Intenso (`#6D4DE6`)**, combinado con una paleta de grises profundos para contrastes de alta gama.
- **Micro-animaciones Fluidas**: Transiciones suaves y efectos de hover refinados potenciados por `motion` para guiar al usuario sin sobrecargar la vista.
- **Tipografía de Alta Gama**: Selección tipográfica cuidada con Ysabeau Infant para titulares de impacto y Roboto/JetBrains Mono para datos legibles.
- **Logo Oficial Integrado**: Consistencia de marca completa con la integración del logotipo oficial vectorial en el encabezado y pie de página al lado del distintivo *Kraft*.

---

## 🚀 Características Principales

### 1. Inicio Integrado (Framer-Style Home)
- **Hero Interactivo**: Con botones de llamado a la acción (CTA), una grilla sutil de wireframes y rostros dinámicos de colaboradores reales.
- **Atracción de Confianza (Trust Logos)**: Carrusel responsivo con logos de grandes marcas que confían en las soluciones de Kraft.
- **¿Por qué Kraft?**: Una cuadrícula interactiva con pilares clave de servicio (Tecnología, Cumplimiento Legal y Escalar Compañías).
- **Sobre Nosotros y Testimonios**: Sección de confianza y opiniones reales de directores de recursos humanos.
- **Artículos y Novedades**: Feed dinámico de blogs de la industria.

### 2. Detalle de Servicios Activos
- Detalle en profundidad de los **4 módulos principales de servicio**:
  1. *Atracción de Talento de Élite (Talent Acquisition)*
  2. *Onboarding y Cultura Digital*
  3. *Gestión de Nómina Automatizada (Payroll)*
  4. *Cumplimiento de Leyes Laborales en Latinoamérica (Compliance)*
- Desglose con especificaciones técnicas, alcances legales y operacionales de cada módulo.

### 3. Calculadora de Presupuesto HR Interactiva
- **Planificador de Presupuestos en Tiempo Real**: Ajuste dinámico de colaboradores mediante controles deslizantes y selección modular de servicios.
- **Simulador Inteligente**: Aplicación de descuentos multi-módulo (15% de ahorro al elegir 3 o más servicios) y opciones de facturación mensual/anual.
- **Generación de Cotización de Alta Calidad**: Envío de propuestas directamente desde la interfaz con validaciones inmediatas.
- **Navegación Inteligente**: Enlace interactivo y responsivo desde el botón "Contacto" del Header que traslada al usuario directamente al formulario de cotización en esta sección.

---

## 🛠️ Stack Tecnológico

- **Framework**: React 18+ (con TypeScript)
- **Compilador**: Vite
- **Estilos**: Tailwind CSS
- **Animaciones**: `motion` (de `motion/react`)
- **Iconos**: `lucide-react`
- **Enrutamiento**: Manejo de estado de navegación suave y transiciones animadas entre vistas.

---

## 📁 Estructura del Proyecto

```bash
/
├── public/                 # Archivos estáticos y activos globales
├── src/
│   ├── components/         # Componentes modulares y reutilizables
│   │   ├── AboutUs.tsx     # Quiénes somos
│   │   ├── Articles.tsx    # Sección de noticias/blog
│   │   ├── BannerHelp.tsx  # Banner de soporte y enganche
│   │   ├── Footer.tsx      # Pie de página con reloj en tiempo real y newsletter
│   │   ├── Header.tsx      # Barra de navegación flotante e inteligente
│   │   ├── Hero.tsx        # Presentación principal con diseño premium
│   │   ├── Pricing.tsx     # Tabla de tarifas de módulos
│   │   ├── Services.tsx    # Resumen de módulos de servicio
│   │   ├── Testimonials.tsx# Reseñas de clientes
│   │   └── TrustLogos.tsx  # Marcas asociadas
│   ├── pages/
│   │   ├── BudgetPlanner.tsx      # Calculadora interactiva y contacto
│   │   └── ServicesDetailPage.tsx # Centro de competencias de servicios a detalle
│   ├── App.tsx             # Enrutador principal y controlador de vistas
│   ├── main.tsx            # Punto de entrada de la aplicación
│   ├── index.css           # Estilos globales y configuración del tema de Tailwind
│   └── types.ts            # Tipados estáticos y definiciones compartidas
├── index.html              # Archivo HTML raíz con optimización SEO y favicon
├── metadata.json           # Configuración de metadatos de la aplicación
└── package.json            # Scripts y dependencias del sistema
```

---

## 💻 Comandos de Desarrollo

Para poner en marcha la aplicación localmente o generar un build de producción, utilice los siguientes scripts de npm:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Ejecutar el linter de TypeScript
npm run lint

# Compilar para producción (compilación en dist/)
npm run build
```

---

## 🏷️ Créditos

Este proyecto de diseño y desarrollo interactivo ha sido creado para:

**Kraft** • Soluciones y Consultoría Integral de Recursos Humanos
*Diseñado y desarrollado en colaboración por **Inspyrio Studio**.*
