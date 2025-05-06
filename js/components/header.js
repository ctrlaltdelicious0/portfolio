// Check if file is loaded
console.log('header.js loaded');

gsap.from('.header_img', {
    opacity: 0,
    delay: 1,
    duration: 1,
});

gsap.from('.header_a', {
    opacity: 0,
    delay: 1.4,
    duration: 1,
    stagger: 0.2,
});