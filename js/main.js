/* ============================================================
   Feexio — Main JavaScript
   Dark mode, i18n (EN/ES), calculators, nav
   ============================================================ */

// ── Translations ──────────────────────────────────────────────
const i18n = {
  en: {
    nav_home: 'Home',
    nav_calculators: 'Calculators',
    nav_blog: 'Blog',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_badge: '8 Free Calculators',
    hero_h1_a: 'Calculate Fees,',
    hero_h1_b: 'Profit & Rates',
    hero_h1_c: 'Instantly',
    hero_sub: 'Free tools for freelancers, sellers & entrepreneurs. No sign-up, no fluff — just fast, accurate results.',
    hero_cta: 'Start Calculating',
    hero_cta2: 'Learn More',
    stat1: 'Calculators',
    stat2: 'Free Forever',
    stat3: 'No Login',
    ad_label: 'Advertisement',
    section_fee: 'Fee Calculators',
    section_fee_sub: 'Find out exactly how much you keep after platform fees.',
    section_business: 'Business & Profit',
    section_business_sub: 'Know your margins before you price anything.',
    section_freelance: 'Freelance Tools',
    section_freelance_sub: 'Set rates that actually cover your life.',

    // PayPal
    calc_paypal_title: 'PayPal Fee Calculator',
    calc_paypal_desc: 'Calculate the exact fee PayPal charges and how much you\'ll receive after processing a payment.',
    calc_paypal_amount: 'Transaction Amount ($)',
    calc_paypal_fee: 'PayPal Fee',
    calc_paypal_net: 'You Receive',

    // Stripe
    calc_stripe_title: 'Stripe Fee Calculator',
    calc_stripe_desc: 'Estimate Stripe processing fees instantly. Includes the standard 2.9% + $0.30 per transaction.',
    calc_stripe_amount: 'Transaction Amount ($)',
    calc_stripe_fee: 'Stripe Fee',
    calc_stripe_net: 'You Receive',

    // Fiverr
    calc_fiverr_title: 'Fiverr Fee Calculator',
    calc_fiverr_desc: 'Fiverr takes 20% of every service. See what you actually earn after their service fee is deducted.',
    calc_fiverr_price: 'Service Price ($)',
    calc_fiverr_fee: 'Fiverr Fee (20%)',
    calc_fiverr_net: 'Your Earnings',

    // Profit Margin
    calc_profit_title: 'Profit Margin Calculator',
    calc_profit_desc: 'Calculate gross profit and margin percentage from your cost and selling price.',
    calc_profit_cost: 'Cost Price ($)',
    calc_profit_sell: 'Selling Price ($)',
    calc_profit_profit: 'Profit',
    calc_profit_margin: 'Margin %',

    // Freelance Rate
    calc_rate_title: 'Freelance Rate Calculator',
    calc_rate_desc: 'Find the minimum hourly rate you need to charge to cover income goals and business expenses.',
    calc_rate_income: 'Desired Monthly Income ($)',
    calc_rate_expenses: 'Monthly Expenses ($)',
    calc_rate_hours: 'Billable Hours / Month',
    calc_rate_result: 'Suggested Hourly Rate',

    // SEO Content
    seo_title: 'Your Free Financial Toolkit',
    seo_intro: 'Feexio is a lightweight, fast financial utility platform built for people who work with money every day — freelancers, online sellers, small business owners, and entrepreneurs. Every calculator on this site is completely free, requires no account, and delivers instant results.',
    seo_b1_title: 'PayPal & Stripe Fee Calculators',
    seo_b1_text: 'Use our PayPal fee calculator and Stripe fee calculator to immediately see how much a payment processor takes from your transaction. Enter any amount and get the net received in real time — no guessing, no spreadsheets.',
    seo_b2_title: 'Profit Margin Calculator',
    seo_b2_text: 'Our profit margin calculator helps you understand the relationship between cost, revenue and profitability. Whether you\'re pricing a product or evaluating a deal, knowing your margin is non-negotiable.',
    seo_b3_title: 'Freelance Rate Calculator',
    seo_b3_text: 'The freelance rate calculator is designed for independent workers who want to charge what they\'re actually worth. Input your income target and expenses to find a sustainable hourly rate.',
    seo_b4_title: 'Fiverr Fee Calculator',
    seo_b4_text: 'Selling on Fiverr? Our Fiverr fee calculator shows you the real impact of the 20% service fee on your earnings. Price your gigs confidently knowing exactly what you\'ll take home.',

    // Footer
    footer_tagline: 'Fast, free financial calculators for freelancers and entrepreneurs.',
    footer_tools: 'Tools',
    footer_company: 'Company',
    footer_legal: 'Legal',
    footer_copy: '© 2025 Feexio. All rights reserved.',


    // Compound Interest
    calc_compound_title: 'Compound Interest Calculator',
    calc_compound_desc: 'Calculate how your investment grows over time with compound interest at different compounding frequencies.',
    calc_compound_principal: 'Principal Amount ($)',
    calc_compound_rate: 'Annual Interest Rate (%)',
    calc_compound_years: 'Term (years)',
    calc_compound_annual: 'Annual compounding',
    calc_compound_monthly: 'Monthly compounding',
    calc_compound_interest: 'Total Interest Earned',

    // Cost per Unit Volume
    calc_unitcost_title: 'Cost per Unit Volume',
    calc_unitcost_desc: 'Compare the true cost of materials or products by calculating price per cubic unit — ideal for bulk buying decisions.',
    calc_unitcost_length: 'Length',
    calc_unitcost_width: 'Width',
    calc_unitcost_height: 'Height',
    calc_unitcost_cost: 'Total Cost ($)',
    calc_unitcost_volume: 'Volume',
    calc_unitcost_result: 'Cost per cubic unit',

    // Project Quote
    calc_quote_title: 'Project Quote Calculator',
    calc_quote_desc: 'Estimate the total price for a client project based on your hourly rate, estimated hours, and an optional buffer for scope creep.',
    calc_quote_rate: 'Your Hourly Rate ($)',
    calc_quote_hours: 'Estimated Hours',
    calc_quote_buffer: 'Scope Buffer (%)',
    calc_quote_base: 'Base Price',
    calc_quote_total: 'Total Quote (with buffer)',

    // Savings Goal
    calc_savings_title: 'Savings Goal Calculator',
    calc_savings_desc: 'Find out how much you need to set aside each month to reach a financial goal — ideal for freelancers building an emergency fund or saving for equipment.',
    calc_savings_goal: 'Savings Goal ($)',
    calc_savings_saved: 'Already Saved ($)',
    calc_savings_months: 'Months to Reach Goal',
    calc_savings_remaining: 'Amount Remaining',
    calc_savings_monthly: 'Monthly Amount Needed',

    // About page
    about_label: 'ℹ️ About',
    about_hero_h1: 'Built for People Who Work for Themselves',
    about_hero_sub: 'Feexio exists because freelancers and independent sellers deserve instant, accurate financial clarity — without spreadsheets or sign-ups.',
    about_why_title: 'Why We Built Feexio',
    about_why_p1: 'Every freelancer has had this moment: you\'ve just agreed on a $500 project, sent the invoice via PayPal, and a few days later you notice your account shows $485.20. Where did $14.80 go? You knew there were fees — but what exactly are they, and how do you price your next job to account for them?',
    about_why_p2: 'That small moment of friction is exactly what Feexio was built to eliminate. We\'re a team of independent workers who got tired of opening spreadsheets or digging through help docs to answer simple money questions.',
    about_why_p3: 'Our tools are deliberately simple. No accounts, no paywalls, no onboarding. You arrive, you calculate, you leave smarter than when you came.',
    about_v1_title: 'Instant Results',
    about_v1_text: 'Every calculator updates in real time as you type. No submit button.',
    about_v2_title: 'Always Free',
    about_v2_text: 'All tools are free, forever. We monetize through ads, not paywalls.',
    about_v3_title: 'No Data Collected',
    about_v3_text: 'We don\'t store your inputs. Your numbers stay on your device.',
    about_v4_title: 'Bilingual',
    about_v4_text: 'Available in English and Spanish for a global freelance community.',
    about_tagline_visual: 'Calculate Fees, Profit & Rates Instantly',
    about_stat1: 'Free Calculators',
    about_stat2: 'Required Sign-ups',
    about_stat3: 'Languages',
    about_stat4: 'Free Calculations',
    about_mission_label: 'Our Mission',
    about_mission_title: 'Financial Clarity for Independent Workers',
    about_mission_p1: 'The global freelance economy is massive — and growing. But too many independent workers make financial decisions based on guesswork. We believe every freelancer, seller, and entrepreneur deserves the same clarity that big companies have — instant access to accurate numbers, without needing a finance team.',
    about_mission_p2: 'Feexio is our contribution to that world. Simple tools, accurate results, zero friction.',

    // Misc
    read_more: 'Read Article →',
    back_home: '← Back to Home',
    all_articles: 'All Articles',
  },

  es: {
    nav_home: 'Inicio',
    nav_calculators: 'Calculadoras',
    nav_blog: 'Blog',
    nav_about: 'Acerca de',
    nav_contact: 'Contacto',
    hero_badge: '8 Calculadoras Gratis',
    hero_h1_a: 'Calcula Comisiones,',
    hero_h1_b: 'Ganancias y Tarifas',
    hero_h1_c: 'Al Instante',
    hero_sub: 'Herramientas gratis para freelancers, vendedores y emprendedores. Sin registro, sin rodeos — solo resultados rápidos y precisos.',
    hero_cta: 'Empezar a Calcular',
    hero_cta2: 'Saber Más',
    stat1: 'Calculadoras',
    stat2: 'Siempre Gratis',
    stat3: 'Sin Login',
    ad_label: 'Publicidad',
    section_fee: 'Calculadoras de Comisiones',
    section_fee_sub: 'Descubre exactamente cuánto te quedas después de las comisiones de la plataforma.',
    section_business: 'Negocio y Ganancias',
    section_business_sub: 'Conoce tus márgenes antes de fijar cualquier precio.',
    section_freelance: 'Herramientas Freelance',
    section_freelance_sub: 'Establece tarifas que realmente cubran tu vida.',

    calc_paypal_title: 'Calculadora de Comisión PayPal',
    calc_paypal_desc: 'Calcula exactamente la comisión que cobra PayPal y cuánto recibirás después de procesar un pago.',
    calc_paypal_amount: 'Monto de la Transacción ($)',
    calc_paypal_fee: 'Comisión PayPal',
    calc_paypal_net: 'Recibes',

    calc_stripe_title: 'Calculadora de Comisión Stripe',
    calc_stripe_desc: 'Estima al instante las comisiones de Stripe. Incluye el estándar 2.9% + $0.30 por transacción.',
    calc_stripe_amount: 'Monto de la Transacción ($)',
    calc_stripe_fee: 'Comisión Stripe',
    calc_stripe_net: 'Recibes',

    calc_fiverr_title: 'Calculadora de Comisión Fiverr',
    calc_fiverr_desc: 'Fiverr toma el 20% de cada servicio. Ve lo que realmente ganas después de deducir su comisión.',
    calc_fiverr_price: 'Precio del Servicio ($)',
    calc_fiverr_fee: 'Comisión Fiverr (20%)',
    calc_fiverr_net: 'Tus Ganancias',

    calc_profit_title: 'Calculadora de Margen de Ganancia',
    calc_profit_desc: 'Calcula la ganancia bruta y el porcentaje de margen desde tu costo y precio de venta.',
    calc_profit_cost: 'Precio de Costo ($)',
    calc_profit_sell: 'Precio de Venta ($)',
    calc_profit_profit: 'Ganancia',
    calc_profit_margin: 'Margen %',

    calc_rate_title: 'Calculadora de Tarifa Freelance',
    calc_rate_desc: 'Encuentra la tarifa por hora mínima que necesitas cobrar para cubrir tus metas de ingresos y gastos.',
    calc_rate_income: 'Ingreso Mensual Deseado ($)',
    calc_rate_expenses: 'Gastos Mensuales ($)',
    calc_rate_hours: 'Horas Facturables / Mes',
    calc_rate_result: 'Tarifa por Hora Sugerida',

    seo_title: 'Tu Kit de Herramientas Financieras Gratis',
    seo_intro: 'Feexio es una plataforma de utilidades financieras liviana y rápida creada para personas que trabajan con dinero todos los días — freelancers, vendedores en línea, pequeñas empresas y emprendedores. Cada calculadora es completamente gratis, no requiere cuenta y entrega resultados al instante.',
    seo_b1_title: 'Calculadoras de Comisión PayPal y Stripe',
    seo_b1_text: 'Usa nuestra calculadora de comisión PayPal y calculadora de comisión Stripe para ver inmediatamente cuánto te cobra un procesador de pagos. Ingresa cualquier monto y obtén el neto en tiempo real.',
    seo_b2_title: 'Calculadora de Margen de Ganancia',
    seo_b2_text: 'Nuestra calculadora de margen te ayuda a entender la relación entre costo, ingresos y rentabilidad. Ya sea que estés fijando el precio de un producto o evaluando un negocio, conocer tu margen es fundamental.',
    seo_b3_title: 'Calculadora de Tarifa Freelance',
    seo_b3_text: 'La calculadora de tarifa freelance está diseñada para trabajadores independientes que quieren cobrar lo que realmente valen. Ingresa tu meta de ingresos y gastos para encontrar una tarifa por hora sostenible.',
    seo_b4_title: 'Calculadora de Comisión Fiverr',
    seo_b4_text: '¿Vendes en Fiverr? Nuestra calculadora muestra el impacto real del 20% de comisión en tus ganancias. Fija el precio de tus gigs con confianza sabiendo exactamente cuánto te llevas a casa.',

    footer_tagline: 'Calculadoras financieras rápidas y gratuitas para freelancers y emprendedores.',
    footer_tools: 'Herramientas',
    footer_company: 'Empresa',
    footer_legal: 'Legal',
    footer_copy: '© 2025 Feexio. Todos los derechos reservados.',


    // Interés Compuesto
    calc_compound_title: 'Calculadora de Interés Compuesto',
    calc_compound_desc: 'Calcula cómo crece tu inversión con el tiempo mediante interés compuesto en diferentes frecuencias de capitalización.',
    calc_compound_principal: 'Capital Inicial ($)',
    calc_compound_rate: 'Tasa de Interés Anual (%)',
    calc_compound_years: 'Plazo (años)',
    calc_compound_annual: 'Capitalización anual',
    calc_compound_monthly: 'Capitalización mensual',
    calc_compound_interest: 'Intereses Ganados',

    // Costo por Unidad de Volumen
    calc_unitcost_title: 'Costo por Unidad de Volumen',
    calc_unitcost_desc: 'Compara el costo real de materiales o productos calculando el precio por unidad cúbica — ideal para decisiones de compra al por mayor.',
    calc_unitcost_length: 'Largo',
    calc_unitcost_width: 'Ancho',
    calc_unitcost_height: 'Alto',
    calc_unitcost_cost: 'Costo Total ($)',
    calc_unitcost_volume: 'Volumen',
    calc_unitcost_result: 'Costo por unidad cúbica',

    // Cotización de Proyecto
    calc_quote_title: 'Calculadora de Cotización',
    calc_quote_desc: 'Estima el precio total de un proyecto para un cliente basado en tu tarifa, las horas estimadas y un margen de seguridad por cambios de alcance.',
    calc_quote_rate: 'Tu Tarifa por Hora ($)',
    calc_quote_hours: 'Horas Estimadas',
    calc_quote_buffer: 'Margen de Seguridad (%)',
    calc_quote_base: 'Precio Base',
    calc_quote_total: 'Cotización Total (con margen)',

    // Meta de Ahorro
    calc_savings_title: 'Calculadora de Meta de Ahorro',
    calc_savings_desc: 'Descubre cuánto debes ahorrar cada mes para alcanzar una meta financiera — ideal para freelancers que construyen un fondo de emergencia o ahorran para equipos.',
    calc_savings_goal: 'Meta de Ahorro ($)',
    calc_savings_saved: 'Ya Ahorrado ($)',
    calc_savings_months: 'Meses para Alcanzar la Meta',
    calc_savings_remaining: 'Monto Restante',
    calc_savings_monthly: 'Monto Mensual Necesario',

    // Página Acerca de
    about_label: 'ℹ️ Acerca de',
    about_hero_h1: 'Construido para Quienes Trabajan por su Cuenta',
    about_hero_sub: 'Feexio existe porque los freelancers y vendedores independientes merecen claridad financiera instantánea y precisa — sin hojas de cálculo ni registros.',
    about_why_title: '¿Por Qué Creamos Feexio?',
    about_why_p1: 'Todo freelancer ha vivido este momento: acabas de acordar un proyecto de $500, enviaste la factura por PayPal, y días después ves que tu cuenta muestra $485.20. ¿A dónde fueron los $14.80? Sabías que había comisiones — pero ¿cuáles exactamente, y cómo debes ajustar tu próxima cotización?',
    about_why_p2: 'Ese pequeño momento de fricción es exactamente lo que Feexio fue creado para eliminar. Somos un equipo de trabajadores independientes que se cansó de abrir hojas de cálculo o buscar en la documentación para responder preguntas simples sobre dinero.',
    about_why_p3: 'Nuestras herramientas son deliberadamente simples. Sin cuentas, sin muros de pago, sin onboarding. Llegas, calculas y te vas con más claridad que cuando llegaste.',
    about_v1_title: 'Resultados Instantáneos',
    about_v1_text: 'Cada calculadora se actualiza en tiempo real mientras escribes. Sin botón de enviar.',
    about_v2_title: 'Siempre Gratis',
    about_v2_text: 'Todas las herramientas son gratuitas para siempre. Nos financiamos con publicidad, no con muros de pago.',
    about_v3_title: 'Sin Recolección de Datos',
    about_v3_text: 'No almacenamos tus datos. Tus números permanecen en tu dispositivo.',
    about_v4_title: 'Bilingüe',
    about_v4_text: 'Disponible en inglés y español para una comunidad freelance global.',
    about_tagline_visual: 'Calcula Comisiones, Ganancias y Tarifas al Instante',
    about_stat1: 'Calculadoras Gratis',
    about_stat2: 'Registros Requeridos',
    about_stat3: 'Idiomas',
    about_stat4: 'Cálculos Gratis',
    about_mission_label: 'Nuestra Misión',
    about_mission_title: 'Claridad Financiera para Trabajadores Independientes',
    about_mission_p1: 'La economía freelance global es masiva y sigue creciendo. Pero demasiados trabajadores independientes toman decisiones financieras basadas en suposiciones. Creemos que cada freelancer, vendedor y emprendedor merece la misma claridad que tienen las grandes empresas — acceso instantáneo a números precisos, sin necesitar un equipo de finanzas.',
    about_mission_p2: 'Feexio es nuestra contribución a ese mundo. Herramientas simples, resultados precisos, cero fricción.',

    read_more: 'Leer Artículo →',
    back_home: '← Volver al Inicio',
    all_articles: 'Todos los Artículos',
  }
};

// ── State ─────────────────────────────────────────────────────
let currentLang = localStorage.getItem('feexio_lang') || 'en';
let currentTheme = localStorage.getItem('feexio_theme') || 'light';

// ── Apply Theme ───────────────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('feexio_theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ── Apply Language ────────────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('feexio_lang', lang);
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  document.documentElement.lang = lang;
}

// ── Toggle helpers ────────────────────────────────────────────
function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}
function toggleLang() {
  applyLang(currentLang === 'en' ? 'es' : 'en');
}

// ── Calculator Logic ──────────────────────────────────────────
function fmt(n) { return '$' + parseFloat(n).toFixed(2); }

function calcPaypal() {
  const amount = parseFloat(document.getElementById('pp-amount').value) || 0;
  const fee = (amount * 0.029) + 0.30;
  const net = amount - fee;
  if (amount <= 0) return;
  document.getElementById('pp-fee').textContent = fmt(fee);
  document.getElementById('pp-net').textContent = fmt(net);
  document.getElementById('pp-result').classList.add('visible');
}

function calcStripe() {
  const amount = parseFloat(document.getElementById('st-amount').value) || 0;
  const fee = (amount * 0.029) + 0.30;
  const net = amount - fee;
  if (amount <= 0) return;
  document.getElementById('st-fee').textContent = fmt(fee);
  document.getElementById('st-net').textContent = fmt(net);
  document.getElementById('st-result').classList.add('visible');
}

function calcFiverr() {
  const price = parseFloat(document.getElementById('fv-price').value) || 0;
  const fee = price * 0.20;
  const net = price - fee;
  if (price <= 0) return;
  document.getElementById('fv-fee').textContent = fmt(fee);
  document.getElementById('fv-net').textContent = fmt(net);
  document.getElementById('fv-result').classList.add('visible');
}

function calcProfit() {
  const cost = parseFloat(document.getElementById('pm-cost').value) || 0;
  const sell = parseFloat(document.getElementById('pm-sell').value) || 0;
  if (sell <= 0) return;
  const profit = sell - cost;
  const margin = (profit / sell) * 100;
  document.getElementById('pm-profit').textContent = fmt(profit);
  document.getElementById('pm-margin').textContent = margin.toFixed(1) + '%';
  document.getElementById('pm-result').classList.add('visible');
}

function calcRate() {
  const income = parseFloat(document.getElementById('fr-income').value) || 0;
  const expenses = parseFloat(document.getElementById('fr-expenses').value) || 0;
  const hours = parseFloat(document.getElementById('fr-hours').value) || 0;
  if (hours <= 0) return;
  const rate = (income + expenses) / hours;
  document.getElementById('fr-rate').textContent = fmt(rate) + '/hr';
  document.getElementById('fr-result').classList.add('visible');
}


function calcCompound() {
  const P = parseFloat(document.getElementById('ci-principal').value) || 0;
  const r = (parseFloat(document.getElementById('ci-rate').value) || 0) / 100;
  const n = parseFloat(document.getElementById('ci-years').value) || 0;
  if (P <= 0 || r <= 0 || n <= 0) return;
  const annual   = P * Math.pow(1 + r, n);
  const monthly  = P * Math.pow(1 + r/12, 12*n);
  const interest = monthly - P;
  document.getElementById('ci-annual').textContent   = fmt(annual);
  document.getElementById('ci-monthly').textContent  = fmt(monthly);
  document.getElementById('ci-interest').textContent = fmt(interest);
  document.getElementById('ci-result').classList.add('visible');
}

function calcUnitCost() {
  const L = parseFloat(document.getElementById('uv-length').value) || 0;
  const W = parseFloat(document.getElementById('uv-width').value)  || 0;
  const H = parseFloat(document.getElementById('uv-height').value) || 0;
  const C = parseFloat(document.getElementById('uv-cost').value)   || 0;
  if (L <= 0 || W <= 0 || H <= 0 || C <= 0) return;
  const vol = L * W * H;
  const cpv = C / vol;
  document.getElementById('uv-volume').textContent = vol.toFixed(2);
  document.getElementById('uv-cpv').textContent    = '$' + cpv.toFixed(4);
  document.getElementById('uv-result').classList.add('visible');
}

function calcProjectQuote() {
  const rate   = parseFloat(document.getElementById('pq-rate').value)   || 0;
  const hours  = parseFloat(document.getElementById('pq-hours').value)  || 0;
  const buffer = parseFloat(document.getElementById('pq-buffer').value) || 0;
  if (rate <= 0 || hours <= 0) return;
  const base  = rate * hours;
  const total = base * (1 + buffer / 100);
  document.getElementById('pq-base').textContent  = fmt(base);
  document.getElementById('pq-total').textContent = fmt(total);
  document.getElementById('pq-result').classList.add('visible');
}

function calcSavingsGoal() {
  const goal   = parseFloat(document.getElementById('sg-goal').value)   || 0;
  const saved  = parseFloat(document.getElementById('sg-saved').value)  || 0;
  const months = parseFloat(document.getElementById('sg-months').value) || 0;
  if (goal <= 0 || months <= 0) return;
  const remaining = Math.max(0, goal - saved);
  const monthly   = remaining / months;
  document.getElementById('sg-remaining').textContent = fmt(remaining);
  document.getElementById('sg-monthly').textContent   = fmt(monthly) + '/mo';
  document.getElementById('sg-result').classList.add('visible');
}

// ── Mobile Nav ────────────────────────────────────────────────
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
}

// ── Scroll CTA ────────────────────────────────────────────────
function scrollToCalcs() {
  const el = document.getElementById('calculators');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initNav();

  // Bind theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Bind lang toggle
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.addEventListener('click', toggleLang);

  // Real-time calculator bindings
  ['pp-amount'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcPaypal);
  });
  ['st-amount'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcStripe);
  });
  ['fv-price'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcFiverr);
  });
  ['pm-cost','pm-sell'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcProfit);
  });
  ['ci-principal','ci-rate','ci-years'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcCompound);
  });
  ['uv-length','uv-width','uv-height','uv-cost'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcUnitCost);
  });
  ['pq-rate','pq-hours','pq-buffer'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcProjectQuote);
  });
  ['sg-goal','sg-saved','sg-months'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcSavingsGoal);
  });
  ['fr-income','fr-expenses','fr-hours'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calcRate);
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('form-success').classList.add('visible');
      contactForm.reset();
      setTimeout(() => document.getElementById('form-success').classList.remove('visible'), 5000);
    });
  }

  // Active nav link
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    if (link.getAttribute('href') === window.location.pathname.split('/').pop() ||
        (window.location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
});
