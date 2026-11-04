/* Feexio — homepage receipt (2026 redesign) */
(function () {
  'use strict';
  var input = document.getElementById('fx-amount');
  var list = document.getElementById('fx-lines');
  if (!input || !list) return;

  var T = {
    en: { fee: 'Fee', keep: 'You keep', best: 'Lowest fee', names: ['PayPal Checkout or invoice', 'Stripe card payment', 'Fiverr order'] },
    es: { fee: 'Comisión', keep: 'Recibes', best: 'Comisión más baja', names: ['PayPal Checkout o factura', 'Pago con tarjeta en Stripe', 'Pedido en Fiverr'] }
  };
  var RATES = [
    { rate: '3.49% + $0.49', fee: function (a) { return a > 0 ? a * 0.0349 + 0.49 : 0; } },
    { rate: '2.9% + $0.30', fee: function (a) { return a > 0 ? a * 0.029 + 0.30 : 0; } },
    { rate: '20%', fee: function (a) { return a * 0.20; } }
  ];
  function lang() { var l; try { l = localStorage.getItem('feexio_lang'); } catch (e) {} return (l || document.documentElement.lang) === 'es' ? 'es' : 'en'; }
  function money(n) {
    return '$' + n.toLocaleString(lang() === 'es' ? 'es-ES' : 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  function render() {
    var a = parseFloat(String(input.value).replace(',', '.'));
    if (!(a > 0)) a = 0;
    var t = T[lang()];
    document.getElementById('fx-total').textContent = money(a);
    var fees = RATES.map(function (r) { return Math.round(r.fee(a) * 100) / 100; });
    var min = Math.min.apply(null, fees);
    list.innerHTML = '';
    RATES.forEach(function (r, i) {
      var line = el('div', 'fx-line');
      var r1 = el('div', 'fx-line-row'); r1.appendChild(el('span', 'fx-line-name', t.names[i])); r1.appendChild(el('span', 'fx-line-rate', r.rate));
      var r2 = el('div', 'fx-line-row'); r2.appendChild(el('span', 'fx-line-label', t.fee)); r2.appendChild(el('span', 'fx-line-fee', '−' + money(fees[i])));
      var r3 = el('div', 'fx-line-row');
      var keep = el('span', null, t.keep);
      if (a > 0 && fees[i] === min) keep.appendChild(el('span', 'fx-best', t.best));
      r3.appendChild(keep); r3.appendChild(el('span', 'fx-line-net', money(Math.max(a - fees[i], 0))));
      line.appendChild(r1); line.appendChild(r2); line.appendChild(r3);
      list.appendChild(line);
    });
  }
  input.addEventListener('input', render);
  var lb = document.getElementById('lang-btn');
  if (lb) lb.addEventListener('click', function () { setTimeout(render, 0); });
  render();
  document.addEventListener('DOMContentLoaded', render);
  window.addEventListener('load', render);
})();
