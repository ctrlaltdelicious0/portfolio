// Check if file is loaded
console.log('index.js loaded');

// Font-safe animation initialization
if (document.fonts) {
    document.fonts.ready.then(initAnimations);
} else {
    // Fallback for older browsers
    window.addEventListener('load', initAnimations);
}

function initAnimations() {
    // Hero Section animations
    const splitH1 = new SplitText('.section_hero_h1', { type: 'chars' });
    const splitH3 = new SplitText('.section_hero_h3', { type: 'chars' });

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

    gsap.fromTo('.section_hero_button',
        {
            opacity: 0
        }, {
        opacity: 1,
        delay: 1.8,
        duration: 1,
        ease: "power1.out"
    });

    // Project Section animations
    gsap.from('.section_projects_img',
        {
            opacity: 0,
            delay: 2,
            duration: 1,
            stagger: 0.2,
        });
}

// Hero Section redirects
document.querySelector('.section_hero_button').addEventListener('click', function () {
    // Set a flag in localStorage when the button is clicked
    localStorage.setItem('scrollToSection', 'true');

    setTimeout(function () {
        window.location.href = 'about.html';
    }, 500);
});

// Project Section redirects
document.getElementById('section_projects_redirect_dccs').addEventListener('click', function () {
    window.open('https://doncarlocavinaschool.vercel.app/', '_blank', 'noopener,noreferrer');
});

document.getElementById('section_projects_redirect_general_physics').addEventListener('click', function () {
    window.open('https://ctrlaltdelicious0.github.io/general-physics/', '_blank', 'noopener,noreferrer');
});

document.getElementById('section_projects_redirect_genscent').addEventListener('click', function () {
    window.open('https://genscent.vercel.app/', '_blank', 'noopener,noreferrer');
});

document.getElementById('section_projects_redirect_grimory').addEventListener('click', function () {
    window.open('https://ctrlaltdelicious0.github.io/grimory/', '_blank', 'noopener,noreferrer');
});

document.getElementById('section_projects_redirect_parem_ventures').addEventListener('click', function () {
    window.open('https://paremventures.com', '_blank', 'noopener,noreferrer');
});

document.getElementById('section_projects_redirect_st_patrick_gallery').addEventListener('click', function () {
    window.open('https://stpatrickgallery.vercel.app/', '_blank', 'noopener,noreferrer');
});