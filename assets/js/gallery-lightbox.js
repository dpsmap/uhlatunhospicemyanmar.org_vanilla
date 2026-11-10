/**
 * gallery-lightbox.js – Vanilla JS Lightbox for et_pb_lightbox_image links
 * No dependencies required. Provides:
 *  - Full-screen overlay with close (X) button
 *  - Left/Right arrow navigation between images on the same page
 *  - Keyboard support (Escape to close, Arrow keys to navigate)
 *  - Click outside image to close
 */
(function () {
  'use strict';

  // Collect all lightbox links on the page
  var links = [];
  var currentIndex = 0;

  // DOM elements (created once)
  var overlay, imgEl, closeBtn, prevBtn, nextBtn, counter;

  function init() {
    links = Array.prototype.slice.call(
      document.querySelectorAll('a.et_pb_lightbox_image')
    );
    if (links.length === 0) return;

    buildOverlay();
    bindEvents();
  }

  function buildOverlay() {
    // Overlay container
    overlay = document.createElement('div');
    overlay.id = 'gl-lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image viewer');

    // Close button
    closeBtn = document.createElement('button');
    closeBtn.className = 'gl-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close image viewer');
    closeBtn.title = 'Close';

    // Previous button
    prevBtn = document.createElement('button');
    prevBtn.className = 'gl-prev';
    prevBtn.innerHTML = '&#10094;';
    prevBtn.setAttribute('aria-label', 'Previous image');
    prevBtn.title = 'Previous';

    // Next button
    nextBtn = document.createElement('button');
    nextBtn.className = 'gl-next';
    nextBtn.innerHTML = '&#10095;';
    nextBtn.setAttribute('aria-label', 'Next image');
    nextBtn.title = 'Next';

    // Image
    imgEl = document.createElement('img');
    imgEl.className = 'gl-image';
    imgEl.alt = '';

    // Counter (e.g. "3 / 12")
    counter = document.createElement('div');
    counter.className = 'gl-counter';

    overlay.appendChild(closeBtn);
    overlay.appendChild(prevBtn);
    overlay.appendChild(nextBtn);
    overlay.appendChild(imgEl);
    overlay.appendChild(counter);
    document.body.appendChild(overlay);
  }

  function bindEvents() {
    // Click handlers on each lightbox link
    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(i);
      });
    });

    // Close
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });

    // Navigation
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('gl-active')) return;
      if (e.key === 'Escape' || e.key === 'Esc') closeLightbox();
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
  }

  function openLightbox(index) {
    showImage(index);
    overlay.classList.add('gl-active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('gl-active');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  function showImage(index) {
    // Wrap around
    if (index < 0) index = links.length - 1;
    if (index >= links.length) index = 0;
    currentIndex = index;

    var href = links[currentIndex].getAttribute('href');
    imgEl.src = href;
    imgEl.alt = links[currentIndex].getAttribute('title') || '';

    // Update counter
    counter.textContent = (currentIndex + 1) + ' / ' + links.length;

    // Hide nav if only one image
    if (links.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      counter.style.display = 'none';
    } else {
      prevBtn.style.display = '';
      nextBtn.style.display = '';
      counter.style.display = '';
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
