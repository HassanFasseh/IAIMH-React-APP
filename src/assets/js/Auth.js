
        document.addEventListener('DOMContentLoaded', function() {
            // Create floating particles
            function createParticles() {
                const particlesContainer = document.getElementById('particles');
                const particleCount = window.innerWidth < 768 ? 15 : 30;
                
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    
                    // Random size between 2px and 6px
                    const size = Math.random() * 4 + 2;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    
                    // Random position
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100 + 100}%`;
                    
                    // Random animation duration between 10s and 20s
                    const duration = Math.random() * 10 + 10;
                    particle.style.animationDuration = `${duration}s`;
                    
                    // Random delay
                    particle.style.animationDelay = `${Math.random() * 5}s`;
                    
                    particlesContainer.appendChild(particle);
                }
            }
            
            createParticles();

            // DOM Elements
            const loginToggle = document.getElementById('login-toggle');
            const signupToggle = document.getElementById('signup-toggle');
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const authToggle = document.querySelector('.auth-toggle');
            const switchToLogin = document.getElementById('switch-to-login');
            const successMessage = document.getElementById('success-message');

            // Check if we're coming from a successful signup
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('signup') && urlParams.get('signup') === 'success') {
                showSignupSuccess();
            }

            // Show signup success message and switch to login
            function showSignupSuccess() {
                successMessage.style.display = 'block';
                authToggle.classList.remove('signed-up');
                loginToggle.classList.add('active');
                signupToggle.classList.remove('active');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
                
                // Hide after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }

            // Toggle between login and signup forms
            loginToggle.addEventListener('click', () => {
                authToggle.classList.remove('signed-up');
                loginToggle.classList.add('active');
                signupToggle.classList.remove('active');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
                successMessage.style.display = 'none';
            });

            signupToggle.addEventListener('click', () => {
                authToggle.classList.add('signed-up');
                signupToggle.classList.add('active');
                loginToggle.classList.remove('active');
                signupForm.classList.add('active');
                loginForm.classList.remove('active');
                successMessage.style.display = 'none';
            });

            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                authToggle.classList.remove('signed-up');
                loginToggle.classList.add('active');
                signupToggle.classList.remove('active');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
                successMessage.style.display = 'none';
            });

            // Password toggle functionality
            function setupPasswordToggle(toggleId, inputId) {
                const toggle = document.getElementById(toggleId);
                const input = document.getElementById(inputId);
                
                toggle.addEventListener('click', () => {
                    if (input.type === 'password') {
                        input.type = 'text';
                        toggle.innerHTML = '<i class="far fa-eye-slash"></i>';
                    } else {
                        input.type = 'password';
                        toggle.innerHTML = '<i class="far fa-eye"></i>';
                    }
                });
            }

            setupPasswordToggle('login-password-toggle', 'login-password');
            setupPasswordToggle('signup-password-toggle', 'signup-password');
            setupPasswordToggle('signup-confirm-password-toggle', 'signup-confirm-password');

            // Form validation
            function showError(inputId, message) {
                const input = document.getElementById(inputId);
                const errorElement = document.getElementById(`${inputId}-error`);
                
                input.classList.add('error');
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }

            function hideError(inputId) {
                const input = document.getElementById(inputId);
                const errorElement = document.getElementById(`${inputId}-error`);
                
                input.classList.remove('error');
                errorElement.style.display = 'none';
            }

            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(String(email).toLowerCase());
            }

            function validatePassword(password) {
                // At least 8 characters, one letter and one number
                const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                return re.test(password);
            }

            // Login form submission
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                let isValid = true;
                
                // Validate email
                if (!email) {
                    showError('login-email', 'Email is required');
                    isValid = false;
                } else if (!validateEmail(email)) {
                    showError('login-email', 'Please enter a valid email');
                    isValid = false;
                } else {
                    hideError('login-email');
                }
                
                // Validate password
                if (!password) {
                    showError('login-password', 'Password is required');
                    isValid = false;
                } else if (password.length < 8) {
                    showError('login-password', 'Password must be at least 8 characters');
                    isValid = false;
                } else {
                    hideError('login-password');
                }
                
                if (!isValid) return;
                
                // Show loading spinner
                const loginBtn = document.getElementById('login-btn');
                const loginText = document.getElementById('login-text');
                const loginSpinner = document.getElementById('login-spinner');
                
                loginText.style.display = 'none';
                loginSpinner.style.display = 'block';
                loginBtn.disabled = true;
                
                // Simulate API call (replace with actual API call)
                try {
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    
                    // For demo purposes - always "success"
                    console.log('Login successful', { email, password });
                    alert('Login successful! (This is a demo)');
                    
                    // In a real app, you would redirect or handle the login response
                    // window.location.href = '/dashboard';
                } catch (error) {
                    console.error('Login error:', error);
                    showError('login-password', 'Invalid email or password');
                } finally {
                    loginText.style.display = 'block';
                    loginSpinner.style.display = 'none';
                    loginBtn.disabled = false;
                }
            });

            // Signup form submission
            signupForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const name = document.getElementById('signup-name').value;
                const email = document.getElementById('signup-email').value;
                const password = document.getElementById('signup-password').value;
                const confirmPassword = document.getElementById('signup-confirm-password').value;
                let isValid = true;
                
                // Validate name
                if (!name) {
                    showError('signup-name', 'Full name is required');
                    isValid = false;
                } else if (name.length < 2) {
                    showError('signup-name', 'Name is too short');
                    isValid = false;
                } else {
                    hideError('signup-name');
                }
                
                // Validate email
                if (!email) {
                    showError('signup-email', 'Email is required');
                    isValid = false;
                } else if (!validateEmail(email)) {
                    showError('signup-email', 'Please enter a valid email');
                    isValid = false;
                } else {
                    hideError('signup-email');
                }
                
                // Validate password
                if (!password) {
                    showError('signup-password', 'Password is required');
                    isValid = false;
                } else if (password.length < 8) {
                    showError('signup-password', 'Password must be at least 8 characters');
                    isValid = false;
                } else if (!validatePassword(password)) {
                    showError('signup-password', 'Password must contain at least one letter and one number');
                    isValid = false;
                } else {
                    hideError('signup-password');
                }
                
                // Validate confirm password
                if (!confirmPassword) {
                    showError('signup-confirm-password', 'Please confirm your password');
                    isValid = false;
                } else if (password !== confirmPassword) {
                    showError('signup-confirm-password', 'Passwords do not match');
                    isValid = false;
                } else {
                    hideError('signup-confirm-password');
                }
                
                if (!isValid) return;
                
                // Show loading spinner
                const signupBtn = document.getElementById('signup-btn');
                const signupText = document.getElementById('signup-text');
                const signupSpinner = document.getElementById('signup-spinner');
                
                signupText.style.display = 'none';
                signupSpinner.style.display = 'block';
                signupBtn.disabled = true;
                
                // Simulate API call (replace with actual API call)
                try {
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    
                    // For demo purposes - always "success"
                    console.log('Signup successful', { name, email, password });
                    
                    // Show success message and switch to login
                    showSignupSuccess();
                    
                    // In a real app, you might redirect with a success parameter
                    // window.location.href = '?signup=success';
                } catch (error) {
                    console.error('Signup error:', error);
                    if (error.message.includes('email')) {
                        showError('signup-email', 'This email is already registered');
                    } else {
                        showError('signup-email', 'An error occurred. Please try again.');
                    }
                } finally {
                    signupText.style.display = 'block';
                    signupSpinner.style.display = 'none';
                    signupBtn.disabled = false;
                }
            });

            // Forgot password link
            document.querySelector('.forgot-password').addEventListener('click', (e) => {
                e.preventDefault();
                const email = document.getElementById('login-email').value;
                if (email && validateEmail(email)) {
                    alert(`Password reset link will be sent to ${email} (This is a demo)`);
                } else {
                    alert('Please enter your email address first');
                }
            });

            // Social login buttons
            document.querySelectorAll('.social-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const service = btn.classList.contains('google') ? 'Google' : 
                                  btn.classList.contains('linkedin') ? 'LinkedIn' : 'Twitter';
                    alert(`Redirecting to ${service} login (This is a demo)`);
                });
            });
        });