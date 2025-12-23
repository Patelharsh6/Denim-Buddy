
import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import "./HeroGSAP.css";

export default function HeroGSAP(){

  const heroRef=useRef();
  const overlayRef=useRef();
  const titleRef=useRef();
  const subRef=useRef();
  const btnRef=useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate overlay gradient
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0, scale: 1.08 },
          { opacity: 0.7, scale: 1, duration: 1.2, ease: "power2.out" }
        );
      }

      // Animate title
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out"
        }
      );

      // Animate subtitle
      gsap.fromTo(
        subRef.current,
        { y: 40, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          delay: 0.25,
          ease: "power3.out"
        }
      );

      // Animate buttons
      gsap.fromTo(
        btnRef.current,
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: 0.5,
          ease: "back.out(1.7)"
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-gsap" ref={heroRef}>
      <div className="hero-overlay" ref={overlayRef}></div>
      <div className="hero-content">
        <h1 ref={titleRef}>
          Denim Buddy – Premium Men’s Denim Manufacturer & Wholesaler
        </h1>
        <p ref={subRef}>
          Crafting premium men’s denim from our manufacturing facility in
          <strong> [City, Country]</strong>. Built from the thread up for
          brands, retailers, and modern men worldwide.
        </p>
        <div className="hero-buttons" ref={btnRef}>
          <button className="btn primary">View Denim Collection</button>
          <button className="btn secondary">Partner With Our Factory</button>
        </div>
      </div>
    </section>
  );
}
