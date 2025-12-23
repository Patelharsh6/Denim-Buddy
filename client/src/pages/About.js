import "./About.css";

export default function About(){
  return(
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>More Than Just a Pair of Jeans.</h1>
          <p>
            Built on craftsmanship, powered by manufacturing excellence,
            and driven by trust.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="story-content">
          <h2>Who We Are</h2>
          <p>
            Denim Buddy was born from a passion for craftsmanship and a legacy
            in manufacturing. We saw a gap in the market for men’s jeans that
            were both high-fashion and high-utility.
          </p>
          <p>
            Unlike typical brands, we are the source. From fabric selection
            to finishing, every stage is handled in-house. This gives us
            complete control over quality, consistency, and scale.
          </p>
          <p>
            Denim Buddy is built to be the “Buddy” you and your customers can
            rely on — today, tomorrow, and as your business grows.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>What Defines Denim Buddy</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Manufacturing DNA</h3>
            <p>
              We don’t outsource quality. Our factory-first approach ensures
              reliability at every scale.
            </p>
          </div>

          <div className="value-card">
            <h3>Zero-Defect Mindset</h3>
            <p>
              Each pair is inspected to meet durability and finishing standards
              demanded by global partners.
            </p>
          </div>

          <div className="value-card">
            <h3>Partner-Focused Growth</h3>
            <p>
              We grow when our partners grow — with consistent supply,
              pricing stability, and long-term trust.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
