import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; // Import Link for the button
import './About.css';

// Import images
import aboutHero from '../assets/hero/animation-1.jpg'; 
import factoryImg from '../assets/hero/animation-1.jpg';
import img1 from '../assets/hero/animation-1.jpg';
import img2 from '../assets/hero/animation-1.jpg';
import stitchingImg from '../assets/hero/animation-1.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // 1. Header Animation
        gsap.from(".about-header-content", {
            y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
        });

        // 2. Progress Bars
        gsap.utils.toArray(".stat-bar-fill").forEach((bar) => {
            gsap.from(bar, {
                scrollTrigger: { trigger: ".stats-container", start: "top 75%" },
                width: "0%", duration: 1.5, ease: "power2.out"
            });
        });

        // 3. Grid Blocks
        gsap.from(".grid-block", {
            scrollTrigger: { trigger: ".proof-grid", start: "top 80%" },
            scale: 0.9, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)"
        });

        // 4. NEW: Advantage Cards Animation
        gsap.from(".advantage-card", {
            scrollTrigger: { trigger: ".advantage-section", start: "top 75%" },
            y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
        });

    }, []);

    return (
        <div className="about-page">
            
            {/* 1. HERO HEADER */}
            <div className="about-header">
                <div className="about-overlay"></div>
                <div className="about-header-content">
                    <h1>THE DENIM BUDDY STORY</h1>
                    <div className="accent-bar"></div>
                    <p>Redefining manufacturing excellence from the thread up.</p>
                </div>
            </div>

            {/* 2. THE STORY */}
            <section className="about-section">
                <div className="about-content">
                    <span className="section-subtitle">OUR ORIGINS</span>
                    <h2>More Than Just a Brand.</h2>
                    <p>
                        Founded in the heart of the textile industry, Denim Buddy was built 
                        on a simple premise: <strong>Quality should never be a luxury; it should be a standard.</strong>
                    </p>
                    <p>
                        We aren't just a label. We are a fully vertical manufacturing partner. 
                        From selecting the finest raw cotton to the final rivet, we control 
                        every step of the process.
                    </p>
                </div>
                <div className="about-image-wrapper">
                    <img src={aboutHero} alt="Denim Manufacturing Process" />
                </div>
            </section>

            {/* 3. THE PROOF SANDWICH (Stats) */}
            <section className="proof-section">
                <div className="stats-container">
                    <div className="stats-text">
                        <span className="section-subtitle">THE DATA</span>
                        <h2>Our Numbers Speak About Everything.</h2>
                        <p className="stats-desc">
                            We don't just make claims; we track our performance. From production speed 
                            to client satisfaction, here is the data behind Denim Buddy.
                        </p>
                        {/* Bars */}
                        <div className="stat-item">
                            <div className="stat-label"><span>Quality Control Success</span><span>99%</span></div>
                            <div className="stat-bar-bg"><div className="stat-bar-fill" style={{width: '99%'}}></div></div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label"><span>On-Time Delivery</span><span>95%</span></div>
                            <div className="stat-bar-bg"><div className="stat-bar-fill" style={{width: '95%'}}></div></div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-label"><span>Sustainable Material Use</span><span>85%</span></div>
                            <div className="stat-bar-bg"><div className="stat-bar-fill" style={{width: '85%'}}></div></div>
                        </div>
                    </div>
                    {/* Grid */}
                    {/* RIGHT: The 2x2 Grid */}
                    <div className="facts-grid-wrapper">
                                            <div className="grid-row">
                                                <div className="grid-box img-box">
                                                    <img src={img1} alt="Product Sold" />
                                                    <span className="box-overlay-text">A photo of your Ahmedabad Factory floor.</span>
                                                </div>
                                                <div className="grid-box red-box">
                                                    <h3>50,000+</h3>
                                                    <p>Units Monthly Capacity</p>
                                                </div>
                                            </div>
                                            <div className="grid-row">
                                                <div className="grid-box red-box">
                                                    <h3>200+</h3>
                                                    <p>Global Retail Partners</p>
                                                </div>
                                                <div className="grid-box img-box">
                                                    <img src={img2} alt="Perfect Fit" />
                                                    <span className="box-overlay-text">A close-up of your Premium Denim stitching.</span>
                                                </div>
                                            </div>
                                        </div>
                </div>
            </section>

            {/* 4. GLOBAL REACH */}
            <section className="about-section reverse">
                <div className="about-image-wrapper">
                    <img src={aboutHero} alt="Global Logistics" />
                </div>
                <div className="about-content">
                    <span className="section-subtitle">GLOBAL REACH</span>
                    <h2>Built for Scale.</h2>
                    <p>
                        Our facility is designed for high-volume, high-precision output. 
                        Whether you are a boutique brand or a global retailer, our infrastructure 
                        adapts to your needs.
                    </p>
                    <ul className="about-list">
                        <li><i className="fas fa-check-circle"></i> <strong>Ahmedabad</strong> Distribution Hub</li>
                        <li><i className="fas fa-check-circle"></i> <strong>Zero-Defect</strong> Guarantee</li>
                        <li><i className="fas fa-check-circle"></i> <strong>White-Label</strong> Ready</li>
                    </ul>
                </div>
            </section>

            {/* 5. NEW: THE ADVANTAGE SECTION (Blue Cards) */}
            <section className="advantage-section">
                <div className="advantage-container">
                    <div className="section-header">
                        <h2>THE DENIM BUDDY ADVANTAGE</h2>
                        <div className="accent-bar-small"></div>
                        <p>Scale your business with a manufacturing partner that works as hard as you do.</p>
                    </div>

                    <div className="advantage-grid">
                        {/* Card 1 */}
                        <div className="advantage-card">
                            <div className="card-icon">
                                <i className="fas fa-rupee-sign"></i>
                            </div>
                            <h3>DIRECT PRICING</h3>
                            <div className="card-divider"></div>
                            <p>FACTORY-DIRECT VALUE</p>
                        </div>

                        {/* Card 2 */}
                        <div className="advantage-card">
                            <div className="card-icon">
                                <i className="fas fa-truck-fast"></i>
                            </div>
                            <h3>PAN-INDIA LOGISTICS</h3>
                            <div className="card-divider"></div>
                            <p>NATIONWIDE DELIVERY REACH</p>
                        </div>

                        {/* Card 3 */}
                        <div className="advantage-card">
                            <div className="card-icon">
                                <i className="fas fa-boxes-stacked"></i>
                            </div>
                            <h3>UNBROKEN SUPPLY</h3>
                            <div className="card-divider"></div>
                            <p>STEADY FLOW OF STOCK</p>
                        </div>
                    </div>

                    <div className="advantage-cta">
                        <Link to="/contact">
                            <button className="btn-main">BECOME A PARTNER</button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;