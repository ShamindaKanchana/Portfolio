import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {experience.map((item, id) => (
          <article key={id} className={styles.card}>
            <div className={styles.marker} aria-hidden="true" />
            <div className={styles.cardBody}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.organisation}>{item.organisation}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.type}>{item.type}</span>
                  <span className={styles.dates}>
                    {item.startDate
                      ? `${item.startDate} – ${item.endDate}`
                      : item.endDate}
                  </span>
                  {item.location ? (
                    <span className={styles.location}>{item.location}</span>
                  ) : null}
                </div>
              </div>
              <ul className={styles.highlights}>
                {item.highlights.map((point, pointId) => (
                  <li key={pointId}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
