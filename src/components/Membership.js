import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Membership = () => {
    useScrollAnimation();
    return (
        <>
            <section className="membership-hero">
                <div className="container membership-hero-content">
                <h1 className="fade-in">Join Our Global Innovation Community</h1>
                <p className="fade-in">
                    Access exclusive resources, networking opportunities, and cutting-edge
                    knowledge to advance your career and organization.
                </p>
                <div className="fade-in">
                    <a href="#register" className="btn btn-primary">
                    Join Now
                    </a>
                </div>
                </div>
            </section>
            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="container benefits-container">
                <h2 className="benefits-title fade-in">Membership Benefits</h2>
                <div className="benefits-grid">
                    {/* Benefit 1 */}
                    <div className="benefit-card fade-in">
                    <div className="benefit-icon">
                        <i className="fas fa-chalkboard-teacher" />
                    </div>
                    <h3 className="benefit-title">Exclusive Courses</h3>
                    <p className="benefit-description">
                        Access premium courses on AI, health innovation, and business
                        transformation not available to the public.
                    </p>
                    </div>
                    {/* Benefit 2 */}
                    <div className="benefit-card fade-in">
                    <div className="benefit-icon">
                        <i className="fas fa-users" />
                    </div>
                    <h3 className="benefit-title">Global Network</h3>
                    <p className="benefit-description">
                        Connect with professionals, researchers, and industry leaders across
                        multiple disciplines worldwide.
                    </p>
                    </div>
                    {/* Benefit 3 */}
                    <div className="benefit-card fade-in">
                    <div className="benefit-icon">
                        <i className="fas fa-calendar-alt" />
                    </div>
                    <h3 className="benefit-title">Member Events</h3>
                    <p className="benefit-description">
                        Attend exclusive webinars, roundtables, and networking events with
                        thought leaders and innovators.
                    </p>
                    </div>
                    {/* Benefit 4 */}
                    <div className="benefit-card fade-in">
                    <div className="benefit-icon">
                        <i className="fas fa-file-alt" />
                    </div>
                    <h3 className="benefit-title">Research Resources</h3>
                    <p className="benefit-description">
                        Get early access to white papers, case studies, and industry reports
                        before public release.
                    </p>
                    </div>
                    {/* Benefit 5 */}
                    <div className="benefit-card fade-in">
                    <div className="benefit-icon">
                        <i className="fas fa-percentage" />
                    </div>
                    <h3 className="benefit-title">Discounts &amp; Savings</h3>
                    <p className="benefit-description">
                        Receive significant discounts on conferences, courses, and
                        consulting services.
                    </p>
                    </div>
                    {/* Benefit 6 */}
                    <div className="benefit-card fade-in">
                    <div className="benefit-icon">
                        <i className="fas fa-certificate" />
                    </div>
                    <h3 className="benefit-title">Certification</h3>
                    <p className="benefit-description">
                        Earn professional certifications and digital badges to showcase your
                        expertise.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            {/* Membership Tiers */}
            <section className="membership-tiers">
                <div className="container">
                <h2 className="tiers-title fade-in">Choose Your Membership Tier</h2>
                <div className="tiers-container">
                    {/* Individual Tier */}
                    <div className="tier-card fade-in">
                    <div className="tier-header">
                        <h3 className="tier-name">Individual</h3>
                        <div className="tier-price">$99</div>
                        <div className="tier-duration">per year</div>
                    </div>
                    <div className="tier-features">
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Access to 5 premium courses/year</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Monthly member webinars</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Research library access</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>20% conference discounts</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Professional profile listing</span>
                        </div>
                    </div>
                    <a href="#register" className="tier-button">
                        Select Plan
                    </a>
                    </div>
                    {/* Professional Tier (Popular) */}
                    <div className="tier-card popular fade-in">
                    <div className="popular-badge">Most Popular</div>
                    <div className="tier-header">
                        <h3 className="tier-name">Professional</h3>
                        <div className="tier-price">$199</div>
                        <div className="tier-duration">per year</div>
                    </div>
                    <div className="tier-features">
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Unlimited premium courses</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Bi-weekly expert sessions</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Early research access</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>30% conference discounts</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Exclusive networking events</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Professional certification</span>
                        </div>
                    </div>
                    <a href="#register" className="tier-button">
                        Select Plan
                    </a>
                    </div>
                    {/* Enterprise Tier */}
                    <div className="tier-card fade-in">
                    <div className="tier-header">
                        <h3 className="tier-name">Enterprise</h3>
                        <div className="tier-price">$999</div>
                        <div className="tier-duration">per year</div>
                    </div>
                    <div className="tier-features">
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>5 team member seats</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Custom training sessions</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Strategic advisory hours</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>50% conference discounts</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Organization profile listing</span>
                        </div>
                        <div className="tier-feature">
                        <i className="fas fa-check" />
                        <span>Priority support</span>
                        </div>
                    </div>
                    <a href="#register" className="tier-button">
                        Select Plan
                    </a>
                    </div>
                </div>
                </div>
            </section>
            {/* Registration Section */}
            <section className="registration-section" id="register">
                <div className="container registration-container">
                <h2 className="registration-title fade-in">Become a Member</h2>
                <div className="registration-form fade-in">
                    <form id="membership-form">
                    <div className="form-row">
                        <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            className="form-control"
                            required=""
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            className="form-control"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                        type="email"
                        id="email"
                        className="form-control"
                        required=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organization">Organization (Optional)</label>
                        <input type="text" id="organization" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job-title">Job Title</label>
                        <input
                        type="text"
                        id="job-title"
                        className="form-control"
                        required=""
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="membership-tier">Membership Tier</label>
                        <select id="membership-tier" className="form-control" required="">
                        <option value="">Select a tier</option>
                        <option value="individual">Individual ($99/year)</option>
                        <option value="professional">Professional ($199/year)</option>
                        <option value="enterprise">Enterprise ($999/year)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Create Password</label>
                        <input
                        type="password"
                        id="password"
                        className="form-control"
                        required=""
                        minLength={8}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                        type="password"
                        id="confirm-password"
                        className="form-control"
                        required=""
                        minLength={8}
                        />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="terms" required="" />
                        <label htmlFor="terms">
                        I agree to the <a href="#">Terms of Service</a> and{" "}
                        <a href="#">Privacy Policy</a>
                        </label>
                    </div>
                    <button type="submit" className="form-submit">
                        Complete Registration
                    </button>
                    <div className="login-prompt">
                        Already have an account? <a href="/Auth">Sign in</a>
                    </div>
                    </form>
                </div>
                </div>
            </section>
            </>

    );
}

export default Membership;
