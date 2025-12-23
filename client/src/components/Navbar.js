import {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
  const[open,setOpen]=useState(false);

  return(
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">Denim Buddy</div>

        <div className={`nav-links ${open?"active":""}`}>
          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link to="/wholesale" onClick={()=>setOpen(false)}>Wholesale</Link>
          <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>

          <Link to="/contact">
            <button className="mobile-btn">Partner With Us</button>
          </Link>
        </div>

        <div className="hamburger" onClick={()=>setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Link to="/contact">
          <button className="nav-btn desktop">Partner With Us</button>
        </Link>

      </div>
    </nav>
  );
}
