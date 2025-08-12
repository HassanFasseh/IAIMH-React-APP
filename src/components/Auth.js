import React from 'react';
import logo from '../assets/img/logo.png'; // Adjust the path as necessary


const Auth = () => {
    return (
        <>
            <div className="particles" id="particles" />
                <div className="auth-container">
                    <div className="logo-container">
                    {/* <a href="/" aria-label="Go to homepage">
                        <img src={logo} alt="IAIMH Logo" />
                    </a> */}
                    <a href="/" aria-label="Go to homepage">
                        <img src="https://i.ibb.co/NnfXBq9m/logo.png" alt="IAIMH Logo" border={0} />
                    </a>
                    </div>
                    <div className="auth-header">
                    <div className="auth-toggle">
                        <button className="auth-toggle-btn active" id="login-toggle">
                        Login
                        </button>
                        <button className="auth-toggle-btn" id="signup-toggle">
                        Sign Up
                        </button>
                        <div className="auth-toggle-slider" />
                    </div>
                    </div>
                    <div className="auth-form-container">
                    {/* Success message (hidden by default) */}
                    <div className="success-message" id="success-message">
                        <i className="fas fa-check-circle" /> Account created successfully!
                        Please log in.
                    </div>
                    <form className="auth-form active" id="login-form">
                        <div className="form-group">
                        <label htmlFor="login-email">Email Address</label>
                        <input
                            type="email"
                            id="login-email"
                            className="form-control"
                            placeholder="Enter your email"
                            required=""
                        />
                        <div className="error-message" id="login-email-error" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <div className="password-wrapper">
                            <input
                            type="password"
                            id="login-password"
                            className="form-control"
                            placeholder="Enter your password"
                            required=""
                            minLength={8}
                            />
                            <span className="password-toggle" id="login-password-toggle">
                            <i className="far fa-eye" />
                            </span>
                        </div>
                        <div className="error-message" id="login-password-error" />
                        <a href="#" className="forgot-password">
                            Forgot password?
                        </a>
                        </div>
                        <button type="submit" className="btn btn-primary" id="login-btn">
                        <span id="login-text">Access Portal</span>
                        <div className="spinner" id="login-spinner" />
                        </button>
                        <div className="divider">or continue with</div>
                        <div className="social-login">
                        <button
                            type="button"
                            className="social-btn google"
                            aria-label="Login with Google"
                        >
                            <i className="fab fa-google" />
                        </button>
                        <button
                            type="button"
                            className="social-btn linkedin"
                            aria-label="Login with LinkedIn"
                        >
                            <i className="fab fa-linkedin-in" />
                        </button>
                        <button
                            type="button"
                            className="social-btn twitter"
                            aria-label="Login with Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </button>
                        </div>
                    </form>
                    <form className="auth-form" id="signup-form">
                        <div className="form-group">
                        <label htmlFor="signup-name">Full Name</label>
                        <input
                            type="text"
                            id="signup-name"
                            className="form-control"
                            placeholder="Enter your full name"
                            required=""
                        />
                        <div className="error-message" id="signup-name-error" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="signup-email">Email Address</label>
                        <input
                            type="email"
                            id="signup-email"
                            className="form-control"
                            placeholder="Enter your email"
                            required=""
                        />
                        <div className="error-message" id="signup-email-error" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="signup-password">Create Password</label>
                        <div className="password-wrapper">
                            <input
                            type="password"
                            id="signup-password"
                            className="form-control"
                            placeholder="Create a password"
                            required=""
                            minLength={8}
                            />
                            <span className="password-toggle" id="signup-password-toggle">
                            <i className="far fa-eye" />
                            </span>
                        </div>
                        <small className="password-hint">
                            Use 8+ characters with letters and numbers
                        </small>
                        <div className="error-message" id="signup-password-error" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="signup-confirm-password">Confirm Password</label>
                        <div className="password-wrapper">
                            <input
                            type="password"
                            id="signup-confirm-password"
                            className="form-control"
                            placeholder="Confirm your password"
                            required=""
                            minLength={8}
                            />
                            <span
                            className="password-toggle"
                            id="signup-confirm-password-toggle"
                            >
                            <i className="far fa-eye" />
                            </span>
                        </div>
                        <div className="error-message" id="signup-confirm-password-error" />
                        </div>
                        <button type="submit" className="btn btn-primary" id="signup-btn">
                        <span id="signup-text">Create Account</span>
                        <div className="spinner" id="signup-spinner" />
                        </button>
                        <div className="auth-footer">
                        Already have an account?{" "}
                        <a href="#" id="switch-to-login">
                            Log in
                        </a>
                        </div>
                    </form>
                    </div>
                </div>
        </>
    );
}

export default Auth;
