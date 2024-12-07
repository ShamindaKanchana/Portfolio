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
          Aspiring to become a versatile data professional, I am driven by a passion for both data science and data analysis. I am dedicated to continuous learning and staying up-to-date with the latest advancements in the field. My goal is to leverage my analytical skills to extract valuable insights from raw data, transforming it into actionable intelligence that drives innovative solutions.<br /><br />

          Currently pursuing a <b>BSc Honours in Computer Science at the University of Jaffna</b>, I am an undergraduate with a strong commitment to growing my knowledge and experience in the domain of data science.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:shamindakanchana@icloud.com" className={styles.contactBtn}>
            Send a mail
          </a>
          <a href="https://drive.google.com/file/d/1zv_xxDy0U-WUVfCgJFTdAMMpfEwXcQSw/view?usp=sharing" className={styles.resumeBtn}>
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
