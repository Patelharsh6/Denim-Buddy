import React, { useEffect } from 'react';
// REMOVE THIS LINE: import HeroGSAP from '../components/HeroGSAP'; 
import { gsap } from 'gsap';
import './Home.css';
import HeroSlider from '../components/HeroSlider';

// Register GSAP ScrollTrigger

const Home = () => {
    useEffect(() => {
        // Animation for the "Manufacturing Edge" Section
        gsap.from(".info-card", {
            scrollTrigger: {
                trigger: ".info-section",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1
        });
    }, []);

    return (
        <div className="home-page">
            
            {/* ONLY USE THE SLIDER HERE - REMOVED <HeroGSAP /> */}
            <HeroSlider />

            {/* MANUFACTURING STATS SECTION */}
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

            {/* CALL TO ACTION SECTION */}
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