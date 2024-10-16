import React from "react";
import styles from "./Badges.module.css";

// Import your badge images here
import IBMcloud from "/assets/badges/ibmCloud.png";
import IBMbigdata from "/assets/badges/ibmBigdata.png";
import DataAnalytics from "/assets/badges/GoogleDataAnalytics.png";
// Add more badges as needed

export const Badges = () => {
  const badges = [
    { src: IBMcloud, alt: "Badge 1", link: "https://www.credly.com/badges/556956a8-d620-4bc0-b4a8-fcf7753f49ae/public_url" },
    { src: IBMbigdata, alt: "Badge 2", link: "https://www.credly.com/badges/bdfe9bf3-c071-47ba-a18d-41e24cfe58fa/public_url" },
    { src: DataAnalytics, alt: "Badge 3", link: "https://www.credly.com/badges/ab330f0d-7408-49d5-905c-8e5ddff80e6f/public_url" }
    // Add more badges here as needed
  ];

  return (
    <section className={styles.container} id="badge">
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
