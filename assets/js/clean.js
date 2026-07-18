(function () {
  'use strict';

  // AOS init
  if (window.AOS) {
    AOS.init({ duration: 600, easing: 'ease-out', once: true, offset: 40 });
  }

  // Year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // Scrollspy — highlight active nav link
  var sections = document.querySelectorAll('main section[id], #hero');
  var navAnchors = document.querySelectorAll('.nav-links a');

  function onScroll() {
    var scrollPos = window.scrollY + 140;
    var currentId = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    navAnchors.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });

    var backToTop = document.getElementById('backToTop');
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 400);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
