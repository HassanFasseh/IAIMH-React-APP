import { useEffect } from 'react';

export default function useMobileMenu() {
  useEffect(() => {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.nav-links');

    const toggleMenu = () => {
      menu?.classList.toggle('active');
    };

    menuButton?.addEventListener('click', toggleMenu);
    
    return () => {
      menuButton?.removeEventListener('click', toggleMenu);
    };
  }, []);
}