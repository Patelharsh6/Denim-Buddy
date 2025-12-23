import "./Wholesale.css";

export default function Wholesale(){
  return(
    <div className="wholesale">

      {/* HERO */}
      <section className="wholesale-hero">
        <div className="wholesale-hero-content">
          <h1>Partner With a Leading Industry Player.</h1>
          <p>
            Manufacturer strength. Designer brand appeal.
            Built for retailers who demand consistency, margins, and trust.
          </p>
        </div>
      </section>

      {/* PITCH */}
      <section className="wholesale-pitch">
        <div className="pitch-content">
          <h2>Why Denim Buddy?</h2>
          <p>
            Are you looking to stock high-quality men’s denim?
            Denim Buddy offers the infrastructure of a global manufacturer
            with the soul of a premium brand.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="wholesale-benefits">
        <h2>Wholesale Advantages</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Manufacturer Pricing</h3>
            <p>
              Factory-direct rates that maximize your retail profit
              without compromising quality.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Consistent Supply</h3>
            <p>
              Reliable lead times and scalable production capacity
              to support your growth.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Marketing Support</h3>
            <p>
              Access to premium lifestyle and product photography
              to elevate your in-store and online presence.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Long-Term Partnership</h3>
            <p>
              We focus on sustainable relationships, not one-time orders.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wholesale-cta">
        <h2>Let’s Build a Strong Denim Business Together</h2>
        <p>
          Connect with our team to discuss wholesale opportunities,
          private labeling, or long-term supply partnerships.
        </p>
        <button>Get in Touch</button>
      </section>

    </div>
  );
}
