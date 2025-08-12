
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
        
        // Form submission
        const membershipForm = document.getElementById('membership-form');
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate passwords match
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // In a real implementation, you would submit the form to your backend
            alert('Thank you for your membership application! We will contact you shortly to complete the process.');
            membershipForm.reset();
            
            // You would typically redirect to payment processing or confirmation page
            // window.location.href = 'payment.html';
        });
        
        // Preselect tier if coming from tier selection
        const urlParams = new URLSearchParams(window.location.search);
        const selectedTier = urlParams.get('tier');
        if (selectedTier) {
            document.getElementById('membership-tier').value = selectedTier;
        }