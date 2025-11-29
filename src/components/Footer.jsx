import React from "react";
import "./Footer.css";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Rss
} from "lucide-react";


export default function LxFooter() {
  return (
    <footer className="lx-footer">

      {/* Ribbon */}
      <div className="lx-footer-ribbon">
        <h2 className="lx-footer-company">
          <span className="lx-footer-brand">Lax360</span> Private Limited
        </h2>
      </div>

      {/* Contact Cards */}
      <div className="lx-footer-contact-box">
        <div className="lx-footer-contact-grid">

          <div className="lx-footer-card">
            <Phone className="lx-footer-icon" size={54} />
            <h4 className="lx-footer-card-title">(+91) 9566679928 </h4>
            <p>Mon – Sat (9 AM – 7 PM)</p>
          </div>

          <div className="lx-footer-card">
            <Mail className="lx-footer-icon" size={54} />
            <h4 className="lx-footer-card-title">support@caddpoint.co.in</h4>
            <p>We're here to help</p>
          </div>

          <div className="lx-footer-card">
            <MapPin className="lx-footer-icon" size={54} />
            <h4 className="lx-footer-card-title">CADDPOINT – Salem</h4>
            <p>1st Floor, CPS Tower, Advaitha Ashram Rd, Fairlands, Salem - 636007 </p>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="lx-footer-main lx-fade">

        <div className="lx-footer-cols">

          <div className="lx-footer-col">
            <h3 className="lx-footer-heading">Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Why Choose Us</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Awards</a></li>
            </ul>
          </div>

          <div className="lx-footer-col">
            <h3 className="lx-footer-heading">Services</h3>
            <ul>
              <li><a href="#">CADD Training</a></li>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">Corporate Training</a></li>
              <li><a href="#">Placement Support</a></li>
            </ul>
          </div>

          <div className="lx-footer-col">
            <h3 className="lx-footer-heading">Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Refund</a></li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div className="lx-footer-col">
            <h3>Connect With Us Through Social Media</h3>
            <p className="lx-footer-note">Get updates about new courses & offers</p>
            <div className="lx-footer-social">
              <a href="https://www.facebook.com/share/p/1BauKWFCSr/"><Facebook size={22} /></a>
              <a href="https://www.instagram.com/cadpoint_salem?igsh=MWpwdGIwdjE5M2g3Nw=="><Instagram size={22} /></a>
              <a href="#"><Rss size={22} /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="lx-footer-bottom">
        <p>
          © {new Date().getFullYear()}
          <span className="lx-footer-brand"> Lax360 </span>
          Private Limited — All Rights Reserved
        </p>
      </div>

    </footer>
  );
}
