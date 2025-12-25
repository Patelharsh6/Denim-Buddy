import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroGSAP.css';
import heroImage from '../assets/hero/hero1.jpg'; // Path from your file structure

const HeroGSAP = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // 1. Background Image Zoom & Fade In
        tl.fromTo(".hero-bg-image", 
            { scale: 1.3, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 2 }
        );

        // 2. Main Title Slide Up
        tl.fromTo(titleRef.current, 
            { y: 100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1 }, 
            "-=1" // Starts 1 second before previous animation ends
        );

        // 3. Sub-headline Fade
        tl.fromTo(subTitleRef.current, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8 }, 
            "-=0.5"
        );

        // 4. CTA Buttons Stagger
        tl.fromTo(".hero-btn", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }, 
            "-=0.3"
        );
    }, []);

    return (
        <section className="hero-container" ref={heroRef}>
            <div className="hero-bg-image">
                <img src={heroImage} alt="Denim Manufacturing" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h4 className="hero-label">PREMIUM MANUFACTURING</h4>
                <h1 ref={titleRef} className="hero-title">
                    DENIM BUDDY
                </h1>
                <h2 ref={subTitleRef} className="hero-subtitle">
                    The New Standard in Men’s Denim.
                </h2>
                <p ref={contentRef} className="hero-description">
                    Merging timeless style with uncompromising quality. Crafting every pair from the thread up for the modern man.
                </p>
                <div className="hero-actions">
                    <button className="hero-btn btn-primary">View Collection</button>
                    <button className="hero-btn btn-outline">Partner With Us</button>
                </div>
            </div>
        </section>
    );
};

export default HeroGSAP;