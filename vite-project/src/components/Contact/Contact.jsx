import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/shaminda-kanchana-275371216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shaminda Kanchana
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a
              href="https://github.com/ShamindaKanchana"
              target="_blank"
              rel="noopener noreferrer"
            >
              ShamindaKanchana
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>
        © 2026 Shaminda Kanchana. All rights reserved.
      </p>
    </footer>
  );
};
