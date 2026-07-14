import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      {/* Title + profile on one row */}
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Hi, I'm Shaminda</h1>
        <img
          src={getImageUrl("about/profile.png")}
          alt="Profile photo of Shaminda"
          className={styles.aboutImg}
        />
      </div>

      {/* Full-width bio below — no photo beside it */}
      <div className={styles.body}>
        <p className={styles.description}>
          I am a recent BSc (Hons) in Computer Science graduate with Second
          Class Upper Division, and hands-on experience in AI, backend
          development, and deployment. Passionate about building scalable
          systems, I specialize in integrating AI tools, designing robust
          backends, and implementing CI/CD workflows. As an AI Intern at
          DiproIT I worked on ZK9500 fingerprint integration and researched
          AI-driven report generation; I now work as an Associate Software
          Engineer at Idasara Digital. I enjoy leveraging modern technologies
          to solve practical challenges while continuously learning and
          collaborating.
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="mailto:shamindakanchana@icloud.com"
            className={styles.contactBtn}
          >
            Send a mail
          </a>
          <a
            href="https://drive.google.com/file/d/1BhJQ0FNqzgWUy9FIQhIRf5vrJYZqj7R6/view?usp=drive_link"
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
