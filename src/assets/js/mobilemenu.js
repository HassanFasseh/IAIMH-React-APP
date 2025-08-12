// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');

console.log('Mobile menu button:', mobileMenuBtn); // Check if element is found
console.log('Nav element:', nav); // Check if nav is found

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        console.log('Button clicked'); // Verify click event fires
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
} else {
    console.error('Could not find mobile menu elements');
}