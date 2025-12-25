import React, { useEffect } from 'react';
import './About.css';
// Ensure you have these images or change the path to what you have in assets
import aboutHero from '../assets/hero/animation-1.jpg'; 
import factoryImg from '../assets/hero/animation-1.jpg'; 

const About = () => {
    
    // Simple fade-in effect when page loads
    useEffect(() => {
        window.scrollTo(0, 0); // Always start at top
    }, []);

    return (
        <div className="about-page">
            
            {/* 1. Header Section */}
            <div className="about-header">
                <h1>THE DENIM BUDDY STORY</h1>
                <p>Redefining manufacturing excellence from the thread up.</p>
            </div>

            {/* 2. Who We Are (Split Layout) */}
            <section className="about-section">
                <div className="about-content">
                    <h2>More Than Just a Brand.</h2>
                    <p>
                        Founded in the heart of the textile industry, Denim Buddy was built 
                        on a simple premise: <strong>Quality should never be a luxury; it should be a standard.</strong>
                    </p>
                    <p>
                        We aren't just a label. We are a fully vertical manufacturing partner. 
                        From selecting the finest raw cotton to the final rivet, we control 
                        every step of the process. This ensures that every pair of jeans 
                        leaving our facility meets a zero-defect standard.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutHero} alt="Denim Manufacturing Process" />
                </div>
            </section>

            {/* 3. Our Manufacturing Edge (Reverse Split) */}
            <section className="about-section reverse">
                <div className="about-image">
                    <img src={factoryImg} alt="Factory Floor" />
                </div>
                <div className="about-content">
                    <h2>Built for Scale.</h2>
                    <p>
                        Our facility is designed for high-volume, high-precision output. 
                        Whether you are a boutique brand or a global retailer, our infrastructure 
                        adapts to your needs.
                    </p>
                    <ul className="about-list">
                        <li><i className="fas fa-check-circle"></i> <strong>50,000+</strong> Units Monthly Capacity</li>
                        <li><i className="fas fa-check-circle"></i> <strong>Sustainable</strong> Washing Techniques</li>
                        <li><i className="fas fa-check-circle"></i> <strong>Global</strong> Logistics Network</li>
                    </ul>
                </div>
            </section>

            
        </div>
    );
};

export default About;