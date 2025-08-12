
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
        
        // Service tab functionality
        const serviceTabs = document.querySelectorAll('.service-tab');
        const serviceCategories = document.querySelectorAll('.service-category');
        
        serviceTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and categories
                serviceTabs.forEach(t => t.classList.remove('active'));
                serviceCategories.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding category
                const categoryId = tab.getAttribute('data-category') + '-category';
                document.getElementById(categoryId).classList.add('active');
            });
        });