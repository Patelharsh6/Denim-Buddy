import "./Contact.css";

export default function Contact(){
  return(
    <div className="contact">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Ready to Bring Denim Buddy to Your Store?</h1>
          <p>Let’s talk business.</p>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-form-section">
        <div className="contact-container">

          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Whether you’re interested in wholesale, manufacturing,
              or long-term partnerships, our team is ready to connect.
            </p>

            <div className="info-item">
              <span>Email</span>
              <p>business@denimbuddy.com</p>
            </div>

            <div className="info-item">
              <span>WhatsApp</span>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Business Name" required />
            <input type="text" placeholder="Store Location" required />

            <select required>
              <option value="">Inquiry Type</option>
              <option>Wholesale</option>
              <option>Manufacturing</option>
            </select>

            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Submit Inquiry</button>
          </form>

        </div>
      </section>

    </div>
  );
}
