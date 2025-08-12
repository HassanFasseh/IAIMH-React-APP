import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    useScrollAnimation();
    return (
        <>
        <section className="about-hero">
            <div className="container about-hero-content">
            <h1 className="fade-in">
                Pioneering Innovation at the Intersection of AI, Health &amp; Business
            </h1>
            <p className="fade-in">
                Discover our mission, meet our team, and explore insights shaping the
                future of technology and healthcare.
            </p>
            </div>
        </section>
        {/* Mission Section */}
        <section className="about-mission">
            <div className="container mission-container">
            <div className="mission-content">
                <h2 className="fade-in">Our Mission</h2>
                <p className="fade-in">
                IAIMH was founded to bridge the gap between artificial intelligence,
                healthcare innovation, and business transformation. We believe in the
                power of interdisciplinary collaboration to solve complex challenges.
                </p>
                <p className="fade-in">
                Since our establishment in 2024, we've grown into a global community
                of researchers, practitioners, and business leaders committed to
                ethical and impactful innovation.
                </p>
                <div className="fade-in">
                <a href="#" className="btn btn-primary">
                    Learn Our Story
                </a>
                </div>
            </div>
            <div className="mission-image fade-in">
                <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Team collaborating"
                />
            </div>
            </div>
        </section>
        {/* Values Section */}
        <section className="values-section">
            <div className="container">
            <h2 className="values-title fade-in">Our Core Values</h2>
            <div className="values-grid">
                {/* Value 1 */}
                <div className="value-card fade-in">
                <div className="value-icon">
                    <i className="fas fa-lightbulb" />
                </div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                    We champion bold ideas and transformative solutions that push
                    boundaries in AI and healthcare.
                </p>
                </div>
                {/* Value 2 */}
                <div className="value-card fade-in">
                <div className="value-icon">
                    <i className="fas fa-hand-holding-heart" />
                </div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">
                    Ethical considerations guide all our initiatives, ensuring
                    responsible development and deployment of technology.
                </p>
                </div>
                {/* Value 3 */}
                <div className="value-card fade-in">
                <div className="value-icon">
                    <i className="fas fa-users" />
                </div>
                <h3 className="value-title">Collaboration</h3>
                <p className="value-description">
                    We believe the best solutions emerge when diverse experts work
                    together across disciplines.
                </p>
                </div>
                {/* Value 4 */}
                <div className="value-card fade-in">
                <div className="value-icon">
                    <i className="fas fa-graduation-cap" />
                </div>
                <h3 className="value-title">Education</h3>
                <p className="value-description">
                    Empowering professionals with knowledge is fundamental to driving
                    meaningful change.
                </p>
                </div>
                {/* Value 5 */}
                <div className="value-card fade-in">
                <div className="value-icon">
                    <i className="fas fa-globe" />
                </div>
                <h3 className="value-title">Global Impact</h3>
                <p className="value-description">
                    Our work transcends borders to address universal challenges in
                    health and technology.
                </p>
                </div>
                {/* Value 6 */}
                <div className="value-card fade-in">
                <div className="value-icon">
                    <i className="fas fa-chart-line" />
                </div>
                <h3 className="value-title">Sustainability</h3>
                <p className="value-description">
                    We develop solutions that create long-term value for both businesses
                    and communities.
                </p>
                </div>
            </div>
            </div>
        </section>
        {/* Team Section */}
        <section className="team-section">
            <div className="container">
            <h2 className="team-title fade-in">Meet Our Leadership</h2>
            <div className="team-grid">
                {/* Team Member 1 */}
                <div className="team-member fade-in">
                <div className="member-image">
                    <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Dr. Sarah Johnson"
                    />
                </div>
                <div className="member-info">
                    <h3 className="member-name">Dr. Sarah Johnson</h3>
                    <p className="member-position">Founder &amp; Executive Director</p>
                    <p className="member-bio">
                    AI researcher with 15+ years experience in healthcare
                    applications. Former professor at MIT.
                    </p>
                    <div className="member-social">
                    <a href="#">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fas fa-envelope" />
                    </a>
                    </div>
                </div>
                </div>
                {/* Team Member 2 */}
                <div className="team-member fade-in">
                <div className="member-image">
                    <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Dr. Michael Chen"
                    />
                </div>
                <div className="member-info">
                    <h3 className="member-name">Dr. Michael Chen</h3>
                    <p className="member-position">Chief Technology Officer</p>
                    <p className="member-bio">
                    Expert in machine learning applications for medical diagnostics.
                    Holds 12 patents in AI healthcare.
                    </p>
                    <div className="member-social">
                    <a href="#">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fas fa-envelope" />
                    </a>
                    </div>
                </div>
                </div>
                {/* Team Member 3 */}
                <div className="team-member fade-in">
                <div className="member-image">
                    <img
                    src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Amina Patel"
                    />
                </div>
                <div className="member-info">
                    <h3 className="member-name">Amina Patel</h3>
                    <p className="member-position">Director of Health Innovation</p>
                    <p className="member-bio">
                    Former hospital administrator specializing in digital health
                    transformation strategies.
                    </p>
                    <div className="member-social">
                    <a href="#">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fas fa-envelope" />
                    </a>
                    </div>
                </div>
                </div>
                {/* Team Member 4 */}
                <div className="team-member fade-in">
                <div className="member-image">
                    <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="David Wilson"
                    />
                </div>
                <div className="member-info">
                    <h3 className="member-name">David Wilson</h3>
                    <p className="member-position">Business Development Lead</p>
                    <p className="member-bio">
                    Specializes in commercializing health tech innovations with 10+
                    years in venture capital.
                    </p>
                    <div className="member-social">
                    <a href="#">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fas fa-envelope" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Blog Section */}
        <section className="blog-section">
            <div className="container">
            <h2 className="blog-title fade-in">Latest Insights</h2>
            <div className="blog-grid">
                {/* Blog Post 1 */}
                <div className="blog-card fade-in">
                <div className="blog-image">
                    <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80"
                    alt="AI in Healthcare"
                    />
                </div>
                <div className="blog-content">
                    <div className="blog-date">June 15, 2023 | AI, Healthcare</div>
                    <h3 className="blog-post-title">
                    The Future of AI in Diagnostic Medicine
                    </h3>
                    <p className="blog-excerpt">
                    Exploring how deep learning is revolutionizing medical imaging and
                    early disease detection with unprecedented accuracy.
                    </p>
                    <a href="#" className="read-more">
                    Read More <i className="fas fa-arrow-right" />
                    </a>
                </div>
                </div>
                {/* Blog Post 2 */}
                <div className="blog-card fade-in">
                <div className="blog-image">
                    <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Health Tech"
                    />
                </div>
                <div className="blog-content">
                    <div className="blog-date">May 28, 2023 | Technology, Business</div>
                    <h3 className="blog-post-title">
                    Building Sustainable HealthTech Business Models
                    </h3>
                    <p className="blog-excerpt">
                    Key strategies for digital health startups to create viable
                    commercial models while maintaining patient-centric values.
                    </p>
                    <a href="#" className="read-more">
                    Read More <i className="fas fa-arrow-right" />
                    </a>
                </div>
                </div>
                {/* Blog Post 3 */}
                <div className="blog-card fade-in">
                <div className="blog-image">
                    <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Data Analytics"
                    />
                </div>
                <div className="blog-content">
                    <div className="blog-date">
                    May 10, 2023 | Data Science, Healthcare
                    </div>
                    <h3 className="blog-post-title">
                    Ethical Considerations in Health Data Analytics
                    </h3>
                    <p className="blog-excerpt">
                    Navigating the complex landscape of patient privacy, data
                    ownership, and algorithmic bias in healthcare AI applications.
                    </p>
                    <a href="#" className="read-more">
                    Read More <i className="fas fa-arrow-right" />
                    </a>
                </div>
                </div>
            </div>
            {/* <div className="view-all-blog fade-in">
                <a href="#">
                View All Blog Posts <i className="fas fa-arrow-right" />
                </a>
            </div> */}
            </div>
        </section>
        </>

    );
}

export default About;
