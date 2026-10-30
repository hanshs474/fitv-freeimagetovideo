// ==UserScript==
// @name         Fitv Free Image to Video AI: open clip studio from any page
// @namespace    https://freeimagetovideo.ai
// @version      0.1.1
// @description  Free image to video AI with no daily cap: your first clip needs no sign-up, then a free account keeps going. Every video comes with sound and no watermark.
// @author       Fitv
// @homepage     https://freeimagetovideo.ai/
// @homepageURL  https://freeimagetovideo.ai/
// @supportURL   https://freeimagetovideo.ai/
// @license      MIT
// @match        *://*/*
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @noframes
// ==/UserScript==

(function () {
  'use strict';
  const SITE = 'https://freeimagetovideo.ai/';
  function openFitv() {
    if (typeof GM_openInTab === 'function') GM_openInTab(SITE, { active: true });
    else window.open(SITE, '_blank', 'noopener');
  }
  if (typeof GM_registerMenuCommand === 'function') {
    GM_registerMenuCommand('Open Fitv free image to video AI', openFitv);
  }
})();