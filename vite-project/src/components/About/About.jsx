import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section id="about" className={styles.container}> {/* Add id="about" */}
      <div className={styles.content}>
        <br /><br /><br />
        <h1 className={styles.title}>Hi, I'm Shaminda</h1>
        <p className={styles.description}>
        I am a recent software engineering graduate with Second Class Upper Division, and hands-on experience in AI, backend development, and deployment. Passionate about building scalable systems, I specialize in integrating AI tools, designing robust backends, and implementing CI/CD workflows. As an AI Intern at DiproIT I worked on ZK9500 fingerprint integration and researched AI-driven report generation; I now work as an Associate Software Engineer at Idasara Digital. I enjoy leveraging modern technologies to solve practical challenges while continuously learning and collaborating.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:shamindakanchana@icloud.com" className={styles.contactBtn}>
            Send a mail
          </a>
          <a href="https://drive.google.com/file/d/1BhJQ0FNqzgWUy9FIQhIRf5vrJYZqj7R6/view?usp=drive_link" className={styles.resumeBtn}>
            Resume
          </a>
        </div>
        <br /><br /><br />
      </div>
      <img
        src={getImageUrl("about/profile.png")}
        alt="About image of me"
        className={styles.aboutImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
