/* ============================================================
   Feexio — Shared Components (Nav + Footer)
   Injected into every page
   ============================================================ */

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Feexio Home">Fee<span>x</span>io</a>
      <div class="nav-links">
        <a href="index.html" data-i18n="nav_home">Home</a>
        <a href="index.html#calculators" data-i18n="nav_calculators">Calculators</a>
        <a href="blog.html" data-i18n="nav_blog">Blog</a>
        <a href="about.html" data-i18n="nav_about">About</a>
        <a href="contact.html" data-i18n="nav_contact">Contact</a>
      </div>
      <div class="nav-controls">
        <button class="btn-icon" id="theme-toggle" aria-label="Toggle dark mode">
          <span id="theme-icon">🌙</span>
        </button>
        <button class="lang-btn" id="lang-btn" aria-label="Switch language">ES</button>
        <div class="nav-hamburger" id="hamburger" aria-label="Open menu" role="button" tabindex="0">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <a href="index.html" data-i18n="nav_home">Home</a>
    <a href="index.html#calculators" data-i18n="nav_calculators">Calculators</a>
    <a href="blog.html" data-i18n="nav_blog">Blog</a>
    <a href="about.html" data-i18n="nav_about">About</a>
    <a href="contact.html" data-i18n="nav_contact">Contact</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer role="contentinfo">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">Fee<span>x</span>io</div>
        <p data-i18n="footer_tagline">Fast, free financial calculators for freelancers and entrepreneurs.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_tools">Tools</h4>
        <a href="index.html#paypal">PayPal Calculator</a>
        <a href="index.html#stripe">Stripe Calculator</a>
        <a href="index.html#fiverr">Fiverr Calculator</a>
        <a href="index.html#profit">Profit Margin</a>
        <a href="index.html#freelance">Freelance Rate</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_company">Company</h4>
        <a href="about.html" data-i18n="nav_about">About</a>
        <a href="blog.html" data-i18n="nav_blog">Blog</a>
        <a href="contact.html" data-i18n="nav_contact">Contact</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_legal">Legal</h4>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Use</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy" data-i18n="footer_copy">© 2025 Feexio. All rights reserved.</span>
      <span style="font-size:0.8rem;color:var(--text-muted);">Made with ♥ for freelancers</span>
    </div>
  </div>
</footer>`;

function injectSharedComponents() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
}

document.addEventListener('DOMContentLoaded', injectSharedComponents);
