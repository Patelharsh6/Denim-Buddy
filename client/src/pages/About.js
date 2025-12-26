import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; 
import './About.css';
import SEO from '../components/SEO';

// Import images (Ensure paths match your project structure)
import aboutHero from '../assets/hero/animation-1.jpg'; 
import storyImg from '../assets/hero/story1.jpg'; // Image for Story section
import factoryImg from '../assets/hero/animation-1.jpg'; // For Grid
import stitchingImg from '../assets/hero/animation-1.jpg'; // For Grid
import img1 from '../assets/hero/grid1.jpg'; // For Grid
import img2 from '../assets/hero/grid2.jpg'; // For Grid

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // 1. Hero Animation
        gsap.from(".hero-text-anim", {
            y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2
        });

        // 2. Vertical Advantage Cards
        gsap.from(".adv-feature", {
            scrollTrigger: { trigger: ".vertical-advantage", start: "top 80%" },
            y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
        });

        // 3. Stats Bars
        gsap.utils.toArray(".stat-bar-fill").forEach((bar) => {
            gsap.from(bar, {
                scrollTrigger: { trigger: ".stats-container", start: "top 80%" },
                width: "0%", duration: 1.5, ease: "power2.out"
            });
        });

        // 4. Grid Animation
        gsap.from(".grid-block", {
            scrollTrigger: { trigger: ".proof-grid", start: "top 80%" },
            opacity: 0, scale: 0.95, duration: 0.8, stagger: 0.1, ease: "power2.out"
        });

        // 5. Mission Animation
        gsap.from(".mission-content", {
            scrollTrigger: { trigger: ".mission-section", start: "top 75%" },
            y: 40, opacity: 0, duration: 1, ease: "power2.out"
        });

    }, []);

    return (
        <div className="about-page">
            
            <SEO 
                title="About Us | Vertical Denim Manufacturing Factory in Ahmedabad"
                description="Tour the Denim Buddy factory. We are a vertically integrated denim manufacturer in Gujarat with zero-defect quality control and sustainable laundry processes."
                keywords="Vertical denim manufacturing, Sustainable jeans factory, Denim production process, Ahmedabad textile industry, Jeans stitching unit, Denim washing plant India"
                url="https://denimbuddy.com/about"
                schemaType="AboutPage"
            />

            {/* --- 1. HERO SECTION --- */}
            <div className="about-header">
                <div className="about-overlay"></div>
                <div className="about-header-content">
                    <span className="hero-subtitle hero-text-anim">ABOUT US</span>
                    <h1 className="hero-text-anim">BEYOND THE LABEL.<br/>WE ARE THE MAKERS.</h1>
                    <div className="accent-bar hero-text-anim"></div>
                    <p className="hero-text-anim">Redefining the New Standard in Men’s Denim from the Heart of Ahmedabad.</p>
                </div>
            </div>

            {/* --- 2. THE STORY (Split Layout) --- */}
            <section className="about-section">
                <div className="about-content">
                    <span className="section-subtitle">BORN FROM INDUSTRY</span>
                    <h2>The Denim Buddy Story.</h2>
                    <p>
                        Denim is the backbone of the modern wardrobe, and Ahmedabad, Gujarat, is the pulse of 
                        India’s textile power. Denim Buddy was born at the intersection of these two worlds.
                    </p>
                    <p>
                        We realized the global market was flooded with "labels" that lacked substance. 
                        We decided to build something different: a brand backed by the <strong>Manufacturing Edge</strong>. 
                        We don't just source denim; we engineer it from the thread up, ensuring that every pair meets 
                        the demands of the modern man who refuses to compromise.
                    </p>
                </div>
                <div className="about-image-wrapper">
                    <img src={storyImg} alt="Denim Production" />
                </div>
            </section>

            {/* --- 3. VERTICAL ADVANTAGE (Clean Features) --- */}
            <section className="vertical-advantage">
                <div className="va-container">
                    <div className="section-header-left">
                        <span className="section-subtitle">WHY WE LEAD</span>
                        <h2>The Vertical Advantage.</h2>
                        <p className="section-desc">
                            As a premier men’s denim manufacturer, our strength lies in our Vertical Integration. 
                            By controlling every stage of production in our state-of-the-art facility, we offer 
                            a level of transparency and quality that traditional brands cannot match.
                        </p>
                    </div>

                    <div className="adv-features-grid">
                        {/* Feature 1 */}
                        <div className="adv-feature">
                            <div className="adv-icon"><i className="fas fa-crosshairs"></i></div>
                            <h3>Precision Manufacturing</h3>
                            <p>Operating with a Zero-Defect Standard, our facility ensures every stitch is verified for durability and fit.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="adv-feature">
                            <div className="adv-icon"><i className="fas fa-layer-group"></i></div>
                            <h3>Scalable Production</h3>
                            <p>With a capacity of 50k+ units, we are built to handle massive global demand without sacrificing artisan craftsmanship.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="adv-feature">
                            <div className="adv-icon"><i className="fas fa-handshake"></i></div>
                            <h3>Direct-to-Partner Value</h3>
                            <p>By eliminating middlemen, we provide superior margins for our wholesale partners and unrivaled value for our individual customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. THE PROOF SECTION (Same as Photo: Stats Left / Grid Right) --- */}
            <section className="proof-section">
                <div className="stats-container">
                    
                    {/* LEFT: Data & Stats */}
                    <div className="stats-text">
                        <span className="section-subtitle">THE DATA</span>
                        <h2>Our Numbers Speak About Everything.</h2>
                        <p className="stats-desc">
                            We don't just make claims; we track our performance. From production speed to 
                            client satisfaction, here is the data behind Denim Buddy.
                        </p>

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

                    {/* RIGHT: The 2x2 Grid (Strict Layout) */}
                    
                    <div className="facts-grid-wrapper">
                        <div className="grid-row">
                            <div className="grid-box img-box">
                                <img src={img1} alt="Product Sold" />
                                <span className="box-overlay-text"></span>
                            </div>
                            <div className="grid-box red-box">
                                <h3>50,000+</h3>
                                <p>Units Monthly Capacity</p>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className="grid-box red-box">
                                <h3>200+</h3>
                                <p>Partners</p>
                            </div>
                            <div className="grid-box img-box">
                                <img src={img2} alt="Stitching Detail" />
                                <span className="box-overlay-text"></span>
                            </div>
                            </div>
                        </div>

                    </div>
            </section>


            {/* --- GLOBAL REACH SECTION --- */}
            <section className="about-section reverse">
                
                <div className="about-content">
                    <span className="section-subtitle">LOCAL ROOTS</span>
                    <h2>Global Reach.</h2>
                    <p>
                        Denim Buddy is more than a local brand; we are a global denim exporter. 
                        Shipping direct from our Gujarat hub to retail partners worldwide, we carry the 
                        <strong> "Make in India"</strong> spirit into every wardrobe.
                    </p>
                    <p>
                        Our advanced laundry techniques and sustainable processes ensure that our denim 
                        doesn't just look good—it’s built to last.
                    </p>
                    
                    {/* Optional: Visual List for the features mentioned */}
                    <ul className="about-list">
                        <li><i className="fas fa-globe-asia"></i> Exporting Worldwide</li>
                        <li><i className="fas fa-water"></i> Advanced Laundry Techniques</li>
                        <li><i className="fas fa-leaf"></i> Sustainable Processes</li>
                    </ul>
                </div>
            </section>


            {/* --- 5. MISSION & CTA --- */}
            <section className="mission-section">
                <div className="mission-content">
                    <div className="mission-icon"><i className="fas fa-quote-left"></i></div>
                    <h2>OUR MISSION</h2>
                    <p className="mission-text">
                        To provide the modern man with his ultimate "Buddy" in the wardrobe—a pair of jeans 
                        that combines the grit of industrial manufacturing with the soul of designer style.
                    </p>
                    
                    <div className="cta-divider"></div>
                    
                    <h3>CHOOSE YOUR PATH</h3>
                    <p className="cta-sub">Whether you are wearing us or stocking us, you are choosing the manufacturing power of the future.</p>
                    
                    <div className="mission-buttons">
                        <Link to="/wholesale" className="btn-dark">
                            SHOP THE COLLECTION
                        </Link>
                        <Link to="/contact" className="btn-outline-dark">
                            BECOME A GLOBAL PARTNER
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;