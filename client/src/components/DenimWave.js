import {Canvas,useFrame} from "@react-three/fiber";
import {useRef,useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./DenimWave.css";

gsap.registerPlugin(ScrollTrigger);

function Fabric() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const geometry = meshRef.current.geometry;
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      // Smoother, layered wave
      const y = Math.sin(i * 0.13 + time * 1.1) * 0.13 + Math.cos(i * 0.18 + time * 0.7) * 0.07;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <planeGeometry args={[5, 3, 60, 60]} />
      <meshStandardMaterial
        color="#1e40af"
        roughness={0.78}
        metalness={0.18}
        transparent
        opacity={0.98}
      />
    </mesh>
  );
}

export default function DenimWave(){

  const sectionRef=useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0.7, filter: "blur(6px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        },
        duration: 1.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <section className="denim-wave" ref={sectionRef}>
      <Canvas camera={{ position: [0, 0, 6] }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <pointLight position={[-3, 2, 4]} intensity={0.3} color="#60a5fa" />
        <Fabric />
      </Canvas>
      <div className="wave-text">
        <h2>Engineered Denim Fabric</h2>
        <p>Crafted for strength, movement, and long-term durability.</p>
      </div>
    </section>
  );
}
