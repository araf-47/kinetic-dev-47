document.addEventListener("DOMContentLoaded", () => {
    
    // Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stops observing once revealed
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Smooth scrolling for anchor links in the navbar
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for the fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smart Navbar Auto-Hide Logic
    let lastScrollTop = 0;
    const navbar = document.querySelector('.custom-nav');

    window.addEventListener('scroll', () => {
        // Get current scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // If scrolling down AND past the height of the navbar (so it doesn't glitch at the very top)
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            navbar.classList.add('nav-hidden');
        } else {
            // If scrolling up OR at the very top
            navbar.classList.remove('nav-hidden');
        }
        
        // Update the last scroll position
        lastScrollTop = scrollTop;
    });
});