import React, { useState } from "react";
import styles from "./Blogs.module.css";
import blogsData from "../../data/blogs.json";
import { getImageUrl } from "../../utils";

const resolveImage = (src) => {
  if (!src) return null;
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return getImageUrl(src);
};

const BodyBlock = ({ block }) => {
  if (block.type === "heading") return <h4 className={styles.articleHeading}>{block.text}</h4>;
  if (block.type === "quote") return <blockquote className={styles.articleQuote}>{block.text}</blockquote>;
  if (block.type === "list")
    return (
      <ul className={styles.articleList}>
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  if (block.type === "code")
    return (
      <pre className={styles.articleCode}>
        <code>{block.text}</code>
      </pre>
    );
  if (block.type === "image") {
    const src = resolveImage(block.src);
    if (!src) return null;
    return (
      <figure className={styles.articleFigure}>
        <img src={src} alt={block.caption || "Blog figure"} loading="lazy" />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    );
  }
  return <p className={styles.articlePara}>{block.text}</p>;
};

const Placeholder = ({ label }) => (
  <div className={styles.placeholder} aria-hidden="true">
    <span>{label}</span>
  </div>
);

export const Blogs = () => {
  const [selectedSeriesId, setSelectedSeriesId] = useState(null);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);

  const seriesList = blogsData.series || [];
  const selectedSeries = seriesList.find((s) => s.id === selectedSeriesId) || null;
  const selectedEpisode =
    selectedSeries?.episodes?.find((e) => e.id === selectedEpisodeId) || null;

  const scrollToTop = () => {
    const el = document.getElementById("blogs");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openSeries = (id) => {
    setSelectedSeriesId(id);
    setSelectedEpisodeId(null);
    scrollToTop();
  };

  const openEpisode = (seriesId, episodeId) => {
    setSelectedSeriesId(seriesId);
    setSelectedEpisodeId(episodeId);
    scrollToTop();
  };

  const goBackToSeries = () => {
    setSelectedEpisodeId(null);
    scrollToTop();
  };

  const goBackToAll = () => {
    setSelectedSeriesId(null);
    setSelectedEpisodeId(null);
    scrollToTop();
  };

  const stepEpisode = (dir) => {
    if (!selectedSeries || !selectedEpisode) return;
    const idx = selectedSeries.episodes.findIndex((e) => e.id === selectedEpisode.id);
    const next = selectedSeries.episodes[idx + dir];
    if (next) {
      setSelectedEpisodeId(next.id);
      scrollToTop();
    }
  };

  return (
    <section className={styles.container} id="blogs">
      <h2 className={styles.title}>Blogs</h2>
      <p className={styles.subtitle}>
        Series-based notes — originally posted on LinkedIn, archived here with full text.
      </p>

      {/* Level 3: Article view */}
      {selectedSeries && selectedEpisode && (
        <div>
          <div className={styles.crumb}>
            <button className={styles.crumbBtn} onClick={goBackToAll}>
              All series
            </button>
            <span className={styles.crumbSep}>/</span>
            <button className={styles.crumbBtn} onClick={goBackToSeries}>
              {selectedSeries.title}
            </button>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumbCurrent}>Part {selectedEpisode.part}</span>
          </div>

          <article className={styles.article}>
            {resolveImage(selectedEpisode.heroImage) ? (
              <img
                src={resolveImage(selectedEpisode.heroImage)}
                alt={selectedEpisode.title}
                className={styles.hero}
              />
            ) : (
              <Placeholder label={`Part ${selectedEpisode.part}`} />
            )}
            <h3 className={styles.articleTitle}>
              Part {selectedEpisode.part} — {selectedEpisode.title}
            </h3>
            <p className={styles.meta}>
              {selectedEpisode.date} · {selectedEpisode.readMinutes} min read ·{" "}
              {selectedSeries.title}
            </p>
            <div className={styles.articleBody}>
              {selectedEpisode.body.map((b, i) => (
                <BodyBlock key={i} block={b} />
              ))}
            </div>

            <div className={styles.linkedinFooter}>
              <p>
                Originally posted on LinkedIn
                {selectedEpisode.date ? ` on ${selectedEpisode.date}` : ""}.
              </p>
              {selectedEpisode.linkedinUrl && (
                <a
                  href={selectedEpisode.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinBtn}
                >
                  View on LinkedIn →
                </a>
              )}
            </div>

            <div className={styles.articleNav}>
              <button
                className={styles.navBtn}
                onClick={() => stepEpisode(-1)}
                disabled={
                  selectedSeries.episodes.findIndex(
                    (e) => e.id === selectedEpisode.id
                  ) <= 0
                }
              >
                ← Prev part
              </button>
              <button
                className={styles.navBtn}
                onClick={() => stepEpisode(1)}
                disabled={
                  selectedSeries.episodes.findIndex(
                    (e) => e.id === selectedEpisode.id
                  ) >=
                  selectedSeries.episodes.length - 1
                }
              >
                Next part →
              </button>
            </div>
          </article>
        </div>
      )}

      {/* Level 2: Episodes of one series */}
      {selectedSeries && !selectedEpisode && (
        <div>
          <div className={styles.crumb}>
            <button className={styles.crumbBtn} onClick={goBackToAll}>
              ← All series
            </button>
          </div>
          <div className={styles.seriesHeader}>
            <h3 className={styles.seriesTitle}>{selectedSeries.title}</h3>
            <p className={styles.seriesDesc}>{selectedSeries.description}</p>
          </div>
          <div className={styles.grid}>
            {selectedSeries.episodes.map((ep) => (
              <button
                key={ep.id}
                className={styles.card}
                onClick={() => openEpisode(selectedSeries.id, ep.id)}
              >
                {resolveImage(ep.thumbnail) ? (
                  <img
                    src={resolveImage(ep.thumbnail)}
                    alt={ep.title}
                    className={styles.thumb}
                    loading="lazy"
                  />
                ) : (
                  <Placeholder label={`Part ${ep.part}`} />
                )}
                <span className={styles.partBadge}>Part {ep.part}</span>
                <span className={styles.cardTitle}>{ep.title}</span>
                <span className={styles.cardExcerpt}>{ep.excerpt}</span>
                <span className={styles.meta}>
                  {ep.date} · {ep.readMinutes} min
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Level 1: Series titles */}
      {!selectedSeries && (
        <div className={styles.grid}>
          {seriesList.map((s) => (
            <button key={s.id} className={styles.card} onClick={() => openSeries(s.id)}>
              {resolveImage(s.coverImage) ? (
                <img
                  src={resolveImage(s.coverImage)}
                  alt={s.title}
                  className={styles.thumb}
                  loading="lazy"
                />
              ) : (
                <Placeholder label={`${s.episodes?.length || 0} parts`} />
              )}
              <span className={styles.cardTitle}>{s.title}</span>
              <span className={styles.cardExcerpt}>{s.description}</span>
              <span className={styles.meta}>
                {s.episodes?.length || 0} parts
                {s.tags?.length ? ` · ${s.tags.slice(0, 3).join(" · ")}` : ""}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
