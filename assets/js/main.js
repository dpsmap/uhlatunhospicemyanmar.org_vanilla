/**
 * uhlatunhospicemyanmar.org - Zero-Overhead Vanilla Client JS
 * Provides mobile navigation, search toggle, smooth slider, Divi animations, and contact form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile_menu_bar_toggle');
    const mobileNav = document.querySelector('.mobile_nav');
    const topMenu = document.querySelector('#top-menu');
    
    if (mobileNav && topMenu) {
        let mobileMenuUl = mobileNav.querySelector('#mobile_menu');
        if (!mobileMenuUl) {
            mobileMenuUl = document.createElement('ul');
            mobileMenuUl.id = 'mobile_menu';
            mobileMenuUl.className = 'et_mobile_menu';
            mobileMenuUl.innerHTML = topMenu.innerHTML;
            mobileNav.appendChild(mobileMenuUl);
        }

        const toggleHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (mobileNav.classList.contains('opened')) {
                mobileNav.classList.remove('opened');
                mobileNav.classList.add('closed');
            } else {
                mobileNav.classList.remove('closed');
                mobileNav.classList.add('opened');
            }
        };

        if (mobileToggle) {
            mobileToggle.addEventListener('click', toggleHandler);
        }
        const selectPage = mobileNav.querySelector('.select_page');
        if (selectPage) {
            selectPage.addEventListener('click', toggleHandler);
        }
    }

    // 2. Header Search Toggle & Interception
    const searchIcon = document.querySelector('#et_top_search');
    const searchContainer = document.querySelector('.et_search_form_container');
    const searchClose = document.querySelector('.et_close_search_field');
    const searchForm = document.querySelector('.et-search-form');

    if (searchIcon && searchContainer) {
        searchIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            searchContainer.classList.toggle('et_pb_search_visible');
            const searchInput = searchContainer.querySelector('input.et-search-field');
            if (searchInput && searchContainer.classList.contains('et_pb_search_visible')) {
                searchInput.focus();
            }
        });

        if (searchClose) {
            searchClose.addEventListener('click', (e) => {
                e.stopPropagation();
                searchContainer.classList.remove('et_pb_search_visible');
            });
        }
    }

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Search feature is disabled in static archive mode.');
        });
    }

    // 3. Contact Form Submission Interception
    const contactForms = document.querySelectorAll('.et_pb_contact_form');
    contactForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input:not([type=submit]), textarea');
            inputs.forEach(input => input.value = '');
            showToast('Thank you! Your message has been received (Static Demo Mode).');
        });
    });

    // 4. Zero-Overhead Homepage Carousel / Slider
    const sliderContainer = document.querySelector('#n2-ss-2');
    if (sliderContainer) {
        const slides = sliderContainer.querySelectorAll('.n2-ss-slide');
        let currentSlide = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.transition = 'opacity 0.8s ease-in-out';
                if (i === index) {
                    slide.style.display = 'block';
                    slide.style.opacity = '1';
                    slide.style.zIndex = '2';
                } else {
                    slide.style.display = 'none';
                    slide.style.opacity = '0';
                    slide.style.zIndex = '1';
                }
            });
        }

        if (totalSlides > 0) {
            showSlide(currentSlide);

            const nextSlide = () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            };

            const prevSlide = () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                showSlide(currentSlide);
            };

            let autoTimer = setInterval(nextSlide, 4500);

            const prevBtn = document.querySelector('#n2-ss-2-arrow-previous');
            const nextBtn = document.querySelector('#n2-ss-2-arrow-next');

            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    clearInterval(autoTimer);
                    prevSlide();
                    autoTimer = setInterval(nextSlide, 4500);
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    clearInterval(autoTimer);
                    nextSlide();
                    autoTimer = setInterval(nextSlide, 4500);
                });
            }
        }
    }

    // 5. Divi Scroll Animations
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.et_animated');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('et-animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(el => observer.observe(el));
    }

    // Helper Toast Notification
    function showToast(message) {
        let toast = document.querySelector('#static-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'static-toast';
            toast.style.position = 'fixed';
            toast.style.bottom = '24px';
            toast.style.right = '24px';
            toast.style.background = '#2c3e50';
            toast.style.color = '#fff';
            toast.style.padding = '14px 22px';
            toast.style.borderRadius = '6px';
            toast.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            toast.style.zIndex = '99999';
            toast.style.fontSize = '14px';
            toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
        }, 4000);
    }
});
