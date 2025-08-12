import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
    useScrollAnimation();
    return (
        <>
            <section className="contact-hero">
                <div className="container contact-hero-content">
                <h1 className="fade-in">Get In Touch With Us</h1>
                <p className="fade-in">
                    Have questions about our programs, events, or membership? Our team is
                    here to help you with any inquiries.
                </p>
                </div>
            </section>
            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                <div className="contact-container">
                    <div className="contact-info fade-in">
                    <h2>Contact Information</h2>
                    <div className="contact-method">
                        <div className="contact-icon">
                        <i className="fas fa-phone-alt" />
                        </div>
                        <div className="contact-details">
                        <h3>Phone</h3>
                        <p>
                            <a href="tel:+212600000000">+212 600 000 000</a>
                        </p>
                        <p>Monday - Friday, 9am - 5pm GMT</p>
                        </div>
                    </div>
                    <div className="contact-method">
                        <div className="contact-icon">
                        <i className="fas fa-envelope" />
                        </div>
                        <div className="contact-details">
                        <h3>Email</h3>
                        <p>
                            <a href="mailto:info@iaimh.org">info@iaimh.org</a>
                        </p>
                        <p>We typically respond within 24 hours</p>
                        </div>
                    </div>
                    <div className="social-contact">
                        <h3>Connect With Us</h3>
                        <div className="social-links-contact">
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
                    </div>
                    <div className="contact-form-container fade-in">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required="" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required="" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <select id="subject" name="subject">
                            <option value="">Select a subject</option>
                            <option value="membership">Membership Inquiry</option>
                            <option value="conference">Conference Information</option>
                            <option value="courses">Courses &amp; Training</option>
                            <option value="partnership">Partnership Opportunities</option>
                            <option value="other">Other</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required=""
                            defaultValue={""}
                        />
                        </div>
                        <button type="submit" className="submit-btn">
                        Send Message
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                <div className="map-container fade-in">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.112324364299!2d-8.019848924034298!3d31.63388924258778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1689876543210!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="contact-faq">
                <div className="container">
                <div className="faq-container">
                    <h2 className="faq-title fade-in">Frequently Asked Questions</h2>
                    <div className="faq-item fade-in">
                    <div className="faq-question">
                        <span>How can I become a member of IAIMH?</span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    <div className="faq-answer">
                        <p>
                        You can join IAIMH by visiting our Membership page and selecting
                        the membership tier that best suits your needs. We offer
                        individual, student, and corporate membership options with varying
                        benefits.
                        </p>
                    </div>
                    </div>
                    <div className="faq-item fade-in">
                    <div className="faq-question">
                        <span>What are the upcoming conference dates?</span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    <div className="faq-answer">
                        <p>
                        Our next conference is the Future of Tech Summit in Marrakech from
                        June 15-17, 2025. You can find all upcoming events on our
                        Conferences page, where you can also register online.
                        </p>
                    </div>
                    </div>
                    <div className="faq-item fade-in">
                    <div className="faq-question">
                        <span>Do you offer discounts for group registrations?</span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    <div className="faq-answer">
                        <p>
                        Yes, we offer group discounts for organizations registering 5 or
                        more attendees for our conferences and courses. Please contact our
                        team for customized group rates and special arrangements.
                        </p>
                    </div>
                    </div>
                    <div className="faq-item fade-in">
                    <div className="faq-question">
                        <span>How can I submit a proposal for a conference talk?</span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    <div className="faq-answer">
                        <p>
                        We welcome speaker proposals through our Call for Papers page.
                        Submissions are typically open 6-9 months before each conference.
                        Our review committee evaluates all proposals based on relevance,
                        innovation, and practical application.
                        </p>
                    </div>
                    </div>
                    <div className="faq-item fade-in">
                    <div className="faq-question">
                        <span>Are your online courses self-paced or instructor-led?</span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    <div className="faq-answer">
                        <p>
                        We offer both options! Our course listings clearly indicate
                        whether a course is self-paced or instructor-led. Instructor-led
                        courses typically include live Q&amp;A sessions and interactive
                        components.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>

    );
}

export default Contact;
