import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./FactoryStats.css";

gsap.registerPlugin(ScrollTrigger);

export default function FactoryStats(){

  const sectionRef=useRef();
  const numbersRef=useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el, i) => {
        const endValue = +el.dataset.value;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 2.2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              once: true
            },
            onUpdate: function () {
              el.innerText = Math.floor(el.innerText);
              el.classList.add("stat-animating");
            },
            onComplete: function () {
              el.innerText = endValue;
              el.classList.remove("stat-animating");
              el.classList.add("stat-highlight");
              setTimeout(() => el.classList.remove("stat-highlight"), 900);
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return(
    <section className="factory-stats" ref={sectionRef}>

      <h2 className="stats-title">
        Manufacturing Strength You Can Trust
      </h2>

      <div className="stats-grid">

        <div className="stat">
          <span ref={el=>numbersRef.current[0]=el} data-value="50000">0</span>
          <p>Units Produced Monthly</p>
        </div>

        <div className="stat">
          <span ref={el=>numbersRef.current[1]=el} data-value="100">0</span>
          <p>In-House Quality Inspection (%)</p>
        </div>

        <div className="stat">
          <span ref={el=>numbersRef.current[2]=el} data-value="15">0</span>
          <p>Years of Denim Manufacturing</p>
        </div>

        <div className="stat">
          <span ref={el=>numbersRef.current[3]=el} data-value="20">0</span>
          <p>Countries Supplied Worldwide</p>
        </div>

      </div>

    </section>
  );
}
