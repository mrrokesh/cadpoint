import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const menuRefs = useRef([]);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { 
      name: "Course", 
      submenus: [
        { name: "IT & Non IT", path: "/it-non-it" },
        { name: "Multimedia", path: "/Multimedia" },
        { name: "Finance", path: "/finance" },
        { name: "Civil & Architecture Design", path: "/civil-arch" },
        { name: "Mechanical & Aeronautical Design", path: "/MechAndAero" },
        { name: "Electrical & Electronics Design", path: "/ElectricalAndElectronics" },
      ]
    },
    { name: "Ecosystem", path: "/Ecosystem" },
    { name: "Registration", path: "/registration" },
  ];

  // Close menu on resize if desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect active menu for underline
  const isActive = (path, submenus) => {
    if (submenus) {
      return submenus.some(sub => sub.path === location.pathname);
    }
    return path === location.pathname;
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>CADDPOINT</div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Mobile close button */}
      {menuOpen && (
        <div className="mobile-close" onClick={() => setMenuOpen(false)}>
          &times;
        </div>
      )}

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {menus.map((menu, idx) => (
          <li 
            key={idx} 
            className={`menu-item ${isActive(menu.path, menu.submenus) ? "active" : ""} ${menu.submenus ? "has-dropdown" : ""}`}
          >
            {menu.submenus ? (
              <>
                <span>{menu.name}</span>
                <ul className="dropdown">
                  {menu.submenus.map((sub, i) => (
                    <li key={i} className={location.pathname === sub.path ? "active" : ""}>
                      <Link to={sub.path} onClick={() => setMenuOpen(false)}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={menu.path} onClick={() => setMenuOpen(false)}>
                {menu.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
