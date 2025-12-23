import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./HorizontalEditorial.css";

import img1 from "../assets/hero/hero1.jpg";
import img2 from "../assets/hero/hero2.jpg";
import img3 from "../assets/hero/hero3.jpg";
import img4 from "../assets/hero/hero4.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalEditorial(){

  const sectionRef=useRef();
  const trackRef=useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      // Horizontal scroll
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.2,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + trackRef.current.offsetWidth
        }
      });
      // Text fade/slide in for each panel
      panels.forEach((panel, i) => {
        const text = panel.querySelector(".panel-text");
        if (text) {
          gsap.fromTo(
            text,
            { y: 40, opacity: 0, filter: "blur(8px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1.1,
              delay: 0.1 + i * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: ScrollTrigger.getById(sectionRef.current),
                start: "left center",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return(
    <section className="horizontal-editorial" ref={sectionRef}>
      <div className="track" ref={trackRef}>

        <div className="panel">
          <img src={img1} alt="Denim Buddy"/>
          <div className="panel-text">
            <h2>Crafted From the Source</h2>
            <p>Manufacturing excellence you can feel.</p>
          </div>
        </div>

        <div className="panel">
          <img src={img2} alt="Denim Buddy"/>
          <div className="panel-text">
            <h2>Precision Fit</h2>
            <p>Engineered for modern movement.</p>
          </div>
        </div>

        <div className="panel">
          <img src={img3} alt="Denim Buddy"/>
          <div className="panel-text">
            <h2>Factory-Grade Denim</h2>
            <p>Built to last, styled to lead.</p>
          </div>
        </div>

        <div className="panel">
          <img src={img4} alt="Denim Buddy"/>
          <div className="panel-text">
            <h2>Ready for Global Scale</h2>
            <p>Consistent quality, worldwide reach.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
