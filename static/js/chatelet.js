/* Émilie du Châtelet — Selected Works
   Parallel reader + dark mode interactions */

(function () {
  'use strict';

  // ── Dark mode ───────────────────────────────────────────────
  // Honour OS preference, then allow manual override stored in localStorage.
  // Classes on <html>: .dark (forced dark) | .light (forced light) | none (OS)
  const STORAGE_KEY = 'chatelet-color-scheme';

  function getOsPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyScheme(scheme) {
    document.documentElement.classList.remove('dark', 'light');
    if (scheme === 'dark')  document.documentElement.classList.add('dark');
    if (scheme === 'light') document.documentElement.classList.add('light');
    updateToggleLabel(scheme === 'dark' || (scheme === 'auto' && getOsPrefersDark()));
  }

  function updateToggleLabel(isDark) {
    document.querySelectorAll('.dark-toggle .toggle-icon').forEach(function (el) {
      el.textContent = isDark ? '☀' : '☾';
    });
  }

  // Apply saved preference immediately (before paint)
  var savedScheme = null;
  try { savedScheme = localStorage.getItem(STORAGE_KEY); } catch (_) {}
  if (savedScheme === 'dark' || savedScheme === 'light') {
    applyScheme(savedScheme);
  } else {
    updateToggleLabel(getOsPrefersDark());
  }

  // Wire up toggle buttons (injected into header by this script or present in HTML)
  document.addEventListener('DOMContentLoaded', function () {

    // Inject dark mode toggle into every .site-header-inner if not already present
    document.querySelectorAll('.site-header-inner').forEach(function (inner) {
      if (inner.querySelector('.dark-toggle')) return;
      var btn = document.createElement('button');
      btn.className = 'dark-toggle';
      btn.setAttribute('aria-label', 'Toggle dark mode');
      btn.innerHTML =
        '<span class="toggle-icon">' + (isDarkActive() ? '☀' : '☾') + '</span>' +
        '<span class="toggle-label-light">Dark</span>' +
        '<span class="toggle-label-dark">Light</span>';
      inner.appendChild(btn);
    });

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.dark-toggle');
      if (!btn) return;
      var goingDark = !isDarkActive();
      var scheme = goingDark ? 'dark' : 'light';
      applyScheme(scheme);
      try { localStorage.setItem(STORAGE_KEY, scheme); } catch (_) {}
    });

    // Keep toggle label in sync when OS preference changes
    try {
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
          var stored = null;
          try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) {}
          if (!stored) updateToggleLabel(getOsPrefersDark());
        });
      }
    } catch (_) {}

    // ── View mode toggle ──────────────────────────────────────
    var viewToggle = document.querySelector('.view-toggle');
    var readerContent = document.querySelector('.reader-content');

    if (viewToggle && readerContent) {
      function setMode(mode) {
        viewToggle.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
        var activeBtn = viewToggle.querySelector('[data-mode="' + mode + '"]');
        if (activeBtn) activeBtn.classList.add('active');
        readerContent.classList.remove('mode-en', 'mode-fr');
        if (mode !== 'parallel') readerContent.classList.add('mode-' + mode);
        try { localStorage.setItem('chatelet-view-mode', mode); } catch (_) {}
      }

      viewToggle.querySelectorAll('button[data-mode]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          setMode(btn.getAttribute('data-mode'));
        });
      });

      try {
        var saved = localStorage.getItem('chatelet-view-mode');
        if (saved && saved !== 'parallel') setMode(saved);
      } catch (_) {}
    }

    // ── TOC active section tracker ────────────────────────────
    var tocLinks = document.querySelectorAll('.toc-list a[href^="#"]');
    var sections = document.querySelectorAll('.text-section[id]');

    if (tocLinks.length && sections.length && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            tocLinks.forEach(function (link) {
              link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      sections.forEach(function (s) { observer.observe(s); });
    }

    // ── Open source refs / page markers in new tab ────────────
    document.querySelectorAll('.source-ref, .page-marker').forEach(function (el) {
      if (!el.getAttribute('target')) {
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
    });

  });

  function isDarkActive() {
    return document.documentElement.classList.contains('dark') ||
      (!document.documentElement.classList.contains('light') && getOsPrefersDark());
  }

})();
