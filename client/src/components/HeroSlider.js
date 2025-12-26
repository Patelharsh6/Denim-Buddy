import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'; 
import './HeroSlider.css';

// Import images
import img1 from '../assets/hero/bg-image.jpg';
import img2 from '../assets/hero/animation-2.jpg';
import img3 from '../assets/hero/animation-3.jpg';
import img4 from '../assets/hero/animation-4.jpg';
import img5 from '../assets/hero/animation-5.jpg';
import img6 from '../assets/hero/animation-6.jpg';

const images = [ img2, img3, img4, img5, img6 ];

const HeroSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);

    // 1. IMAGE SLIDER LOGIC
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    // 2. TEXT & BUTTON ANIMATION
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".subtitle", { 
                y: -20, 
                opacity: 0, 
                duration: 0.8,
                ease: "power2.out" 
            })
            .from("h1", { 
                y: 50, 
                opacity: 0, 
                duration: 1,
                ease: "power3.out" 
            }, "-=0.4")
            .from("p", { 
                y: 20, 
                opacity: 0, 
                duration: 0.8 
            }, "-=0.6")
            // --- BUTTON ANIMATION (RESTORED) ---
            .from(".btn", { 
                y: 20, 
                opacity: 0, 
                duration: 0.8, 
                stagger: 0.2,      // Animate one after another
                ease: "back.out(1.7)", // Nice "pop" effect
                clearProps: "all"  // SAFETY: Removes inline styles after animation
            }, "-=0.4");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-slider-container" ref={containerRef}>
            {/* Background Images */}
            <div className="hero-images">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
                    />
                ))}
            </div>

            {/* Content Overlay */}
            <div className="hero-content-overlay">
                <div className="hero-content">
                    <span className="subtitle">PREMIUM MANUFACTURING</span>
                    <h1>DENIM<br />BUDDY</h1>
                    <p>The New Standard in Men’s Denim.</p>
                    
                    <div className="hero-buttons">
                        <button className="btn btn-primary">VIEW COLLECTION</button>
                        <button className="btn btn-secondary">PARTNER WITH US</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;