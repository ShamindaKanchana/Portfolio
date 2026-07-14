import React from "react";
import styles from "./Research.module.css";
import { getImageUrl } from "../../utils";

const TAGS = [
  "Reed–Solomon",
  "DNA storage",
  "Galois Field",
  "OpenMP",
  "SIMD",
  "C++",
  "Python",
  "Schifra",
];

const posterSrc = getImageUrl("research/rs_codes_research_poster.png");

export const Research = () => {
  return (
    <section className={styles.container} id="research">
      <h2 className={styles.title}>Research</h2>

      <article className={styles.card}>
        <div className={styles.badges}>
          <span className={styles.badge}>Conference abstract</span>
        </div>

        <h3 className={styles.paperTitle}>
          Parallelizing Reed–Solomon Codes for Enhanced DNA Data Storage
        </h3>

        <p className={styles.meta}>
          Alwis, M.S.K. · Department of Physical Science · 1st International
          Conference on Applied Sciences (ICAS) 2025 · Faculty of Applied
          Science, University of Vavuniya, Sri Lanka
        </p>

        <div className={styles.layout}>
          <div className={styles.textCol}>
            <p className={styles.summary}>
              DNA storage promises extreme density and long-term durability, but
              synthesis and sequencing introduce high error rates. This research
              presents a parallel Reed–Solomon implementation over Galois
              fields, optimised for DNA digital storage: OpenMP multi-core
              parallelism with SIMD block processing, extending the Schifra
              library for DNA-oriented error patterns. Reported results include
              up to ~5.4× speedup and 100% decoding accuracy for two-symbol
              errors per block—bridging molecular archival media and
              high-performance error-correcting codes.
            </p>

            <ul className={styles.highlights}>
              <li>
                Custom and library-backed RS pipelines (Python GF implementation
                + C++/Schifra DNA storage paths)
              </li>
              <li>
                Block-based DNA sequence encode/decode (e.g. RS(15,11)) with
                padding, reconstruction, and parallel processing
              </li>
              <li>
                Published abstract in the University of Vavuniya Digital Research
                Repository (ICAS 2025)
              </li>
            </ul>

            <ul className={styles.tags}>
              {TAGS.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <div className={styles.links}>
              <a
                href="http://drr.vau.ac.lk/handle/123456789/1947"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Publication
              </a>
              <a
                href="http://drr.vau.ac.lk/bitstream/123456789/1947/1/proceedings_2025-After%20the%20conference%20%281%29-107-108.pdf"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abstract PDF
              </a>
              <a
                href="https://github.com/ShamindaKanchana/RS_codes"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
            </div>
          </div>

          <a
            href={posterSrc}
            className={styles.posterLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Open full research poster"
          >
            <img
              src={posterSrc}
              alt="Research poster: Parallelizing Reed-Solomon Codes for Enhanced DNA Data Storage"
              className={styles.poster}
            />
            <span className={styles.posterCaption}>View full poster</span>
          </a>
        </div>
      </article>
    </section>
  );
};
