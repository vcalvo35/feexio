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
    hero_badge: '12 Free Calculators',
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
    section_loans: 'Loans & Mortgages',
    section_loans_sub: 'Plan your payments before you sign anything.',

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

    // Mortgage Calculator
    calc_mortgage_title: 'Mortgage Calculator',
    calc_mortgage_desc: 'Estimate your monthly mortgage payment based on home price, down payment, interest rate and loan term.',
    calc_mortgage_price: 'Home Price ($)',
    calc_mortgage_down: 'Down Payment ($)',
    calc_mortgage_rate: 'Annual Interest Rate (%)',
    calc_mortgage_years: 'Loan Term (years)',
    calc_mortgage_monthly: 'Monthly Payment',
    calc_mortgage_interest: 'Total Interest',
    calc_mortgage_total: 'Total Cost',

    // Personal Loan Calculator
    calc_loan_title: 'Personal Loan Calculator',
    calc_loan_desc: 'Calculate monthly payments and total interest for any personal loan or auto loan.',
    calc_loan_amount: 'Loan Amount ($)',
    calc_loan_rate: 'Annual Interest Rate (%)',
    calc_loan_months: 'Loan Term (months)',
    calc_loan_monthly: 'Monthly Payment',
    calc_loan_interest: 'Total Interest',
    calc_loan_total: 'Total Paid',

    // Amortization Schedule
    calc_amort_title: 'Amortization Schedule',
    calc_amort_desc: 'See how your loan balance decreases over time and the split between principal and interest each year.',
    calc_amort_amount: 'Loan Amount ($)',
    calc_amort_rate: 'Annual Interest Rate (%)',
    calc_amort_months: 'Loan Term (months)',
    calc_amort_payment: 'Monthly Payment',
    calc_amort_interest: 'Total Interest',
    calc_amort_col_year: 'Year',
    calc_amort_col_principal: 'Principal',
    calc_amort_col_interest: 'Interest',
    calc_amort_col_balance: 'Balance',

    // SEO Content
    seo_title: 'Your Free Financial Toolkit',
    seo_intro: 'Feexio is a lightweight, fast financial utility platform built for people who work with money every day — freelancers, online sellers, small business owners, and entrepreneurs. Every calculator is completely free, requires no account, and delivers instant results.',
    seo_b1_title: 'PayPal & Stripe Fee Calculators',
    seo_b1_text: 'Use our PayPal fee calculator and Stripe fee calculator to immediately see how much a payment processor takes from your transaction. Enter any amount and get the net received in real time.',
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
    footer_copy: '\u00a9 2025 Feexio. All rights reserved.',

    // About page
    about_label: 'About',
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
    read_more: 'Read Article \u2192',
    back_home: '\u2190 Back to Home',
    all_articles: 'All Articles',

    // Jump Points
    jp_paypal_to_ilh: 'Ready to share your payment details?',
    jp_paypal_to_ilh_link: 'Generate a WhatsApp link to send it instantly',

    // FAQ Section
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Answers to common questions about fees, rates and financial calculations.',
    faq_q1: 'How does PayPal calculate its fees in 2025?',
    faq_a1: 'PayPal charges a standard rate of 3.49% + $0.49 per transaction for goods and services payments. For merchants using PayPal Checkout, the rate is typically 3.49% + $0.49 per transaction. Always verify with PayPal\'s official pricing page for your specific account type and country.',
    faq_q2: 'What is the difference between profit margin and markup?',
    faq_a2: 'Profit margin is calculated as (Profit ÷ Selling Price) × 100, while markup is calculated as (Profit ÷ Cost Price) × 100. For example, if an item costs $60 and sells for $100, the profit margin is 40% but the markup is 66.7%. Margin is always lower than markup for the same transaction.',
    faq_q3: 'How much does Fiverr take from sellers in 2025?',
    faq_a3: 'Fiverr charges sellers a flat 20% service fee on every order, regardless of the order value. This applies to the base order amount, tips, and gig extras. There is no tiered system — the rate stays at 20% for all earnings.',
    faq_q4: 'How do I calculate a fair freelance hourly rate?',
    faq_a4: 'Add your desired monthly income to your monthly business expenses, then divide by your billable hours per month. For example, $5,000 income + $500 expenses divided by 80 billable hours equals a $68.75 minimum hourly rate. Use our Freelance Rate Calculator to run this instantly.',
    faq_q5: 'What is Stripe\'s processing fee and how is it applied?',
    faq_a5: 'Stripe\'s standard fee is 2.9% + $0.30 per successful card charge in the US. Manually entered cards are 3.4% + $0.30. International cards add 1.5%. Stripe has no monthly fees or minimums. The fee is deducted automatically before deposit.',
  },

  es: {
    nav_home: 'Inicio',
    nav_calculators: 'Calculadoras',
    nav_blog: 'Blog',
    nav_about: 'Acerca de',
    nav_contact: 'Contacto',
    hero_badge: '12 Calculadoras Gratis',
    hero_h1_a: 'Calcula Comisiones,',
    hero_h1_b: 'Ganancias y Tarifas',
    hero_h1_c: 'Al Instante',
    hero_sub: 'Herramientas gratis para freelancers, vendedores y emprendedores. Sin registro, sin rodeos — solo resultados r\u00e1pidos y precisos.',
    hero_cta: 'Empezar a Calcular',
    hero_cta2: 'Saber M\u00e1s',
    stat1: 'Calculadoras',
    stat2: 'Siempre Gratis',
    stat3: 'Sin Login',
    ad_label: 'Publicidad',
    section_fee: 'Calculadoras de Comisiones',
    section_fee_sub: 'Descubre exactamente cu\u00e1nto te quedas despu\u00e9s de las comisiones de la plataforma.',
    section_business: 'Negocio y Ganancias',
    section_business_sub: 'Conoce tus m\u00e1rgenes antes de fijar cualquier precio.',
    section_freelance: 'Herramientas Freelance',
    section_freelance_sub: 'Establece tarifas que realmente cubran tu vida.',
    section_loans: 'Pr\u00e9stamos e Hipotecas',
    section_loans_sub: 'Planifica tus pagos antes de firmar cualquier cosa.',

    calc_paypal_title: 'Calculadora de Comisi\u00f3n PayPal',
    calc_paypal_desc: 'Calcula exactamente la comisi\u00f3n que cobra PayPal y cu\u00e1nto recibir\u00e1s despu\u00e9s de procesar un pago.',
    calc_paypal_amount: 'Monto de la Transacci\u00f3n ($)',
    calc_paypal_fee: 'Comisi\u00f3n PayPal',
    calc_paypal_net: 'Recibes',

    calc_stripe_title: 'Calculadora de Comisi\u00f3n Stripe',
    calc_stripe_desc: 'Estima al instante las comisiones de Stripe. Incluye el est\u00e1ndar 2.9% + $0.30 por transacci\u00f3n.',
    calc_stripe_amount: 'Monto de la Transacci\u00f3n ($)',
    calc_stripe_fee: 'Comisi\u00f3n Stripe',
    calc_stripe_net: 'Recibes',

    calc_fiverr_title: 'Calculadora de Comisi\u00f3n Fiverr',
    calc_fiverr_desc: 'Fiverr toma el 20% de cada servicio. Ve lo que realmente ganas despu\u00e9s de deducir su comisi\u00f3n.',
    calc_fiverr_price: 'Precio del Servicio ($)',
    calc_fiverr_fee: 'Comisi\u00f3n Fiverr (20%)',
    calc_fiverr_net: 'Tus Ganancias',

    calc_profit_title: 'Calculadora de Margen de Ganancia',
    calc_profit_desc: 'Calcula la ganancia bruta y el porcentaje de margen desde tu costo y precio de venta.',
    calc_profit_cost: 'Precio de Costo ($)',
    calc_profit_sell: 'Precio de Venta ($)',
    calc_profit_profit: 'Ganancia',
    calc_profit_margin: 'Margen %',

    calc_rate_title: 'Calculadora de Tarifa Freelance',
    calc_rate_desc: 'Encuentra la tarifa por hora m\u00ednima que necesitas cobrar para cubrir tus metas de ingresos y gastos.',
    calc_rate_income: 'Ingreso Mensual Deseado ($)',
    calc_rate_expenses: 'Gastos Mensuales ($)',
    calc_rate_hours: 'Horas Facturables / Mes',
    calc_rate_result: 'Tarifa por Hora Sugerida',

    calc_compound_title: 'Calculadora de Inter\u00e9s Compuesto',
    calc_compound_desc: 'Calcula c\u00f3mo crece tu inversi\u00f3n con el tiempo mediante inter\u00e9s compuesto en diferentes frecuencias de capitalizaci\u00f3n.',
    calc_compound_principal: 'Capital Inicial ($)',
    calc_compound_rate: 'Tasa de Inter\u00e9s Anual (%)',
    calc_compound_years: 'Plazo (a\u00f1os)',
    calc_compound_annual: 'Capitalizaci\u00f3n anual',
    calc_compound_monthly: 'Capitalizaci\u00f3n mensual',
    calc_compound_interest: 'Intereses Ganados',

    calc_unitcost_title: 'Costo por Unidad de Volumen',
    calc_unitcost_desc: 'Compara el costo real de materiales o productos calculando el precio por unidad c\u00fabica — ideal para decisiones de compra al por mayor.',
    calc_unitcost_length: 'Largo',
    calc_unitcost_width: 'Ancho',
    calc_unitcost_height: 'Alto',
    calc_unitcost_cost: 'Costo Total ($)',
    calc_unitcost_volume: 'Volumen',
    calc_unitcost_result: 'Costo por unidad c\u00fabica',

    calc_quote_title: 'Calculadora de Cotizaci\u00f3n',
    calc_quote_desc: 'Estima el precio total de un proyecto para un cliente basado en tu tarifa, las horas estimadas y un margen de seguridad por cambios de alcance.',
    calc_quote_rate: 'Tu Tarifa por Hora ($)',
    calc_quote_hours: 'Horas Estimadas',
    calc_quote_buffer: 'Margen de Seguridad (%)',
    calc_quote_base: 'Precio Base',
    calc_quote_total: 'Cotizaci\u00f3n Total (con margen)',

    calc_savings_title: 'Calculadora de Meta de Ahorro',
    calc_savings_desc: 'Descubre cu\u00e1nto debes ahorrar cada mes para alcanzar una meta financiera — ideal para freelancers que construyen un fondo de emergencia o ahorran para equipos.',
    calc_savings_goal: 'Meta de Ahorro ($)',
    calc_savings_saved: 'Ya Ahorrado ($)',
    calc_savings_months: 'Meses para Alcanzar la Meta',
    calc_savings_remaining: 'Monto Restante',
    calc_savings_monthly: 'Monto Mensual Necesario',

    calc_mortgage_title: 'Calculadora de Hipoteca',
    calc_mortgage_desc: 'Estima tu pago mensual de hipoteca seg\u00fan el precio del inmueble, el enganche, la tasa de inter\u00e9s y el plazo.',
    calc_mortgage_price: 'Precio del Inmueble ($)',
    calc_mortgage_down: 'Enganche ($)',
    calc_mortgage_rate: 'Tasa de Inter\u00e9s Anual (%)',
    calc_mortgage_years: 'Plazo del Pr\u00e9stamo (a\u00f1os)',
    calc_mortgage_monthly: 'Pago Mensual',
    calc_mortgage_interest: 'Intereses Totales',
    calc_mortgage_total: 'Costo Total',

    calc_loan_title: 'Calculadora de Pr\u00e9stamo Personal',
    calc_loan_desc: 'Calcula los pagos mensuales y el inter\u00e9s total de cualquier pr\u00e9stamo personal o de auto.',
    calc_loan_amount: 'Monto del Pr\u00e9stamo ($)',
    calc_loan_rate: 'Tasa de Inter\u00e9s Anual (%)',
    calc_loan_months: 'Plazo (meses)',
    calc_loan_monthly: 'Pago Mensual',
    calc_loan_interest: 'Intereses Totales',
    calc_loan_total: 'Total a Pagar',

    calc_amort_title: 'Tabla de Amortizaci\u00f3n',
    calc_amort_desc: 'Ve c\u00f3mo disminuye el saldo de tu pr\u00e9stamo con el tiempo y la distribuci\u00f3n entre capital e intereses cada a\u00f1o.',
    calc_amort_amount: 'Monto del Pr\u00e9stamo ($)',
    calc_amort_rate: 'Tasa de Inter\u00e9s Anual (%)',
    calc_amort_months: 'Plazo (meses)',
    calc_amort_payment: 'Pago Mensual',
    calc_amort_interest: 'Intereses Totales',
    calc_amort_col_year: 'A\u00f1o',
    calc_amort_col_principal: 'Capital',
    calc_amort_col_interest: 'Inter\u00e9s',
    calc_amort_col_balance: 'Saldo',

    seo_title: 'Tu Kit de Herramientas Financieras Gratis',
    seo_intro: 'Feexio es una plataforma de utilidades financieras liviana y r\u00e1pida creada para personas que trabajan con dinero todos los d\u00edas — freelancers, vendedores en l\u00ednea, peque\u00f1as empresas y emprendedores. Cada calculadora es completamente gratis, no requiere cuenta y entrega resultados al instante.',
    seo_b1_title: 'Calculadoras de Comisi\u00f3n PayPal y Stripe',
    seo_b1_text: 'Usa nuestra calculadora de comisi\u00f3n PayPal y calculadora de comisi\u00f3n Stripe para ver inmediatamente cu\u00e1nto te cobra un procesador de pagos. Ingresa cualquier monto y obt\u00e9n el neto en tiempo real.',
    seo_b2_title: 'Calculadora de Margen de Ganancia',
    seo_b2_text: 'Nuestra calculadora de margen te ayuda a entender la relaci\u00f3n entre costo, ingresos y rentabilidad. Ya sea que est\u00e9s fijando el precio de un producto o evaluando un negocio, conocer tu margen es fundamental.',
    seo_b3_title: 'Calculadora de Tarifa Freelance',
    seo_b3_text: 'La calculadora de tarifa freelance est\u00e1 dise\u00f1ada para trabajadores independientes que quieren cobrar lo que realmente valen.',
    seo_b4_title: 'Calculadora de Comisi\u00f3n Fiverr',
    seo_b4_text: '\u00bfVendes en Fiverr? Nuestra calculadora muestra el impacto real del 20% de comisi\u00f3n en tus ganancias. Fija el precio de tus gigs con confianza.',

    footer_tagline: 'Calculadoras financieras r\u00e1pidas y gratuitas para freelancers y emprendedores.',
    footer_tools: 'Herramientas',
    footer_company: 'Empresa',
    footer_legal: 'Legal',
    footer_copy: '\u00a9 2025 Feexio. Todos los derechos reservados.',

    about_label: 'Acerca de',
    about_hero_h1: 'Construido para Quienes Trabajan por su Cuenta',
    about_hero_sub: 'Feexio existe porque los freelancers y vendedores independientes merecen claridad financiera instant\u00e1nea y precisa — sin hojas de c\u00e1lculo ni registros.',
    about_why_title: '\u00bfPor Qu\u00e9 Creamos Feexio?',
    about_why_p1: 'Todo freelancer ha vivido este momento: acabas de acordar un proyecto de $500, enviaste la factura por PayPal, y d\u00edas despu\u00e9s ves que tu cuenta muestra $485.20.',
    about_why_p2: 'Ese peque\u00f1o momento de fricci\u00f3n es exactamente lo que Feexio fue creado para eliminar. Somos un equipo de trabajadores independientes que se cans\u00f3 de abrir hojas de c\u00e1lculo.',
    about_why_p3: 'Nuestras herramientas son deliberadamente simples. Sin cuentas, sin muros de pago, sin onboarding. Llegas, calculas y te vas con m\u00e1s claridad.',
    about_v1_title: 'Resultados Instant\u00e1neos',
    about_v1_text: 'Cada calculadora se actualiza en tiempo real mientras escribes. Sin bot\u00f3n de enviar.',
    about_v2_title: 'Siempre Gratis',
    about_v2_text: 'Todas las herramientas son gratuitas para siempre. Nos financiamos con publicidad, no con muros de pago.',
    about_v3_title: 'Sin Recolecci\u00f3n de Datos',
    about_v3_text: 'No almacenamos tus datos. Tus n\u00fameros permanecen en tu dispositivo.',
    about_v4_title: 'Biling\u00fce',
    about_v4_text: 'Disponible en ingl\u00e9s y espa\u00f1ol para una comunidad freelance global.',
    about_tagline_visual: 'Calcula Comisiones, Ganancias y Tarifas al Instante',
    about_stat1: 'Calculadoras Gratis',
    about_stat2: 'Registros Requeridos',
    about_stat3: 'Idiomas',
    about_stat4: 'C\u00e1lculos Gratis',
    about_mission_label: 'Nuestra Misi\u00f3n',
    about_mission_title: 'Claridad Financiera para Trabajadores Independientes',
    about_mission_p1: 'La econom\u00eda freelance global es masiva y sigue creciendo. Pero demasiados trabajadores independientes toman decisiones financieras basadas en suposiciones.',
    about_mission_p2: 'Feexio es nuestra contribuci\u00f3n a ese mundo. Herramientas simples, resultados precisos, cero fricci\u00f3n.',

    read_more: 'Leer Art\u00edculo \u2192',
    back_home: '\u2190 Volver al Inicio',
    all_articles: 'Todos los Art\u00edculos',

    // Jump Points
    jp_paypal_to_ilh: '¿Listo para compartir los datos del pago?',
    jp_paypal_to_ilh_link: 'Genera un enlace de WhatsApp para enviarlo al instante',

    // FAQ Section
    faq_title: 'Preguntas Frecuentes',
    faq_subtitle: 'Respuestas a preguntas comunes sobre comisiones, tarifas y cálculos financieros.',
    faq_q1: '¿Cómo calcula PayPal sus comisiones en 2025?',
    faq_a1: 'PayPal cobra una tarifa estándar de 3.49% + $0.49 por transacción para pagos de bienes y servicios. Para comerciantes que usan PayPal Checkout, la tarifa es típicamente 3.49% + $0.49 por transacción. Verifica siempre la página oficial de precios de PayPal según tu tipo de cuenta y país.',
    faq_q2: '¿Cuál es la diferencia entre margen de ganancia y markup?',
    faq_a2: 'El margen de ganancia se calcula como (Ganancia ÷ Precio de Venta) × 100, mientras que el markup se calcula como (Ganancia ÷ Costo) × 100. Por ejemplo, si un artículo cuesta $60 y se vende en $100, el margen es 40% pero el markup es 66.7%. El margen siempre es menor que el markup para la misma transacción.',
    faq_q3: '¿Cuánto cobra Fiverr a los vendedores en 2025?',
    faq_a3: 'Fiverr cobra a los vendedores una comisión fija del 20% sobre cada pedido, sin importar el monto. Esto aplica al valor base, propinas y extras del gig. No hay sistema escalonado — la tarifa se mantiene en 20% para todas las ganancias.',
    faq_q4: '¿Cómo calculo una tarifa horaria justa como freelancer?',
    faq_a4: 'Suma tu ingreso mensual deseado a tus gastos mensuales de negocio y divide entre tus horas facturables por mes. Por ejemplo, $5,000 de ingreso + $500 de gastos dividido entre 80 horas facturables equivale a una tarifa mínima de $68.75/hora. Usa nuestra Calculadora de Tarifa Freelance para obtenerlo al instante.',
    faq_q5: '¿Cuál es la comisión de Stripe y cómo se aplica?',
    faq_a5: 'La tarifa estándar de Stripe es 2.9% + $0.30 por cargo exitoso con tarjeta en EE.UU. Las tarjetas ingresadas manualmente son 3.4% + $0.30. Las tarjetas internacionales añaden 1.5%. Stripe no tiene cuotas mensuales ni mínimos. La comisión se deduce automáticamente antes del depósito.',
  }
};

// ── State ──────────────────────────────────────────────────────
let currentLang = localStorage.getItem('feexio_lang') || 'en';
let currentTheme = localStorage.getItem('feexio_theme') || 'light';

// ── Apply Theme ────────────────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('feexio_theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '\ud83c\udf19' : '\u2600\ufe0f';
}

// ── Apply Language ─────────────────────────────────────────────
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

function toggleTheme() { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); }
function toggleLang()  { applyLang(currentLang === 'en' ? 'es' : 'en'); }

// ── Calculator Logic ───────────────────────────────────────────
function fmt(n) { return '$' + parseFloat(n).toFixed(2); }

function calcPaypal() {
  const amount = parseFloat(document.getElementById('pp-amount').value) || 0;
  if (amount <= 0) return;
  const fee = (amount * 0.029) + 0.30;
  document.getElementById('pp-fee').textContent = fmt(fee);
  document.getElementById('pp-net').textContent = fmt(amount - fee);
  document.getElementById('pp-result').classList.add('visible');
}

function calcStripe() {
  const amount = parseFloat(document.getElementById('st-amount').value) || 0;
  if (amount <= 0) return;
  const fee = (amount * 0.029) + 0.30;
  document.getElementById('st-fee').textContent = fmt(fee);
  document.getElementById('st-net').textContent = fmt(amount - fee);
  document.getElementById('st-result').classList.add('visible');
}

function calcFiverr() {
  const price = parseFloat(document.getElementById('fv-price').value) || 0;
  if (price <= 0) return;
  const fee = price * 0.20;
  document.getElementById('fv-fee').textContent = fmt(fee);
  document.getElementById('fv-net').textContent = fmt(price - fee);
  document.getElementById('fv-result').classList.add('visible');
}

function calcProfit() {
  const cost = parseFloat(document.getElementById('pm-cost').value) || 0;
  const sell = parseFloat(document.getElementById('pm-sell').value) || 0;
  if (sell <= 0) return;
  const profit = sell - cost;
  document.getElementById('pm-profit').textContent = fmt(profit);
  document.getElementById('pm-margin').textContent = ((profit / sell) * 100).toFixed(1) + '%';
  document.getElementById('pm-result').classList.add('visible');
}

function calcRate() {
  const income   = parseFloat(document.getElementById('fr-income').value)   || 0;
  const expenses = parseFloat(document.getElementById('fr-expenses').value) || 0;
  const hours    = parseFloat(document.getElementById('fr-hours').value)    || 0;
  if (hours <= 0) return;
  document.getElementById('fr-rate').textContent = fmt((income + expenses) / hours) + '/hr';
  document.getElementById('fr-result').classList.add('visible');
}

function calcCompound() {
  const P = parseFloat(document.getElementById('ci-principal').value) || 0;
  const r = (parseFloat(document.getElementById('ci-rate').value) || 0) / 100;
  const n = parseFloat(document.getElementById('ci-years').value) || 0;
  if (P <= 0 || r <= 0 || n <= 0) return;
  const annual  = P * Math.pow(1 + r, n);
  const monthly = P * Math.pow(1 + r/12, 12*n);
  document.getElementById('ci-annual').textContent   = fmt(annual);
  document.getElementById('ci-monthly').textContent  = fmt(monthly);
  document.getElementById('ci-interest').textContent = fmt(monthly - P);
  document.getElementById('ci-result').classList.add('visible');
}

function calcUnitCost() {
  const L = parseFloat(document.getElementById('uv-length').value) || 0;
  const W = parseFloat(document.getElementById('uv-width').value)  || 0;
  const H = parseFloat(document.getElementById('uv-height').value) || 0;
  const C = parseFloat(document.getElementById('uv-cost').value)   || 0;
  if (L <= 0 || W <= 0 || H <= 0 || C <= 0) return;
  const vol = L * W * H;
  document.getElementById('uv-volume').textContent = vol.toFixed(2);
  document.getElementById('uv-cpv').textContent    = '$' + (C / vol).toFixed(4);
  document.getElementById('uv-result').classList.add('visible');
}

function calcProjectQuote() {
  const rate   = parseFloat(document.getElementById('pq-rate').value)   || 0;
  const hours  = parseFloat(document.getElementById('pq-hours').value)  || 0;
  const buffer = parseFloat(document.getElementById('pq-buffer').value) || 0;
  if (rate <= 0 || hours <= 0) return;
  const base = rate * hours;
  document.getElementById('pq-base').textContent  = fmt(base);
  document.getElementById('pq-total').textContent = fmt(base * (1 + buffer / 100));
  document.getElementById('pq-result').classList.add('visible');
}

function calcSavingsGoal() {
  const goal   = parseFloat(document.getElementById('sg-goal').value)   || 0;
  const saved  = parseFloat(document.getElementById('sg-saved').value)  || 0;
  const months = parseFloat(document.getElementById('sg-months').value) || 0;
  if (goal <= 0 || months <= 0) return;
  const remaining = Math.max(0, goal - saved);
  document.getElementById('sg-remaining').textContent = fmt(remaining);
  document.getElementById('sg-monthly').textContent   = fmt(remaining / months) + '/mo';
  document.getElementById('sg-result').classList.add('visible');
}

function calcMortgage() {
  const price = parseFloat(document.getElementById('mo-price').value) || 0;
  const down  = parseFloat(document.getElementById('mo-down').value)  || 0;
  const rate  = (parseFloat(document.getElementById('mo-rate').value) || 0) / 100 / 12;
  const n     = (parseFloat(document.getElementById('mo-years').value) || 0) * 12;
  const loan  = price - down;
  if (loan <= 0 || rate <= 0 || n <= 0) return;
  const monthly  = loan * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
  const total    = monthly * n;
  document.getElementById('mo-monthly').textContent  = fmt(monthly);
  document.getElementById('mo-interest').textContent = fmt(total - loan);
  document.getElementById('mo-total').textContent    = fmt(total);
  document.getElementById('mo-result').classList.add('visible');
}

function calcPersonalLoan() {
  const amount = parseFloat(document.getElementById('pl-amount').value) || 0;
  const rate   = (parseFloat(document.getElementById('pl-rate').value) || 0) / 100 / 12;
  const n      = parseFloat(document.getElementById('pl-months').value) || 0;
  if (amount <= 0 || n <= 0) return;
  const monthly = rate === 0 ? amount / n
    : amount * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
  const total = monthly * n;
  document.getElementById('pl-monthly').textContent  = fmt(monthly);
  document.getElementById('pl-interest').textContent = fmt(total - amount);
  document.getElementById('pl-total').textContent    = fmt(total);
  document.getElementById('pl-result').classList.add('visible');
}

function calcAmortization() {
  const amount = parseFloat(document.getElementById('am-amount').value) || 0;
  const rate   = (parseFloat(document.getElementById('am-rate').value) || 0) / 100 / 12;
  const n      = parseFloat(document.getElementById('am-months').value) || 0;
  if (amount <= 0 || n <= 0) return;
  const monthly = rate === 0 ? amount / n
    : amount * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
  document.getElementById('am-payment').textContent  = fmt(monthly);
  document.getElementById('am-interest').textContent = fmt((monthly * n) - amount);
  document.getElementById('am-result').classList.add('visible');

  // Build yearly amortization table
  let balance = amount;
  const tbody = document.getElementById('am-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  let year = 1, yPrincipal = 0, yInterest = 0;
  for (let m = 1; m <= n; m++) {
    const iPmt = balance * rate;
    const pPmt = monthly - iPmt;
    balance   -= pPmt;
    yPrincipal += pPmt;
    yInterest  += iPmt;
    if (m % 12 === 0 || m === n) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td style="padding:4px 6px;">' + year + '</td>' +
        '<td style="text-align:right;padding:4px 6px;">' + fmt(yPrincipal) + '</td>' +
        '<td style="text-align:right;padding:4px 6px;">' + fmt(yInterest) + '</td>' +
        '<td style="text-align:right;padding:4px 6px;">' + fmt(Math.max(0, balance)) + '</td>';
      tbody.appendChild(tr);
      year++; yPrincipal = 0; yInterest = 0;
    }
  }
  document.getElementById('am-table-wrap').style.display = 'block';
}

// ── Mobile Nav ─────────────────────────────────────────────────
function initNav() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
}

// ── Scroll CTA ─────────────────────────────────────────────────
function scrollToCalcs() {
  const el = document.getElementById('calculators');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initNav();

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.addEventListener('click', toggleLang);

  // Real-time calculator bindings
  const bind = (ids, fn) => ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', fn);
  });

  bind(['pp-amount'], calcPaypal);
  bind(['st-amount'], calcStripe);
  bind(['fv-price'],  calcFiverr);
  bind(['pm-cost','pm-sell'], calcProfit);
  bind(['fr-income','fr-expenses','fr-hours'], calcRate);
  bind(['ci-principal','ci-rate','ci-years'], calcCompound);
  bind(['uv-length','uv-width','uv-height','uv-cost'], calcUnitCost);
  bind(['pq-rate','pq-hours','pq-buffer'], calcProjectQuote);
  bind(['sg-goal','sg-saved','sg-months'], calcSavingsGoal);
  bind(['mo-price','mo-down','mo-rate','mo-years'], calcMortgage);
  bind(['pl-amount','pl-rate','pl-months'], calcPersonalLoan);
  bind(['am-amount','am-rate','am-months'], calcAmortization);

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
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
