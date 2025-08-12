import { useEffect } from 'react';

export default function useScrollAnimation(deps = []) {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    fadeElements.forEach(fadeElement => {
      // First remove the visible class to reset animation
      fadeElement.classList.remove('visible');
      // Then observe the element
      appearOnScroll.observe(fadeElement);
    });

    return () => {
      fadeElements.forEach(fadeElement => {
        appearOnScroll.unobserve(fadeElement);
      });
    };
  }, deps); // Re-run when dependencies change
}