import useScrollAnimation from '../hooks/useScrollAnimation';


export default function Home() {
    useScrollAnimation();
  return (
    <>
    {/* Hero Section */}
    <section className="hero">
        <div className="container">
        <div className="hero-content">
            <h1>Advancing Innovation Through Collaboration</h1>
            <p>Join a network of professionals shaping the future</p>
            <div className="hero-buttons">
            <a href="/Membership" className="btn btn-primary">
                Join Us
            </a>
            <a href="/Conferences" className="btn btn-secondary">
                Explore Conferences
            </a>
            </div>
        </div>
        </div>
    </section>
    
    {/* About Section */}
    <section className="section about">
        <div className="container">
        <div className="about-container fade-in">
            <div className="about-content">
            <h2 className="section-title">Who We Are</h2>
            <p>
                We empower professionals with cutting-edge knowledge, networking,
                and resources to drive innovation across industries.
            </p>
            <div className="highlights">
                <div className="highlight-item">
                <div className="highlight-icon">
                    <i className="fas fa-users" />
                </div>
                <div>
                    <h3>20+ Global Members</h3>
                    <p>Join our diverse community of innovators</p>
                </div>
                </div>
                <div className="highlight-item">
                <div className="highlight-icon">
                    <i className="fas fa-calendar-alt" />
                </div>
                <div>
                    <h3>3+ Annual Events</h3>
                    <p>Learn from industry leaders worldwide</p>
                </div>
                </div>
                <div className="highlight-item">
                <div className="highlight-icon">
                    <i className="fas fa-chart-line" />
                </div>
                <div>
                    <h3>Industry-Leading Research</h3>
                    <p>Access exclusive insights and trends</p>
                </div>
                </div>
            </div>
            </div>
            <div className="about-image">
            <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
            />
            </div>
        </div>
        </div>
    </section>
    {/* Conferences Section */}
    <section className="section conferences">
        <div className="container">
        <h2 className="section-title fade-in">Upcoming &amp; Past Conferences</h2>
        <div className="conference-cards">
            <div className="conference-card fade-in">
            <div className="conference-image">
                <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Conference"
                />
            </div>
            <div className="conference-content">
                <span className="conference-date">June 15-17, 2025</span>
                <h3 className="conference-title">Future of Tech Summit</h3>
                <div className="conference-location">
                <i className="fas fa-map-marker-alt" /> Marrakech, Morocco
                </div>
            </div>
            </div>
            <div className="conference-card fade-in">
            <div className="conference-image">
                <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80"
                alt="Conference"
                />
            </div>
            <div className="conference-content">
                <span className="conference-date">September 5-7, 2026</span>
                <h3 className="conference-title">Digital Transformation Forum</h3>
                <div className="conference-location">
                <i className="fas fa-map-marker-alt" /> Jeddah, Saudi Arabia
                </div>
            </div>
            </div>
            <div className="conference-card fade-in">
            <div className="conference-image">
                <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Conference"
                />
            </div>
            <div className="conference-content">
                <span className="conference-date">November 12-14, 2023</span>
                <h3 className="conference-title">
                Sustainable Innovation Conference
                </h3>
                <div className="conference-location">
                <i className="fas fa-map-marker-alt" /> Laayoune, Morocco
                </div>
            </div>
            </div>
        </div>
        <div className="view-all fade-in">
            <a href="/Conferences">
            View All Conferences <i className="fas fa-arrow-right" />
            </a>
        </div>
        </div>
    </section>
    {/* Courses Section */}
    <section className="section courses">
        <div className="container">
        <h2 className="section-title fade-in">Expand Your Knowledge</h2>
        <div className="course-cards">
            <div className="course-card fade-in">
            <div className="course-thumbnail">
                <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Course"
                />
                <span className="course-price free">Free</span>
            </div>
            <div className="course-content">
                <h3 className="course-title">Introduction to Design Thinking</h3>
                <div className="course-meta">
                <span>
                    <i className="far fa-clock" /> 4 Weeks
                </span>
                <span>
                    <i className="fas fa-user-graduate" /> Beginner
                </span>
                </div>
                <a href="#" className="course-btn">
                Enroll Now
                </a>
            </div>
            </div>
            <div className="course-card fade-in">
            <div className="course-thumbnail">
                <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Course"
                />
                <span className="course-price">$199</span>
            </div>
            <div className="course-content">
                <h3 className="course-title">
                The executive's guide to generative AI
                </h3>
                <div className="course-meta">
                <span>
                    <i className="far fa-clock" /> 6 Weeks
                </span>
                <span>
                    <i className="fas fa-user-graduate" /> Intermediate
                </span>
                </div>
                <a href="#" className="course-btn">
                Learn More
                </a>
            </div>
            </div>
            <div className="course-card fade-in">
            <div className="course-thumbnail">
                <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
                alt="Course"
                />
                <span className="course-price">$149</span>
            </div>
            <div className="course-content">
                <h3 className="course-title">Data-Driven Decision Making</h3>
                <div className="course-meta">
                <span>
                    <i className="far fa-clock" /> 5 Weeks
                </span>
                <span>
                    <i className="fas fa-user-graduate" /> Intermediate
                </span>
                </div>
                <a href="#" className="course-btn">
                Learn More
                </a>
            </div>
            </div>
            <div className="course-card fade-in">
            <div className="course-thumbnail">
                <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Course"
                />
                <span className="course-price free">Free</span>
            </div>
            <div className="course-content">
                <h3 className="course-title">
                Digital Transformation Fundamentals
                </h3>
                <div className="course-meta">
                <span>
                    <i className="far fa-clock" /> 3 Weeks
                </span>
                <span>
                    <i className="fas fa-user-graduate" /> Beginner
                </span>
                </div>
                <a href="#" className="course-btn">
                Enroll Now
                </a>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Streaming Section */}
    <section className="section streaming">
        <div className="container">
        <h2 className="section-title fade-in">Live &amp; On-Demand Content</h2>
        <div className="streaming-container">
            <div className="main-stream fade-in">
            <div className="stream-thumbnail">
                <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Stream"
                />
                <div className="live-badge">LIVE NOW</div>
                <div className="play-btn">
                <i className="fas fa-play" />
                </div>
            </div>
            <div className="stream-info">
                <h3 className="stream-title">Innovation in the Age of AI</h3>
                <p className="stream-description">
                Join our panel of experts as they discuss how artificial
                intelligence is reshaping industries and creating new
                opportunities for innovation.
                </p>
            </div>
            </div>
            <div className="upcoming-streams fade-in">
            <h3 className="upcoming-title">
                <i className="fas fa-list" /> Upcoming Streams
            </h3>
            <div className="stream-item">
                <div className="stream-item-time">
                <div className="stream-item-day">TUE</div>
                <div className="stream-item-hour">14:00</div>
                </div>
                <div className="stream-item-title">Sustainable Business Models</div>
            </div>
            <div className="stream-item">
                <div className="stream-item-time">
                <div className="stream-item-day">WED</div>
                <div className="stream-item-hour">10:00</div>
                </div>
                <div className="stream-item-title">Future of Remote Work</div>
            </div>
            <div className="stream-item members-only">
                <div className="members-only-overlay">
                <i className="fas fa-lock" />
                <p>Members Only</p>
                <a href="#" className="btn btn-primary">
                    Sign In to Watch
                </a>
                </div>
                <div className="stream-item-time">
                <div className="stream-item-day">FRI</div>
                <div className="stream-item-hour">16:00</div>
                </div>
                <div className="stream-item-title">Executive Roundtable</div>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Membership CTA */}
    <section className="section">
        <div className="container">
        <div className="membership-cta fade-in">
            <h2>Unlock Exclusive Benefits</h2>
            <p>
            Join our community to access premium courses, events, and networking
            opportunities with industry leaders.
            </p>
            <a href="/Membership" className="btn btn-primary">
            Become a Member
            </a>
        </div>
        </div>
    </section>
    {/* News Section */}
    <section className="section news">
        <div className="container">
        <h2 className="section-title fade-in">Latest Updates</h2>
        <div className="news-grid">
            <div className="news-card fade-in">
            <div className="news-image">
                <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="News"
                />
            </div>
            <div className="news-content">
                <div className="news-date">June 5, 2023</div>
                <h3 className="news-title">
                How Digital Transformation is Reshaping Industries
                </h3>
                <p className="news-excerpt">
                Explore the latest trends in digital transformation and how
                companies are adapting to the new technological landscape.
                </p>
                <a href="#" className="read-more">
                Read More <i className="fas fa-arrow-right" />
                </a>
            </div>
            </div>
            <div className="news-card fade-in">
            <div className="news-image">
                <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="News"
                />
            </div>
            <div className="news-content">
                <div className="news-date">May 22, 2023</div>
                <h3 className="news-title">
                The Future of Work: Insights from Global Leaders
                </h3>
                <p className="news-excerpt">
                Key takeaways from our recent panel discussion on the evolving
                workplace and what it means for professionals.
                </p>
                <a href="#" className="read-more">
                Read More <i className="fas fa-arrow-right" />
                </a>
            </div>
            </div>
            <div className="news-card fade-in">
            <div className="news-image">
                <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="News"
                />
            </div>
            <div className="news-content">
                <div className="news-date">May 10, 2023</div>
                <h3 className="news-title">
                Announcing Our 2023 Innovation Awards Winners
                </h3>
                <p className="news-excerpt">
                Celebrating the most groundbreaking innovations and the teams
                behind them from across our global community.
                </p>
                <a href="#" className="read-more">
                Read More <i className="fas fa-arrow-right" />
                </a>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Final CTA */}
    <section className="final-cta fade-in">
        <div className="container">
        <h2>Ready to Get Involved?</h2>
        <p>
            Connect with us and start your journey with our global innovation
            community today.
        </p>
        <a href="/Contact" className="btn">
            Contact Us
        </a>
        </div>
    </section>
    </>

  );
}
