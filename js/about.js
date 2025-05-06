// Check if file is loaded
console.log('about.js loaded');

// Scroll down to about if CTA is clicked from home
window.addEventListener('load', function () {
    // Check if the flag is set in localStorage
    if (localStorage.getItem('scrollToSection') === 'true') {
        // Perform the scroll animation using GSAP
        gsap.to(window, {
            delay: 2,
            duration: 1,
            scrollTo: ".section_about",
            ease: "power2.inOut"
        });

        // Remove the flag from localStorage after scrolling
        localStorage.removeItem('scrollToSection');
    }
});

// Font-safe animation initialization
if (document.fonts) {
    document.fonts.ready.then(initAnimations);
} else {
    // Fallback for older browsers
    window.addEventListener('load', initAnimations);
}

function initAnimations() {
    // Title Section animations
    const splitH1 = new SplitText('.section_title_h1', { type: 'chars' });
    const splitH3 = new SplitText('.section_title_h3', { type: 'chars' });

    gsap.from(splitH1.chars,
        {
            y: 20,
            opacity: 0,
            delay: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.04
        });

    gsap.from(splitH3.chars,
        {
            y: 20,
            opacity: 0,
            delay: 1.4,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.01
        });

    gsap.fromTo(".section_about_img",
        {
            opacity: 0
        },
        {
            opacity: 1,
            delay: 1.8,
            duration: 1,
            ease: "power2.out"
        }
    );

    gsap.from(".section_about_animation",
        {
            delay: 2,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        });
}