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
    hero_badge: '5 Free Calculators',
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
    hero_badge: '5 Calculadoras Gratis',
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
