import React from 'react';
import logo from '../assets/img/white-logo.png';


const Footer = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
            <footer>
                <div className="container">
                <div className="footer-container">
                    <div className="footer-about">
                    <a href="/" className="footer-logo">
                        <img
                        src={logo}
                        alt="IAIMH Logo"
                        className="footer-logo-image"
                        />
                    </a>
                    <p>
                        Empowering professionals with knowledge, networking, and resources
                        to drive innovation across industries.
                    </p>
                    <div className="social-links">
                        <a href="#">
                        <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                        <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                        <i className="fab fa-youtube" />
                        </a>
                    </div>
                    </div>
                    <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/About">About Us</a>
                        </li>
                        <li>
                        <a href="/Conferences">Conferences</a>
                        </li>
                        <li>
                        <a href="/Courses">Courses</a>
                        </li>
                        <li>
                        <a href="/Membership">Membership</a>
                        </li>
                        <li>
                        <a href="/Contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                    <div className="footer-links">
                    <h3>Resources</h3>
                    <ul>
                        <li>
                        <a href="#">Blog</a>
                        </li>
                        <li>
                        <a href="#">Research Papers</a>
                        </li>
                        <li>
                        <a href="#">Case Studies</a>
                        </li>
                        <li>
                        <a href="#">Webinars</a>
                        </li>
                        <li>
                        <a href="#">FAQ</a>
                        </li>
                    </ul>
                    </div>
                    <div className="newsletter">
                    <h3>Newsletter</h3>
                    <p>
                        Subscribe to our newsletter to receive updates on events, courses,
                        and industry insights.
                    </p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">
                        <i className="fas fa-paper-plane" />
                        </button>
                    </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                    © 2025 IAIMH. All rights reserved. | <a href="#">Privacy Policy</a> |{" "}
                    <a href="#">Terms of Service</a>
                    </p>
                </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
