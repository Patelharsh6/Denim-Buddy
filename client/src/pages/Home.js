import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Ensure ScrollTrigger is imported
import './Home.css';
import HeroSlider from '../components/HeroSlider';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        // Animation for the "Who We Are" text
        gsap.from(".about-content", {
            scrollTrigger: {
                trigger: ".home-about",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Animation for the "Manufacturing Edge" cards
        gsap.from(".info-card", {
            scrollTrigger: {
                trigger: ".info-section",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        });
    }, []);

    return (
        <div className="home-page">
            
            {/* 1. HERO SLIDER */}
            <HeroSlider />

            {/* 2. NEW "WHO WE ARE" SECTION (Matches Reference Image) */}
            <section className="home-about">
                <div className="about-container">
                    <div className="about-content">
                        {/* Decorative Arrow Graphic */}
                        <div className="about-decoration">
                            <span className="deco-arrow">➳</span> 
                        </div>
                        
                        <h4 className="about-subtitle">WHO WE ARE</h4>
                        
                        <h2 className="about-title">
                            Find Your Perfect Fit With Denim Buddy.
                        </h2>
                        
                        <p className="about-text">
                            We understand that no two individuals are the same, which is why 
                            we have curated a versatile range of styles that cater to all body 
                            types. Whether you prefer a classic straight fit, a flattering ankle, or 
                            a comfort fit, Denim Buddy offers the perfect fit to enhance your unique 
                            silhouette and embrace your personal style.
                        </p>
                    </div>

                    {/* Dashed Divider Line */}
                    <div className="about-divider"></div>
                </div>
            </section>

            {/* 3. MANUFACTURING STATS SECTION */}
            <section className="info-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Vertical Integration. Unrivaled Quality.</h2>
                        <div className="accent-line"></div>
                        <p>We are more than a brand—we are the makers. Based in the textile heart of our city, we control every step of the process.</p>
                    </div>

                    <div className="info-grid">
                        <div className="info-card">
                            <i className="fas fa-industry"></i>
                            <h3>50k+ Units</h3>
                            <p>Monthly scalable production for global demand.</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-check-double"></i>
                            <h3>Zero Defect</h3>
                            <p>Every pair is factory-inspected for 100% durability.</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-globe-americas"></i>
                            <h3>Global Export</h3>
                            <p>Shipping direct from our hub to retail partners worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION SECTION */}
            <section className="home-cta">
                <div className="cta-content">
                    <h2>Ready to scale your denim inventory?</h2>
                    <p>Partner with a leading industry player today.</p>
                    <button className="btn-main">Get Wholesale Catalog</button>
                </div>
            </section>
        </div>
    );
};

export default Home;