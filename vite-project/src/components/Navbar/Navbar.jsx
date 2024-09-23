import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Add useEffect to update state when window scrolls
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false); // Close menu when user scrolls manually
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close menu after clicking a link
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <a href="#about" onClick={(e) => handleScrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#certificate" onClick={(e) => handleScrollToSection(e, "certificate")}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScrollToSection(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
