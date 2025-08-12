
        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        
        fadeElements.forEach(fadeElement => {
            appearOnScroll.observe(fadeElement);
        });        
        // Update year in footer
        document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} IAIMH. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>`;
