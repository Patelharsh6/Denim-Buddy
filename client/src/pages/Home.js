import "./Home.css";
import HeroGSAP from "../components/HeroGSAP";
import ScrollImageShowcase    from "../components/ScrollImageShowcase";
import DenimWave from "../components/DenimWave";
import HorizontalEditorial from "../components/HorizontalEditorial";
import FactoryStats from "../components/FactoryStats";

export default function Home(){
  return(
    <div className="home">

      {/* HERO SECTION */}
      <div className="main-stack">
        <section className="section-wrap">
          <HeroGSAP />
        </section>
        <section className="section-wrap">
          <ScrollImageShowcase />
        </section>
        <section className="section-wrap">
          <DenimWave />
        </section>
        <section className="section-wrap">
          <HorizontalEditorial />
        </section>
        <section className="section-wrap">
          <FactoryStats />
        </section>
      </div>

      {/* FEATURED FITS */}
      <section className="fits">
        <h2>Featured Fits</h2>
        <p className="fits-sub">
          Crafted from high-grade fabric designed to withstand the wear and tear of everyday life.
        </p>

        <div className="fits-grid">
          <div className="fit-card">
            <div className="fit-img"></div>
            <h3>The Slim Buddy</h3>
            <p>Modern, sleek, and sharp.</p>
          </div>

          <div className="fit-card">
            <div className="fit-img"></div>
            <h3>The Classic Buddy</h3>
            <p>Timeless straight-cut for daily reliability.</p>
          </div>

          <div className="fit-card">
            <div className="fit-img"></div>
            <h3>The Relaxed Buddy</h3>
            <p>Maximum comfort with factory-strength durability.</p>
          </div>
        </div>
      </section>

      {/* MANUFACTURING EDGE */}
      <section className="manufacturing">
        <h2>Vertical Integration. Unrivaled Quality.</h2>
        <p>
          We are more than a brand—we are the makers.
          By owning the production process, we ensure that every pair of Denim Buddy jeans
          meets a zero-defect standard. From raw yarn selection to advanced eco-wash laundry,
          we control the quality so you can trust the product.
        </p>
      </section>

      {/* FUN FACTS */}
      <section className="facts">
        <div className="fact">
          <h3>50k+</h3>
          <p>Units Monthly</p>
        </div>
        <div className="fact">
          <h3>100%</h3>
          <p>Factory Inspected</p>
        </div>
        <div className="fact">
          <h3>15+</h3>
          <p>Years Mastery</p>
        </div>
        <div className="fact">
          <h3>Direct</h3>
          <p>To Partner</p>
        </div>
      </section>

    </div>
  );
}
