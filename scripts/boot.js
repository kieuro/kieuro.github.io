// Prevent flash of wrong theme/language and enable progressive reveal animations
(function () {
  'use strict';

  document.documentElement.classList.add('js-ready');
  var savedTheme = null;
  var savedLang = null;
  try {
    savedTheme = localStorage.getItem('theme');
    savedLang = localStorage.getItem('lang');
  } catch (e) {
    // Ignore storage access restrictions (e.g. private browsing / blocked storage)
  }
  var theme = savedTheme === 'dark' ? 'dark' : 'light';
  var lang = savedLang === 'id' ? 'id' : 'en';
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#0E1013' : '#F7F6F2');
  }
})();
