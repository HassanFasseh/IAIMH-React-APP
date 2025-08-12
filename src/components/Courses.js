import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState('All Courses');
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        level: '',
        duration: '',
        format: ''
    });
    
    // Use the hook with activeCategory and filters as dependencies
    useScrollAnimation([activeCategory, filters]);
    
    // Sample course data with additional fields for filtering
    const courses = [
        {
            id: 1,
            title: "Introduction to Design Thinking",
            category: "Technology",
            instructor: "Dr. Sarah Johnson",
            duration: "4 Weeks",
            durationValue: "medium", // for filtering
            rating: "4.8 (120)",
            price: "Free",
            level: "beginner",
            format: "instructor-led",
            badge: "New",
            thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            instructorImg: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 2,
            title: "The Executive's Guide to Generative AI",
            category: "Business",
            instructor: "Prof. Michael Chen",
            duration: "6 Weeks",
            durationValue: "long",
            rating: "4.9 (85)",
            price: "$199",
            level: "advanced",
            format: "hybrid",
            badge: "Popular",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            instructorImg: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 3,
            title: "Data-Driven Decision Making",
            category: "Data Science",
            instructor: "Dr. Amina Patel",
            duration: "5 Weeks",
            durationValue: "medium",
            rating: "4.7 (156)",
            price: "$149",
            level: "intermediate",
            format: "self-paced",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
            instructorImg: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            id: 4,
            title: "Digital Transformation Fundamentals",
            category: "Business",
            instructor: "Prof. David Wilson",
            duration: "3 Weeks",
            durationValue: "medium",
            rating: "4.5 (92)",
            price: "Free",
            level: "beginner",
            format: "instructor-led",
            thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            instructorImg: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            id: 5,
            title: "Strategic Leadership in the Digital Age",
            category: "Leadership",
            instructor: "Dr. Emily Rodriguez",
            duration: "8 Weeks",
            durationValue: "long",
            rating: "4.9 (64)",
            price: "$249",
            level: "advanced",
            format: "hybrid",
            badge: "Featured",
            thumbnail: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
            instructorImg: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            id: 6,
            title: "Cloud Computing Essentials",
            category: "Technology",
            instructor: "Prof. James Peterson",
            duration: "4 Weeks",
            durationValue: "medium",
            rating: "4.6 (112)",
            price: "$179",
            level: "intermediate",
            format: "self-paced",
            thumbnail: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            instructorImg: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
            id: 7,
            title: "Graphic Design Masterclass",
            category: "Design",
            instructor: "Prof. James Peterson",
            duration: "4 Weeks",
            durationValue: "medium",
            rating: "4.6 (112)",
            price: "$179",
            level: "beginner",
            format: "instructor-led",
            thumbnail: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            instructorImg: "https://randomuser.me/api/portraits/men/41.jpg"
        }
    ];

    // Available categories for the category buttons
    const categories = ['All Courses', 'Technology', 'Business', 'Leadership', 'Design', 'Data Science'];

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Filter courses based on active category, search term, and filters
    const filteredCourses = courses.filter(course => {
        // Category filter (from buttons)
        const categoryMatch = activeCategory === 'All Courses' || course.category === activeCategory;
        
        // Search term filter
        const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Additional filters
        const categoryFilterMatch = !filters.category || course.category.toLowerCase() === filters.category;
        const levelFilterMatch = !filters.level || course.level === filters.level;
        const durationFilterMatch = !filters.duration || course.durationValue === filters.duration;
        const formatFilterMatch = !filters.format || course.format === filters.format;
        
        return categoryMatch && searchMatch && categoryFilterMatch && 
               levelFilterMatch && durationFilterMatch && formatFilterMatch;
    });

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        // The filtering happens automatically through the filteredCourses calculation
    };

    return (
        <>
            <section className="courses-hero">
                <div className="container">
                    <h1 className="fade-in">Expand Your Knowledge</h1>
                    <p className="fade-in">
                        Discover our comprehensive courses designed to help you stay ahead in
                        your field with expert-led training and practical skills.
                    </p>
                    <div className="fade-in">
                        <a href="#" className="btn btn-primary">
                            Browse All Courses
                        </a>
                    </div>
                </div>
            </section>
            
            {/* Search and Filter */}
            <div className="search-filter fade-in">
                <div className="container">
                    <form onSubmit={handleSearch} className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="search-btn">Search</button>
                    </form>
                    <div className="filter-container">
                        <div className="filter-group">
                            <label htmlFor="category" className="filter-label">
                                Category
                            </label>
                            <select 
                                id="category" 
                                name="category"
                                className="filter-select"
                                value={filters.category}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Categories</option>
                                <option value="technology">Technology</option>
                                <option value="business">Business</option>
                                <option value="leadership">Leadership</option>
                                <option value="design">Design</option>
                                <option value="data science">Data Science</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="level" className="filter-label">
                                Level
                            </label>
                            <select 
                                id="level" 
                                name="level"
                                className="filter-select"
                                value={filters.level}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Levels</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="duration" className="filter-label">
                                Duration
                            </label>
                            <select 
                                id="duration" 
                                name="duration"
                                className="filter-select"
                                value={filters.duration}
                                onChange={handleFilterChange}
                            >
                                <option value="">Any Duration</option>
                                <option value="short">Short (1-2 weeks)</option>
                                <option value="medium">Medium (3-5 weeks)</option>
                                <option value="long">Long (6+ weeks)</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="format" className="filter-label">
                                Format
                            </label>
                            <select 
                                id="format" 
                                name="format"
                                className="filter-select"
                                value={filters.format}
                                onChange={handleFilterChange}
                            >
                                <option value="">All Formats</option>
                                <option value="self-paced">Self-Paced</option>
                                <option value="instructor-led">Instructor-Led</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Courses Grid */}
            <section className="section">
                <div className="container">
                    <div className="course-categories fade-in">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    
                    {filteredCourses.length > 0 ? (
                        <div className="course-grid">
                            {filteredCourses.map(course => (
                                <div key={course.id} className="course-card fade-in">
                                    <div className="course-thumbnail">
                                        <img src={course.thumbnail} alt="Course" />
                                        {course.badge && <span className={`course-badge ${course.badge.toLowerCase()}`}>{course.badge}</span>}
                                    </div>
                                    <div className="course-content">
                                        <span className="course-category">{course.category}</span>
                                        <h3 className="course-title">{course.title}</h3>
                                        <div className="course-instructor">
                                            <img src={course.instructorImg} alt="Instructor" />
                                            <span>{course.instructor}</span>
                                        </div>
                                        <div className="course-meta">
                                            <span><i className="far fa-clock" /> {course.duration}</span>
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <span>{course.rating}</span>
                                            </div>
                                        </div>
                                        <div className="course-footer">
                                            <span className={`course-price ${course.price === 'Free' ? 'free' : ''}`}>
                                                {course.price}
                                            </span>
                                            <a href="#" className="course-btn">
                                                {course.price === 'Free' ? 'Enroll Now' : 'Learn More'}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results fade-in">
                            <h3>No courses found matching your criteria</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    )}
                    
                    <div className="pagination fade-in">
                        <button className="page-btn">
                            <i className="fas fa-chevron-left" />
                        </button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">4</button>
                        <button className="page-btn">
                            <i className="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title fade-in">What Our Students Say</h2>
                    <div className="testimonial-slider fade-in">
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "The Data-Driven Decision Making course transformed how I approach
                                business problems. The practical exercises helped me immediately
                                apply what I learned to my work."
                            </p>
                            <div className="testimonial-author">
                                <img
                                    src="https://randomuser.me/api/portraits/women/65.jpg"
                                    alt="Student"
                                />
                                <div className="author-info">
                                    <h4>Layla Hassan</h4>
                                    <p>Business Analyst, TechCorp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Membership CTA */}
            <section className="section">
                <div className="container">
                    <div className="membership-cta fade-in">
                        <h2>Get Unlimited Access</h2>
                        <p>
                            Become an IAIMH member to access all premium courses, exclusive
                            events, and networking opportunities with industry leaders.
                        </p>
                        <a href="/Membership" className="btn btn-primary">
                            Join Membership
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Courses;