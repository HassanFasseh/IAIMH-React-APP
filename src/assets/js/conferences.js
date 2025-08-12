        // Tab functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Year filter functionality
        const yearBtns = document.querySelectorAll('.year-btn');
        const conferenceCards = document.querySelectorAll('.conference-card[data-year]');
        
        yearBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                yearBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                const year = btn.getAttribute('data-year');
                
                // Filter conference cards
                conferenceCards.forEach(card => {
                    if (year === 'all' || card.getAttribute('data-year') === year) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });