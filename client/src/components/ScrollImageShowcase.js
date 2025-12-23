import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./ScrollImageShowcase.css";

import img1 from "../assets/hero/hero1.jpg";
import img2 from "../assets/hero/hero2.jpg";
import img3 from "../assets/hero/hero3.jpg";
import img4 from "../assets/hero/hero4.jpg";
import img5 from "../assets/hero/hero5.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollImageShowcase(){

  const sectionRef=useRef();
  const imagesRef=useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1.2,
          pin: true
        }
      });

      imagesRef.current.forEach((img, i) => {
        // Parallax and fade/scale in
        tl.fromTo(
          img,
          { opacity: 0, scale: 1.12, y: 40, filter: "blur(8px)" },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out"
          }
        );

        if (i !== imagesRef.current.length - 1) {
          // Fade/scale/blur out
          tl.to(img, {
            opacity: 0,
            scale: 0.97,
            y: -30,
            filter: "blur(6px)",
            duration: 1.1,
            ease: "power2.inOut"
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return(
    <section className="scroll-showcase" ref={sectionRef}>
      <div className="image-layer">
        {[img1,img2,img3,img4,img5].map((img,i)=>(
          <img
            key={i}
            src={img}
            alt="Denim Buddy"
            ref={el=>imagesRef.current[i]=el}
          />
        ))}
      </div>
    </section>
  );
}
