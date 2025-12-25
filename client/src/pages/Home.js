import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';
import HeroSlider from '../components/HeroSlider';

// Import images
import img1 from '../assets/hero/productsold.jpg'; 
import img2 from '../assets/hero/fit-image.jpg';
import img3 from '../assets/hero/yourstyle.jpg';


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

            {/* 3. FUN FACTS (Stacked: Text Top -> Grid Bottom) */}
            <section className="fun-facts-section">
                <div className="single-column-container">
                    
                    {/* Part A: Text & Progress Bars */}
                    <div className="facts-text-col">
                        <div className="about-decoration"><span className="deco-arrow">➳</span></div>
                        <h4 className="about-subtitle">FUN FACTS</h4>
                        <h2 className="about-title">Our Numbers Speak About Everything</h2>
                        <p className="about-text">
                            There are many variations of passages available, but our commitment to quality remains constant.
                        </p>

                        <div className="progress-group">
                            <div className="progress-wrapper">
                                <div className="p-label"><span>Ankle Fit</span><span>88%</span></div>
                                <div className="p-bar"><div className="p-fill" style={{width: '88%'}}></div></div>
                            </div>
                            <div className="progress-wrapper">
                                <div className="p-label"><span>Narrow Fit</span><span>60%</span></div>
                                <div className="p-bar"><div className="p-fill" style={{width: '60%'}}></div></div>
                            </div>
                            <div className="progress-wrapper">
                                <div className="p-label"><span>Comfort Fit</span><span>75%</span></div>
                                <div className="p-bar"><div className="p-fill" style={{width: '75%'}}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* Part B: The 2x2 Grid (Placed Below Text) */}
                    <div className="facts-grid-wrapper">
                        <div className="grid-row">
                            <div className="grid-box img-box">
                                <img src={img1} alt="Product Sold" />
                                <span className="box-overlay-text">Product Sold</span>
                            </div>
                            <div className="grid-box red-box">
                                <h3>10000+</h3>
                                <p>Designs</p>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className="grid-box red-box">
                                <h3>200+</h3>
                                <p>Client</p>
                            </div>
                            <div className="grid-box img-box">
                                <img src={img2} alt="Perfect Fit" />
                                <span className="box-overlay-text">Perfect Fit</span>
                            </div>
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
                        <h2>Vertical Integration. Unrivaled Quality.</h2>
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