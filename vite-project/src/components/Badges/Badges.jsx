import React from "react";
import styles from "./Badges.module.css";

// Import your badge images here
import IBMcloud from "/assets/badges/ibmCloud.png";
import IBMbigdata from "/assets/badges/ibmBigdata.png";
import DataAnalytics from "/assets/badges/GoogleDataAnalytics.png";
import kaggle1year from "/assets/badges/1yearOnKaggle.svg";
import pythoncoder from "/assets/badges/pythoncoder.svg";
import codefoker from "/assets/badges/codefoker.svg";
import collector from "/assets/badges/collector.svg";
import learner from "/assets/badges/learner.svg";
// Add more badges as needed

export const Badges = () => {
  const badges = [
    { src: IBMcloud, alt: "Badge 1", link: "https://www.credly.com/badges/556956a8-d620-4bc0-b4a8-fcf7753f49ae/public_url" },
    { src: IBMbigdata, alt: "Badge 2", link: "https://www.credly.com/badges/bdfe9bf3-c071-47ba-a18d-41e24cfe58fa/public_url" },
    { src: DataAnalytics, alt: "Badge 3", link: "https://www.credly.com/badges/ab330f0d-7408-49d5-905c-8e5ddff80e6f/public_url" },
    { src: kaggle1year, alt: "Badge 4", link: "https://www.kaggle.com/certification/badges/shamindakanchana/49" },
    { src: pythoncoder, alt: "Badge 5", link: "https://www.kaggle.com/certification/badges/shamindakanchana/30" },
    { src: codefoker, alt: "Badge 6", link: "https://www.kaggle.com/certification/badges/shamindakanchana/38" },
    { src: collector, alt: "Badge 7", link: "https://www.kaggle.com/certification/badges/shamindakanchana/42" },
    { src: learner, alt: "Badge 8", link: "https://www.kaggle.com/certification/badges/shamindakanchana/46" }
    // Add more badges here as needed
  ];

  return (
    <section className={styles.container} id="badges">
      <h2 className={styles.title}>Badges</h2><br />
      <div className={styles.content}>
        <div className={styles.scrollContainer}>
          <div className={styles.gallery}>
            {badges.map((badge, index) => (
              <a
                key={index}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badgeItem}
              >
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className={styles.badgeImage}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
