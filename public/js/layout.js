/* Injects shared header, footer, and cart drawer into pages */
(function () {
  'use strict';

  var headerHTML = '<header class="site-header">' +
    '<div class="container header-inner">' +
      '<a href="/" class="logo">' +
        '<span class="logo-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2"/><path d="M3 11v5a2 2 0 002 2h2v3h2v-3h6v3h2v-3h2a2 2 0 002-2v-5"/><path d="M3 11h18"/></svg></span>' +
        '<span>Maison</span><span>.</span>' +
      '</a>' +
      '<nav class="nav-links" id="nav-links">' +
        '<a href="/" data-nav="home">Home</a>' +
        '<a href="/shop.html" data-nav="shop">Shop</a>' +
        '<a href="/privacy.html" data-nav="privacy">Privacy</a>' +
        '<a href="/refund.html" data-nav="refund">Refunds</a>' +
        '<a href="/contact.html" data-nav="contact">Contact</a>' +
      '</nav>' +
      '<div class="header-actions">' +
        '<button class="icon-btn" data-cart-open aria-label="Open cart">' +
          '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>' +
          '<span class="cart-count hidden">0</span>' +
        '</button>' +
        '<button class="icon-btn menu-toggle" id="menu-toggle" aria-label="Toggle menu">' +
          '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
        '</button>' +
      '</div>' +
    '</div>' +
  '</header>';

  var cartHTML = '<div class="cart-overlay" id="cart-overlay"></div>' +
    '<div class="cart-drawer" id="cart-drawer">' +
      '<div class="cart-header">' +
        '<div class="flex items-center gap-2">' +
          '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="20" height="20"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>' +
          '<h2>Your Cart</h2>' +
        '</div>' +
        '<button class="icon-btn" id="cart-close" aria-label="Close cart">' +
          '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="cart-body" id="cart-body"></div>' +
      '<div class="cart-footer" id="cart-footer" style="display:none;">' +
        '<div class="cart-subtotal">' +
          '<span class="muted text-sm">Subtotal</span>' +
          '<span class="val" id="cart-subtotal">$0</span>' +
        '</div>' +
        '<p class="muted">Shipping and taxes calculated at checkout.</p>' +
        '<button class="btn btn-primary btn-block">Proceed to Checkout</button>' +
        '<button class="btn btn-sm btn-block" style="color:var(--ink-3);" onclick="Maison.closeCart()">Continue Shopping</button>' +
      '</div>' +
    '</div>';

  var toastHTML = '<div class="toast" id="toast">' +
    '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' +
    '<span>Added to cart</span>' +
  '</div>';

  var footerHTML = '<footer class="site-footer">' +
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<div class="logo"><span class="logo-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2"/><path d="M3 11v5a2 2 0 002 2h2v3h2v-3h6v3h2v-3h2a2 2 0 002-2v-5"/><path d="M3 11h18"/></svg></span><span style="color:#fff;">Maison</span><span style="color:var(--accent);">.</span></div>' +
          '<p>Thoughtfully crafted furniture for modern living. Every piece designed to last a lifetime.</p>' +
          '<div class="footer-social">' +
            '<a href="#" aria-label="Instagram"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>' +
            '<a href="#" aria-label="Facebook"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>' +
            '<a href="#" aria-label="Twitter"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Shop</h4>' +
          '<ul>' +
            '<li><a href="/shop.html">All Products</a></li>' +
            '<li><a href="/shop.html?cat=Sofas">Sofas</a></li>' +
            '<li><a href="/shop.html?cat=Dining">Dining</a></li>' +
            '<li><a href="/shop.html?cat=Bedroom">Bedroom</a></li>' +
            '<li><a href="/shop.html?cat=Outdoor">Outdoor</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Company</h4>' +
          '<ul>' +
            '<li><a href="/privacy.html">Privacy Policy</a></li>' +
            '<li><a href="/refund.html">Refund Policy</a></li>' +
            '<li><a href="/contact.html">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col footer-contact">' +
          '<h4>Get in Touch</h4>' +
          '<ul>' +
            '<li><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> hello@maisonfurniture.com</li>' +
            '<li><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg> +1 (800) 555-0199</li>' +
            '<li><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> 123 Design District, NYC</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">&copy; ' + new Date().getFullYear() + ' Maison Furniture. All rights reserved. Crafted with care.</div>' +
    '</div>' +
  '</footer>';

  function setActiveNav() {
    var page = document.body.getAttribute('data-page');
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function (link) {
      if (link.getAttribute('data-nav') === page) link.classList.add('active');
    });
  }

  function inject() {
    var headerSlot = document.getElementById('header-slot');
    var footerSlot = document.getElementById('footer-slot');
    var cartSlot = document.getElementById('cart-slot');

    if (headerSlot) headerSlot.innerHTML = headerHTML;
    if (footerSlot) footerSlot.innerHTML = footerHTML;
    if (cartSlot) cartSlot.innerHTML = cartHTML + toastHTML;

    setActiveNav();

    if (window.Maison) window.Maison.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
