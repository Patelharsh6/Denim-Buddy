import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Wholesale.css';
import SEO from '../components/SEO';

// Import images
import heroBg from '../assets/hero/animation-1.jpg'; 
import partnerImg from '../assets/hero/partnerImg.jpg'; 

gsap.registerPlugin(ScrollTrigger);

const Wholesale = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // 1. Hero Animation
        gsap.from(".ws-hero-content", {
            y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
        });

        // 2. The Pitch Animation
        gsap.from(".pitch-container", {
            scrollTrigger: { trigger: ".pitch-section", start: "top 80%" },
            y: 30, opacity: 0, duration: 1, ease: "power2.out"
        });

        // 3. Benefits Cards
        gsap.from(".benefit-card", {
            scrollTrigger: { trigger: ".benefits-section", start: "top 75%" },
            y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
        });

        // 4. Visual Section
        gsap.from(".visual-text", {
            scrollTrigger: { trigger: ".partner-visual-section", start: "top 75%" },
            x: 30, opacity: 0, duration: 1, ease: "power2.out"
        });

    }, []);

    return (
        <div className="wholesale-page">

            <SEO 
                title="Wholesale Jeans Suppliers & Private Label Manufacturing | B2B Partner"
                description="Partner with Denim Buddy for high-margin wholesale jeans. Low MOQs, global export from India, and white-label manufacturing services for retail brands."
                keywords="Wholesale jeans suppliers, Bulk denim for retailers, White label jeans manufacturer, Private label denim India, Export quality jeans, B2B denim partnership"
                url="https://denimbuddy.com/wholesale"
            />
            
            {/* --- 1. HERO SECTION --- */}
            <header className="ws-hero">
                <div className="ws-hero-overlay"></div>
                <div className="ws-hero-content">
                    <span className="ws-subtitle">B2B PARTNERSHIPS</span>
                    <h1>Partner With a Leading<br/>Industry Player.</h1>
                    <div className="ws-accent-bar"></div>
                </div>
            </header>

            {/* --- 2. THE PITCH (High Impact Typography) --- */}
            <section className="pitch-section">
                <div className="pitch-container">
                    <h2>The Denim Buddy Standard</h2>
                    <p className="pitch-text">
                        "Are you looking to stock high-quality men's denim? 
                        <span className="highlight-text"> Denim Buddy</span> offers the infrastructure of a 
                        global manufacturer with the soul of a designer brand."
                    </p>
                </div>
            </section>

            {/* --- 3. BENEFITS GRID --- */}
            <section className="benefits-section">
                <div className="ws-container">
                    <div className="section-header">
                        <h2>Wholesale Benefits</h2>
                        <p>We provide the stability and margins your retail business needs to grow.</p>
                    </div>

                    <div className="benefits-grid">
                        {/* Benefit 1 */}
                        <div className="benefit-card">
                            <div className="card-number">01</div>
                            <div className="icon-circle"><i className="fas fa-tags"></i></div>
                            <h3>Manufacturer Pricing</h3>
                            <p>
                                Factory-direct rates for maximum retail profit. Cut out the middlemen 
                                and increase your margins.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="benefit-card">
                            <div className="card-number">02</div>
                            <div className="icon-circle"><i className="fas fa-truck-fast"></i></div>
                            <h3>Strategic Logistics</h3>
                            <p>
                                Fast and reliable shipping from our <strong>Ahmedabad</strong> distribution center. 
                                We ensure your shelves are never empty.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="benefit-card">
                            <div className="card-number">03</div>
                            <div className="icon-circle"><i className="fas fa-boxes-stacked"></i></div>
                            <h3>Consistent Supply</h3>
                            <p>
                                Reliable lead times and inventory stability. We build partnerships 
                                on trust and consistency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. VISUAL SPLIT SECTION (Growth) --- */}
            <section className="partner-visual-section">
                <div className="split-container">
                    <div className="visual-image">
                        <img src={partnerImg} alt="Denim Stack" />
                    </div>
                    <div className="visual-text">
                        <span className="section-subtitle">SCALABILITY</span>
                        <h3>Grow With Us.</h3>
                        <p>
                            Whether you are a boutique retailer, a large chain, or an online store, 
                            our solutions are designed to scale with you.
                        </p>
                        <ul className="visual-list">
                            <li>
                                <i className="fas fa-check-circle"></i> 
                                <div><strong>Low MOQs:</strong> Start small and scale up.</div>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i> 
                                <div><strong>Premium Fabrics:</strong> Access to top-tier mills.</div>
                            </li> 
                            <li>
                                <i className="fas fa-check-circle"></i> 
                                <div><strong>Coustomize :</strong>Jeans customized as per your requirements.</div>
                            </li>
                        </ul>
                        
                        
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Wholesale;