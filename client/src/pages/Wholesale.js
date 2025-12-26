import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Wholesale.css';

// Import images (Reuse your existing assets)
import heroBg from '../assets/hero/animation-1.jpg'; // Darker/Industrial image works best here
import partnerImg from '../assets/hero/animation-1.jpg'; 

gsap.registerPlugin(ScrollTrigger);

const Wholesale = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // 1. Hero Text Animation
        gsap.from(".ws-hero-content", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

        // 2. Benefits Grid Animation (Staggered)
        gsap.from(".benefit-card", {
            scrollTrigger: {
                trigger: ".benefits-section",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });

        // 3. Form Section Animation
        gsap.from(".inquiry-container", {
            scrollTrigger: {
                trigger: ".inquiry-section",
                start: "top 75%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

    }, []);

    return (
        <div className="wholesale-page">
            
            {/* --- HERO SECTION --- */}
            <header className="ws-hero">
                <div className="ws-hero-overlay"></div>
                <div className="ws-hero-content">
                    <span className="ws-subtitle">B2B PARTNERSHIPS</span>
                    <h1>Partner With a Leading Industry Player.</h1>
                    <p className="ws-pitch">
                        Are you looking to stock high-quality men's denim? Denim Buddy offers the 
                        infrastructure of a global manufacturer with the soul of a designer brand.
                    </p>
                    <button className="btn-primary" onClick={() => document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' })}>
                        Become A Partner
                    </button>
                </div>
            </header>

            {/* --- BENEFITS SECTION --- */}
            <section className="benefits-section">
                <div className="ws-container">
                    <div className="section-header">
                        <h2>Why Stock Denim Buddy?</h2>
                        <div className="accent-line"></div>
                        <p>We provide the stability and margins your retail business needs to grow.</p>
                    </div>

                    <div className="benefits-grid">
                        {/* Benefit 1 */}
                        <div className="benefit-card">
                            <div className="icon-circle">
                                <i className="fas fa-tags"></i>
                            </div>
                            <h3>Manufacturer Pricing</h3>
                            <p>
                                Cut out the middlemen. Get factory-direct rates that maximize your 
                                retail profit margins without compromising on quality.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="benefit-card">
                            <div className="icon-circle">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <h3>Strategic Logistics</h3>
                            <p>
                                Fast and reliable shipping from our <strong>Ahmedabad</strong> distribution center. 
                                We ensure your shelves are never empty.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="benefit-card">
                            <div className="icon-circle">
                                <i className="fas fa-cubes"></i>
                            </div>
                            <h3>Consistent Supply</h3>
                            <p>
                                Say goodbye to stockouts. We offer reliable lead times and 
                                rigorous inventory stability for our partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VISUAL SPLIT SECTION --- */}
            <section className="partner-visual-section">
                <div className="split-container">
                    <div className="visual-image">
                        <img src={partnerImg} alt="Denim Manufacturing" />
                    </div>
                    <div className="visual-text">
                        <h3>Grow Your Brand With Us.</h3>
                        <p>
                            Whether you are a boutique retailer, a large chain, or an online store, 
                            our white-label and wholesale solutions are designed to scale with you.
                        </p>
                        <ul className="visual-list">
                            <li><i className="fas fa-check"></i> Low Minimum Order Quantities (MOQs)</li>
                            <li><i className="fas fa-check"></i> Premium Fabric Selection</li>
                            <li><i className="fas fa-check"></i> Private Labeling Available</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- INQUIRY FORM SECTION --- */}
            <section className="inquiry-section" id="inquiry-form">
                <div className="inquiry-container">
                    <div className="form-header">
                        <h2>Request A Catalog</h2>
                        <p>Tell us about your business. We'll send you our line sheet and pricing within 24 hours.</p>
                    </div>
                    
                    <form className="ws-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Company / Store Name</label>
                                <input type="text" placeholder="Your Brand" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+91 98765 43210" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message / Requirements</label>
                            <textarea rows="4" placeholder="Tell us about the quantities you are looking for..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Inquiry</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Wholesale;