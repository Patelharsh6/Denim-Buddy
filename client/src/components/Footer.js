import "./Footer.css";

export default function Footer(){
  return(
    <footer className="footer">
      <div className="footer-content">
        <h3>Denim Buddy</h3>
        <p>
          Premium men’s denim crafted with manufacturer-grade precision.
          Built for reliability, style, and scale.
        </p>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Denim Buddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
