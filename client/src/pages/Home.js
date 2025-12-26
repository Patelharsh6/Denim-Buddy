import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';

// Import images
import img1 from '../assets/hero/productsold.jpg'; 
import img2 from '../assets/hero/fit-image.jpg';
import img3 from '../assets/hero/yourstyle.jpg';
import aboutHero from '../assets/hero/auto1.jpg';
import factoryImg from '../assets/hero/auto2.jpg';
import stitchingImg from '../assets/hero/auto3.jpg';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        // Animation for "Who We Are"
        gsap.from(".about-content", {
            scrollTrigger: { trigger: ".home-about", start: "top 80%" },
            y: 30, opacity: 0, duration: 1, ease: "power3.out"
        });

        // Animation for "Fun Facts"
        gsap.from(".facts-text-col", {
            scrollTrigger: { trigger: ".fun-facts-section", start: "top 75%" },
            y: 30, opacity: 0, duration: 1
        });

        // gsap.from(".grid-box", {
        //     scrollTrigger: { trigger: ".facts-grid-wrapper", start: "top 80%" },
        //     scale: 0.9, opacity: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)"
        // });

        // Animation for "Why Choose Us"
        gsap.from(".choose-text-panel", {
            scrollTrigger: { trigger: ".why-choose-section", start: "top 75%" },
            y: 30, opacity: 0, duration: 1
        });

    }, []);

    return (
        <div className="home-page">


            <SEO 
                title="Best Jeans Manufacturer in India"
                description="Denim Buddy is a top-rated Men's Denim Manufacturer in Ahmedabad. We offer wholesale jeans, private labeling, and factory-direct pricing with 50k+ capacity."
                keywords="Jeans manufacturer India, Denim factory Ahmedabad, Wholesale jeans supplier"
            />
            
            {/* 1. HERO SLIDER */}
            <HeroSlider />

            {/* 2. WHO WE ARE (Introduction) */}
            <section className="home-about">
                <div className="single-column-container">
                    <div className="about-content centered">
                        <div className="about-decoration"><span className="deco-arrow">➳</span></div>
                        <h4 className="about-subtitle">WHO WE ARE</h4>
                        <h2 className="about-title">Find Your Perfect Fit With Denim Buddy.</h2>
                        <p className="about-text">
                            Merging timeless style with uncompromising quality. As leading manufacturers based in Ahmedabad, Gujarat, India, we craft every pair from the thread up for the modern man who demands more.
                        </p>
                    </div>
                    <div className="about-divider"></div>
                </div>
            </section>

            {/* --- AUTO SCROLLING GALLERY --- */}
            <section className="auto-scroll-section">
                <div className="scroll-container">
                    <div className="scroll-track">
                        
                        {/* FIRST SET OF IMAGES */}
                        <div className="scroll-card">
                            <img src={aboutHero} alt="Production 1" />
                        </div>
                        <div className="scroll-card">
                            <img src={factoryImg} alt="Production 2" />
                        </div>
                        <div className="scroll-card">
                            <img src={stitchingImg} alt="Production 3" />
                        </div>

                        {/* DUPLICATE SET (Required for Seamless Loop) */}
                        <div className="scroll-card">
                            <img src={aboutHero} alt="Production 1" />
                        </div>
                        <div className="scroll-card">
                            <img src={factoryImg} alt="Production 2" />
                        </div>
                        <div className="scroll-card">
                            <img src={stitchingImg} alt="Production 3" />
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. WHY CHOOSE US (Stacked: Text Top -> Image Bottom) */}
            <section className="why-choose-section">
                <div className="single-column-container">
                    
                    {/* Part A: Blue Text Panel */}
                    <div className="choose-text-panel">
                        <div className="about-decoration"><span className="deco-arrow" style={{color: '#d4af37'}}>➳</span></div>
                        <h4 className="about-subtitle" style={{color: '#94a3b8'}}>The Manufacturing Edge (The Power Play)</h4>
                        <h2 className="about-title" style={{color: '#fff'}}>Vertical Integration. Unrivaled Quality.</h2>
                        <p className="about-text" style={{color: '#cbd5e1'}}>
                            We are more than a brand—we are the makers. Operating from our state-of-the-art facility in Ahmedabad, we ensure that every pair of Denim Buddy jeans meets a zero-defect standard. From raw yarn selection to our advanced laundry in India, we control the quality so you can trust the product.
                        </p>
                    </div>

                    {/* Part B: Image Panel */}
                    <div className="choose-image-panel">
                        <img src={img3} alt="Why Choose Us" />
                        <div className="red-overlay-card">
                            <i className="fas fa-industry"></i>
                            <h3>Style According To Your Way</h3>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. INFO SECTION (Vertical Integration) */}
            <section className="info-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Fun Fact</h2>
                        <div className="accent-line"></div>
                        <p>We are more than a brand—we are the makers.</p>
                    </div>
                    <div className="info-grid">
                        <div className="info-card">
                            <i className="fas fa-industry"></i>
                            <h3>50k+ Units</h3>
                            <p>Scalable production for global demand</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-check-double"></i>
                            <h3>Zero Defect</h3>
                            <p>Every stitch verified in-house for durability</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-globe-americas"></i>
                            <h3>Global Export</h3>
                            <p> Shipping direct from our Ahmedabad Gujarat hub to retail partners worldwide</p>
                        </div>
                        <div className="info-card">
                            <i class="fa-solid fa-handshake"></i>
                            <h3>Direct-to-Partner</h3>
                            <p> No middlemen. Superior margins for your business</p>
                        </div>

                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Home;