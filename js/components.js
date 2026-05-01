/* ============================================================
   Feexio — Shared Components (Nav + Footer)
   Injected into every page
   ============================================================ */

const NETWORK_BAR_HTML = `
<div style="background:#1a1a2e;color:#a0a8c8;font-size:12px;text-align:center;padding:6px 16px;letter-spacing:0.02em;">
  More free tools:&nbsp;
  <a href="https://instantlinkhub.com" target="_blank" rel="noopener" style="color:#7eb8f7;text-decoration:none;margin:0 6px;">InstantLinkHub</a>·
  <a href="https://swiftconverthub.com" target="_blank" rel="noopener" style="color:#7eb8f7;text-decoration:none;margin:0 6px;">SwiftConvertHub</a>·
  <a href="https://feexio.com" target="_blank" rel="noopener" style="color:#c8d0e8;text-decoration:none;margin:0 6px;font-weight:600;">Feexio</a>
</div>`;

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="/" class="nav-logo" aria-label="Feexio Home">
        <img class="logo-img logo-img--light" src="assets/brand/feexio-logo-light.svg" alt="Feexio" width="188" height="32">
        <img class="logo-img logo-img--dark"  src="assets/brand/feexio-logo-dark.svg"  alt="Feexio" width="188" height="32">
      </a>
      <div class="nav-links">
        <a href="/" data-i18n="nav_home">Home</a>
        <a href="/#calculators" data-i18n="nav_calculators">Calculators</a>
        <a href="/blog/" data-i18n="nav_blog">Blog</a>
        <a href="/about.html" data-i18n="nav_about">About</a>
        <a href="/contact.html" data-i18n="nav_contact">Contact</a>
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
    <a href="/" data-i18n="nav_home">Home</a>
    <a href="/#calculators" data-i18n="nav_calculators">Calculators</a>
    <a href="/blog/" data-i18n="nav_blog">Blog</a>
    <a href="/about.html" data-i18n="nav_about">About</a>
    <a href="/contact.html" data-i18n="nav_contact">Contact</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer role="contentinfo">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" aria-label="Feexio Home" style="display:inline-block;margin-bottom:10px;">
          <img class="logo-img logo-img--light" src="assets/brand/feexio-logo-light.svg" alt="Feexio" width="152" height="26">
          <img class="logo-img logo-img--dark"  src="assets/brand/feexio-logo-dark.svg"  alt="Feexio" width="152" height="26">
        </a>
        <p data-i18n="footer_tagline">Fast, free financial calculators for freelancers and entrepreneurs.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_tools">Tools</h4>
        <a href="/paypal-fee-calculator.html">PayPal Calculator</a>
        <a href="/stripe-fee-calculator.html">Stripe Calculator</a>
        <a href="/fiverr-fee-calculator.html">Fiverr Calculator</a>
        <a href="/profit-margin-calculator.html">Profit Margin</a>
        <a href="/freelance-rate-calculator.html">Freelance Rate</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_company">Company</h4>
        <a href="/about.html" data-i18n="nav_about">About</a>
        <a href="/blog/" data-i18n="nav_blog">Blog</a>
        <a href="/contact.html" data-i18n="nav_contact">Contact</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_legal">Legal</h4>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Use</a>
        <a href="/disclaimer.html">Disclaimer</a>
      </div>
    </div>
    <div class="footer-social" style="display:flex;gap:12px;margin-top:12px;align-items:center;">
      <a href="https://www.facebook.com/toolsynergylab" target="_blank" rel="noopener noreferrer" aria-label="ToolSynergyLab on Facebook" style="display:inline-flex;color:#ccc;transition:color 0.2s;" onmouseover="this.style.color='#1877F2'" onmouseout="this.style.color='#ccc'"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
      <a href="https://www.instagram.com/toolsynergylab?igsh=cHI3ZTJ4MG4wNjc1" target="_blank" rel="noopener noreferrer" aria-label="ToolSynergyLab on Instagram" style="display:inline-flex;color:#ccc;transition:color 0.2s;" onmouseover="this.style.color='#E1306C'" onmouseout="this.style.color='#ccc'"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
      <a href="https://www.youtube.com/channel/UCRcgmNeRDcBtk1S3UFjr1gw" target="_blank" rel="noopener noreferrer" aria-label="ToolSynergyLab on YouTube" style="display:inline-flex;color:#ccc;transition:color 0.2s;" onmouseover="this.style.color='#FF0000'" onmouseout="this.style.color='#ccc'"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy" data-i18n="footer_copy">© 2026 Feexio. All rights reserved.</span>
      <span style="font-size:0.8rem;color:var(--text-muted);">Made with ♥ for freelancers</span>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.07);margin-top:16px;padding-top:14px;text-align:center;font-size:0.8rem;color:var(--text-muted);">
      Part of the <span style="color:var(--text);font-weight:600;">Tool Synergy Lab</span> free tool network &mdash;
      <a href="https://instantlinkhub.com" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;margin:0 4px;">InstantLinkHub</a>&middot;
      <a href="https://swiftconverthub.com" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:none;margin:0 4px;">SwiftConvertHub</a>
    </div>
  </div>
</footer>`;

function injectSharedComponents() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NETWORK_BAR_HTML + NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
}

document.addEventListener('DOMContentLoaded', injectSharedComponents);

// ── Cookie Consent Banner ──────────────────────────────────────────────────
(function () {
  const CONSENT_KEY = 'feexio_cookie_consent';
  if (localStorage.getItem(CONSENT_KEY)) return;

  function createBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0', 'z-index:9999',
      'background:#1a1a2e', 'color:#e2e8f0',
      'padding:16px 24px', 'display:flex', 'align-items:center',
      'justify-content:space-between', 'flex-wrap:wrap', 'gap:12px',
      'box-shadow:0 -2px 16px rgba(0,0,0,0.3)',
      'font-family:var(--font-body,system-ui,sans-serif)',
      'font-size:0.875rem', 'line-height:1.5'
    ].join(';');

    const text = document.createElement('p');
    text.style.cssText = 'margin:0;flex:1;min-width:240px;';
    text.innerHTML = 'We use cookies and similar technologies to serve ads and analyse traffic. '
      + 'By clicking <strong>Accept</strong> you consent to our use of cookies. '
      + '<a href="/privacy.html" style="color:#a78bfa;text-decoration:underline;">Privacy Policy</a>';

    const btnGroup = document.createElement('div');
    btnGroup.style.cssText = 'display:flex;gap:10px;flex-shrink:0;';

    function makeBtn(label, value, bg, color) {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = [
        'padding:8px 20px', 'border:none', 'border-radius:6px',
        'font-size:0.875rem', 'font-weight:600', 'cursor:pointer',
        'background:' + bg, 'color:' + color, 'transition:opacity 0.15s'
      ].join(';');
      btn.addEventListener('mouseover', function () { this.style.opacity = '0.85'; });
      btn.addEventListener('mouseout', function () { this.style.opacity = '1'; });
      btn.addEventListener('click', function () {
        localStorage.setItem(CONSENT_KEY, value);
        banner.style.transition = 'opacity 0.3s';
        banner.style.opacity = '0';
        setTimeout(function () { banner.remove(); }, 320);
      });
      return btn;
    }

    btnGroup.appendChild(makeBtn('Accept', 'accepted', '#7c3aed', '#fff'));
    btnGroup.appendChild(makeBtn('Decline', 'declined', 'transparent', '#a0aec0'));
    btnGroup.children[1].style.border = '1px solid #4a5568';

    banner.appendChild(text);
    banner.appendChild(btnGroup);
    document.body.appendChild(banner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBanner);
  } else {
    createBanner();
  }
})();
