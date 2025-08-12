import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
    useScrollAnimation();
    const [activeCategory, setActiveCategory] = useState('ai');

    const categories = [
        { id: 'ai', name: 'AI Solutions' },
        { id: 'health', name: 'Health Innovation' },
        { id: 'business', name: 'Business Transformation' },
        { id: 'integrated', name: 'Integrated Services' }
    ];

    return (
        <>
            <section className="services-hero">
                <div className="container services-hero-content">
                    <h1 className="fade-in">Transformative Solutions for Your Business</h1>
                    <p className="fade-in">
                        Leverage our cutting-edge services at the intersection of AI, health,
                        and business to drive innovation and growth.
                    </p>
                    <div className="fade-in">
                        <a href="#services" className="btn btn-primary">
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>

            <section className="services-intro">
                <div className="container">
                    <h2 className="fade-in">Integrated Solutions for Modern Challenges</h2>
                    <p className="fade-in">
                        At IAIMH, we bridge the gap between artificial intelligence, healthcare
                        innovation, and business transformation. Our multidisciplinary approach
                        delivers comprehensive solutions tailored to your organization's needs.
                    </p>
                </div>
            </section>

            <section className="section" id="services">
                <div className="container">
                    <div className="service-tabs fade-in">
                        {categories.map(category => (
                            <div 
                                key={category.id}
                                className={`service-tab ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                                data-category={category.id}
                            >
                                {category.name}
                            </div>
                        ))}
                    </div>

                    <div className="service-categories">
                        {/* AI Services */}
                        <div className={`service-category ${activeCategory === 'ai' ? 'active' : ''}`} id="ai-category">
                            <h3 className="service-category-title">Artificial Intelligence Services</h3>
                            <div className="service-grid">
                                <div className="service-card fade-in">
                                    <div className="service-image">
                                        <img
                                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                            alt="AI Strategy"
                                        />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="service-title">AI Strategy Development</h3>
                                        <p className="service-description">
                                            Comprehensive roadmap for AI integration tailored to your
                                            business objectives and industry requirements.
                                        </p>
                                        <div className="service-features">
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>Custom AI adoption roadmap</span>
                                            </div>
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>Technology stack evaluation</span>
                                            </div>
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>ROI analysis and implementation plan</span>
                                            </div>
                                        </div>
                                        <div className="service-cta">
                                            <span className="service-price">Starting at $5,000</span>
                                            <a href="#" className="service-btn">Learn More</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-card fade-in">
                                    <div className="service-image">
                                        <img
                                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                            alt="Machine Learning"
                                        />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="service-title">Custom Machine Learning Solutions</h3>
                                        <p className="service-description">
                                            Development of bespoke ML models to solve your specific
                                            business challenges and automate processes.
                                        </p>
                                        <div className="service-features">
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>Predictive analytics models</span>
                                            </div>
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>Natural language processing</span>
                                            </div>
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>Computer vision applications</span>
                                            </div>
                                        </div>
                                        <div className="service-cta">
                                            <span className="service-price">Custom Pricing</span>
                                            <a href="#" className="service-btn">Get Quote</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-card fade-in">
                                    <div className="service-image">
                                        <img
                                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                            alt="AI Ethics"
                                        />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="service-title">AI Ethics & Compliance</h3>
                                        <p className="service-description">
                                            Ensure your AI systems meet ethical standards and regulatory
                                            requirements with our comprehensive audit.
                                        </p>
                                        <div className="service-features">
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>Bias detection and mitigation</span>
                                            </div>
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>GDPR and regulatory compliance</span>
                                            </div>
                                            <div className="service-feature">
                                                <i className="fas fa-check-circle" />
                                                <span>Transparency and explainability</span>
                                            </div>
                                        </div>
                                        <div className="service-cta">
                                            <span className="service-price">Starting at $3,500</span>
                                            <a href="#" className="service-btn">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Health Services */}
                        <div className={`service-category ${activeCategory === 'health' ? 'active' : ''}`} id="health-category">
                            <h3 className="service-category-title">Health Innovation Services</h3>
                            <div className="service-grid">
                                {/* Health Service 1 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Digital Health"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Digital Health Transformation</h3>
                                    <p className="service-description">
                                    Comprehensive strategy for integrating digital technologies
                                    into healthcare delivery and operations.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Telemedicine implementation</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Electronic health records optimization</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Patient engagement solutions</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Starting at $7,500</span>
                                    <a href="#" className="service-btn">
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                </div>
                                {/* Health Service 2 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="AI Diagnostics"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">
                                    AI-Powered Diagnostic Solutions
                                    </h3>
                                    <p className="service-description">
                                    Implement cutting-edge AI diagnostic tools to enhance accuracy
                                    and efficiency in medical imaging and lab results.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Medical image analysis</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Predictive diagnostics</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Clinical decision support</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Custom Pricing</span>
                                    <a href="#" className="service-btn">
                                        Get Quote
                                    </a>
                                    </div>
                                </div>
                                </div>
                                {/* Health Service 3 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Health Data"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Health Data Analytics</h3>
                                    <p className="service-description">
                                    Unlock insights from your healthcare data with our advanced
                                    analytics and visualization solutions.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Population health analysis</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Operational efficiency metrics</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Predictive modeling for patient outcomes</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Starting at $6,000</span>
                                    <a href="#" className="service-btn">
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>


                        {/* Business Services */}
                        <div className={`service-category ${activeCategory === 'business' ? 'active' : ''}`} id="business-category">
                            <h3 className="service-category-title">
                                Business Transformation Services
                            </h3>
                            <div className="service-grid">
                                {/* Business Service 1 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Digital Transformation"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">
                                    Digital Transformation Consulting
                                    </h3>
                                    <p className="service-description">
                                    Comprehensive roadmap for digital transformation to
                                    future-proof your business operations.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Process automation strategy</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Customer experience enhancement</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Technology stack modernization</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Starting at $8,000</span>
                                    <a href="#" className="service-btn">
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                </div>
                                {/* Business Service 2 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
                                    alt="Data Strategy"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">Data-Driven Decision Making</h3>
                                    <p className="service-description">
                                    Implement data analytics frameworks to drive strategic
                                    business decisions and operational improvements.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Business intelligence implementation</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>KPIs and dashboard development</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Predictive analytics for business</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Starting at $6,500</span>
                                    <a href="#" className="service-btn">
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                </div>
                                {/* Business Service 3 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Innovation Strategy"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">
                                    Innovation Strategy Development
                                    </h3>
                                    <p className="service-description">
                                    Foster a culture of innovation with structured frameworks for
                                    ideation, prototyping, and implementation.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Innovation workshop facilitation</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>R&amp;D process optimization</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Open innovation programs</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Starting at $7,000</span>
                                    <a href="#" className="service-btn">
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                </div>                   
                            </div>
                        </div>

                        {/* Integrated Services */}
                        <div className={`service-category ${activeCategory === 'integrated' ? 'active' : ''}`} id="integrated-category">
                            <h3 className="service-category-title">
                                Integrated AI+Health+Business Services
                            </h3>
                            <div className="service-grid">
                                {/* Integrated Service 1 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="HealthTech"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">
                                    HealthTech Startup Accelerator
                                    </h3>
                                    <p className="service-description">
                                    Comprehensive program for HealthTech startups combining AI
                                    expertise, healthcare domain knowledge, and business strategy.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Regulatory pathway planning</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Clinical validation support</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Investor readiness preparation</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Custom Pricing</span>
                                    <a href="#" className="service-btn">
                                        Get Quote
                                    </a>
                                    </div>
                                </div>
                                </div>
                                {/* Integrated Service 2 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="AI in Healthcare"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">
                                    AI in Healthcare Implementation
                                    </h3>
                                    <p className="service-description">
                                    End-to-end implementation of AI solutions in healthcare
                                    settings with clinical and business integration.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Workflow integration analysis</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Staff training and change management</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>ROI measurement framework</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Starting at $15,000</span>
                                    <a href="#" className="service-btn">
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                </div>
                                {/* Integrated Service 3 */}
                                <div className="service-card fade-in">
                                <div className="service-image">
                                    <img
                                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                                    alt="Digital Health"
                                    />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">
                                    Digital Health Business Model Innovation
                                    </h3>
                                    <p className="service-description">
                                    Develop sustainable business models for digital health
                                    solutions that leverage AI and create value.
                                    </p>
                                    <div className="service-features">
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Market opportunity assessment</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Revenue model development</span>
                                    </div>
                                    <div className="service-feature">
                                        <i className="fas fa-check-circle" />
                                        <span>Partnership strategy</span>
                                    </div>
                                    </div>
                                    <div className="service-cta">
                                    <span className="service-price">Starting at $12,000</span>
                                    <a href="#" className="service-btn">
                                        Learn More
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
            </section>

            <section className="consultation-cta fade-in">
                <div className="container">
                    <h2>Need a Custom Solution?</h2>
                    <p>
                        Our experts can develop tailored services that combine AI, health, and
                        business strategies to meet your specific challenges.
                    </p>
                    <a href="/Contact" target="_blank" className="btn">Request Consultation</a>
                </div>
            </section>
        </>
    );
}

export default Services;