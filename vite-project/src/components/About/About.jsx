import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const BIO_SENTENCES = [
  "I am a recent BSc (Hons) in Computer Science graduate with Second Class Upper Division, and hands-on experience in AI, backend development, and deployment.",
  "Passionate about building scalable systems, I specialize in integrating AI tools, designing robust backends, and implementing CI/CD workflows.",
  "As an AI Intern at DiproIT I worked on ZK9500 fingerprint integration and researched AI-driven report generation; I now work as an Associate Software Engineer at Idasara Digital.",
  "I enjoy leveraging modern technologies to solve practical challenges while continuously learning and collaborating.",
];

const SENTENCE_DELAY_MS = 700;

export const About = () => {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Start animation when About enters the viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisibleCount(BIO_SENTENCES.length);
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          setVisibleCount(1); // show first sentence immediately
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Reveal sentences one by one
  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount >= BIO_SENTENCES.length) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisibleCount(BIO_SENTENCES.length);
      return;
    }

    const timer = setTimeout(() => {
      setVisibleCount((n) => n + 1);
    }, SENTENCE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleCount]);

  const showButtons = visibleCount >= BIO_SENTENCES.length;

  return (
    <section id="about" className={styles.container} ref={sectionRef}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Hi, I'm Shaminda</h1>
        <img
          src={getImageUrl("about/profile.png")}
          alt="Profile photo of Shaminda"
          className={styles.aboutImg}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.description} aria-live="polite">
          {BIO_SENTENCES.slice(0, visibleCount).map((sentence, index) => (
            <p key={index} className={styles.sentence}>
              {sentence}
            </p>
          ))}
        </div>

        <div
          className={`${styles.buttonContainer} ${
            showButtons ? styles.buttonsVisible : styles.buttonsHidden
          }`}
        >
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
