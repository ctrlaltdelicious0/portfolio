// Check if file is loaded
console.log('scroll_up.js loaded');

// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the scroll-up button
    const scrollUpButton = document.querySelector('.scroll_up_button');

    // Set initial opacity to 0 (hidden)
    gsap.set(scrollUpButton, { opacity: 0 });

    // Set up a scroll event listener
    window.addEventListener('scroll', function () {
        // Check if the page has been scrolled past 10vh
        if (window.scrollY > window.innerHeight * 0.1) {
            // Animate opacity to 1 (visible)
            gsap.to(scrollUpButton, { opacity: 1, duration: 0.5 });
        } else {
            // Animate opacity back to 0 (hidden)
            gsap.to(scrollUpButton, { opacity: 0, duration: 0.5 });
        }
    });

    // Set up click event to scroll to the top of the page
    scrollUpButton.addEventListener('click', function () {
        gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 1,
            ease: 'power2.inOut'
        });
    });
});