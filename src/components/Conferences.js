import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Conferences = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [selectedYear, setSelectedYear] = useState('all');

    // Use the hook with both activeTab and selectedYear as dependencies
    useScrollAnimation([activeTab, selectedYear]);
    // Conference data
    const upcomingConferences = [
        {
            id: 1,
            title: "Future of Tech Summit 2025",
            date: "June 15-17, 2025",
            location: "Marrakech, Morocco",
            attendees: "500+ Attendees",
            description: "The Future of Tech Summit brings together visionaries, entrepreneurs, and technology leaders to explore the most transformative trends shaping our digital future. This year's theme focuses on 'Sustainable Innovation in the AI Era,' featuring keynote presentations, interactive workshops, and networking opportunities with industry pioneers.",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: true
        },
        {
            id: 2,
            title: "Digital Transformation Forum",
            date: "September 5-7, 2026",
            location: "Jeddah, Saudi Arabia",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
            featured: false
        },
        {
            id: 3,
            title: "Healthcare Innovation Conference",
            date: "November 8-10, 2025",
            location: "Dubai, UAE",
            image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1405&q=80",
            featured: false
        },
        {
            id: 4,
            title: "Education Technology Symposium",
            date: "March 12-14, 2026",
            location: "Riyadh, Saudi Arabia",
            image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            featured: false
        }
    ];

    const pastConferences = [
        {
            id: 5,
            year: 2024,
            title: "Sustainable Innovation Conference",
            date: "April 10-12, 2024",
            location: "Laayoune, Morocco",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 6,
            year: 2023,
            title: "Global Leadership Forum",
            date: "October 15-17, 2023",
            location: "Casablanca, Morocco",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 7,
            year: 2023,
            title: "Fintech Revolution Summit",
            date: "June 5-7, 2023",
            location: "Tunis, Tunisia",
            image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
        },
        {
            id: 8,
            year: 2022,
            title: "Entrepreneurship World Cup",
            date: "November 10-12, 2022",
            location: "Cairo, Egypt",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        },
        {
            id: 9,
            year: 2022,
            title: "Digital Marketing Expo",
            date: "May 15-17, 2022",
            location: "Amman, Jordan",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 10,
            year: 2021,
            title: "AI & Machine Learning Summit",
            date: "September 8-10, 2021",
            location: "Virtual Event",
            image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
        }
    ];

    // Filter past conferences based on selected year
    const filteredPastConferences = selectedYear === 'all' 
        ? pastConferences 
        : pastConferences.filter(conf => conf.year.toString() === selectedYear);

    return (
        <>
            <section className="conference-hero">
                <div className="container">
                    <h1>Our Conferences</h1>
                    <p>
                        Join industry leaders and innovators at our premier events featuring
                        cutting-edge research, networking opportunities, and transformative
                        learning experiences.
                    </p>
                    <a href="#upcoming" className="btn btn-primary">
                        View Upcoming Events
                    </a>
                </div>
            </section>

            <main className="section">
                <div className="container">
                    {/* Tabs */}
                    <div className="tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                            onClick={() => setActiveTab('upcoming')}
                            data-tab="upcoming"
                        >
                            Upcoming
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
                            onClick={() => setActiveTab('past')}
                            data-tab="past"
                        >
                            Past Conferences
                        </button>
                    </div>

                    {/* Upcoming Conferences */}
                    <div id="upcoming" className={`tab-content ${activeTab === 'upcoming' ? 'active' : ''}`}>
                        {/* Featured Conference */}
                        {upcomingConferences.filter(conf => conf.featured).map(conf => (
                            <div key={conf.id} className="conference-featured fade-in">
                                <div className="featured-image">
                                    <img src={conf.image} alt={conf.title} />
                                </div>
                                <div className="featured-content">
                                    <span className="featured-badge">Featured Event</span>
                                    <h2 className="featured-title">{conf.title}</h2>
                                    <div className="featured-meta">
                                        <div className="featured-meta-item">
                                            <i className="fas fa-calendar-alt" />
                                            <span>{conf.date}</span>
                                        </div>
                                        <div className="featured-meta-item">
                                            <i className="fas fa-map-marker-alt" />
                                            <span>{conf.location}</span>
                                        </div>
                                        {conf.attendees && (
                                            <div className="featured-meta-item">
                                                <i className="fas fa-users" />
                                                <span>{conf.attendees}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="featured-description">
                                        {conf.description}
                                    </p>
                                    <div className="hero-buttons">
                                        <a href="/Register" className="btn btn-primary">
                                            Register Now
                                        </a>
                                        <a href="#" className="btn btn-secondary">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Other Upcoming Conferences */}
                        <h2 style={{ marginBottom: 30 }}>More Upcoming Events</h2>
                        <div className="conference-cards">
                            {upcomingConferences.filter(conf => !conf.featured).map(conf => (
                                <div key={conf.id} className="conference-card fade-in">
                                    <div className="conference-image">
                                        <img src={conf.image} alt={conf.title} />
                                    </div>
                                    <div className="conference-content">
                                        <span className="conference-date">{conf.date}</span>
                                        <h3 className="conference-title">{conf.title}</h3>
                                        <div className="conference-location">
                                            <i className="fas fa-map-marker-alt" /> {conf.location}
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-secondary"
                                            style={{ marginTop: 15, display: "inline-block" }}
                                        >
                                            Details
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Past Conferences */}
                    <div id="past" className={`tab-content ${activeTab === 'past' ? 'active' : ''}`}>
                        <div className="past-conferences">
                            <h2>Past Conferences</h2>
                            
                            {/* Year Filter */}
                            <div className="year-filter">
                                <button 
                                    className={`year-btn ${selectedYear === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedYear('all')}
                                    data-year="all"
                                >
                                    All Years
                                </button>
                                {[...new Set(pastConferences.map(conf => conf.year))].sort((a, b) => b - a).map(year => (
                                    <button
                                        key={year}
                                        className={`year-btn ${selectedYear === year.toString() ? 'active' : ''}`}
                                        onClick={() => setSelectedYear(year.toString())}
                                        data-year={year}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>

                            {/* Conference List */}
                            <div className="conference-list">
                                {filteredPastConferences.map(conf => (
                                    <div 
                                        key={conf.id} 
                                        className="conference-card fade-in" 
                                        data-year={conf.year}
                                    >
                                        <div className="conference-image">
                                            <img src={conf.image} alt={conf.title} />
                                        </div>
                                        <div className="conference-content">
                                            <span className="conference-date">{conf.date}</span>
                                            <h3 className="conference-title">{conf.title}</h3>
                                            <div className="conference-location">
                                                <i className="fas fa-map-marker-alt" /> {conf.location}
                                            </div>
                                            <a
                                                href="#"
                                                className="btn btn-secondary"
                                                style={{ marginTop: 15, display: "inline-block" }}
                                            >
                                                View Recap
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Final CTA */}
            <section className="final-cta fade-in">
                <div className="container">
                    <h2>Ready to Join Our Next Event?</h2>
                    <p>
                        Connect with us and be part of our growing community of innovators and
                        thought leaders.
                    </p>
                    <a href="/Contact" className="btn">
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}

export default Conferences;