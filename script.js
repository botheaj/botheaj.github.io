
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = menuButton ? menuButton.querySelector('svg.block') : null;
    const closeIcon = menuButton ? menuButton.querySelector('svg.hidden') : null;

    if (menuButton && mobileMenu && openIcon && closeIcon) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            openIcon.classList.toggle('hidden');
            openIcon.classList.toggle('block');
            closeIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('block');
            const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
            menuButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scroll for anchor links (if you add any within-page links like #section)
    // This is already handled by `html { scroll-behavior: smooth; }` in CSS for simple cases.
    // For more complex scenarios or if CSS method is not supported, you can use JS:
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         const hrefAttribute = this.getAttribute('href');
    //         if (hrefAttribute && hrefAttribute.length > 1) { // Ensure it's not just "#"
    //             const targetElement = document.querySelector(hrefAttribute);
    //             if (targetElement) {
    //                 e.preventDefault();
    //                 targetElement.scrollIntoView({
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         }
    //     });
    // });
});