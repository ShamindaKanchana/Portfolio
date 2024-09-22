import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shaminda</h1>
      <p className={styles.description}> 
        Aspiring to become a versatile data professional, I am driven by a passion for both data science and data analysis. I am
dedicated to continuous learning and staying up-to-date with the latest advancements in the field. My goal is to leverage my
analytical skills to extract valuable insights from raw data, transforming it into actionable intelligence that drives innovative
solutions
        </p>
        <a href="mailto:msk60310910@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        
      </div>
      <img
        src={getImageUrl("about/profile.png")}
        alt="About image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
