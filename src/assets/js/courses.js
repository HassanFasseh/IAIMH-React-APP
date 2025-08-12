
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
        
        // Category filter buttons
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Here you would add filtering logic
            });
        });
        
        // Pagination buttons
        const pageBtns = document.querySelectorAll('.page-btn:not(:first-child):not(:last-child)');
        pageBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.page-btn.active').classList.remove('active');
                btn.classList.add('active');
                // Here you would add pagination logic
            });
        });