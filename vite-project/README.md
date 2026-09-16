# Portfolio (Vite + React)

Single-page portfolio: About, Experience, Research, Certificates, Badges, Projects, Blogs, Contact. Anchor navigation, CSS Modules, static JSON data.

## Run locally

```bash
cd vite-project
npm install
npm run dev
```

## Blogs section (Series → Parts)

Flow: `Blogs titles → click series → episode thumbnails → click episode → hero on top + text below + LinkedIn footer`.

Blueprint: `vite-project/src/data/blogs.json`

```json
{
  "series": [{
    "id": "grafana-metrics",
    "title": "Understanding Grafana Metrics",
    "description": "...",
    "coverImage": "/blogs/grafana/cover.jpg",
    "tags": ["Grafana"],
    "episodes": [{
      "id": "part-3",
      "part": 3,
      "title": "Part 3 title",
      "thumbnail": "/blogs/grafana/p3-thumb.jpg",
      "heroImage": "/blogs/grafana/p3-hero.jpg",
      "date": "2026-09-15",
      "readMinutes": 5,
      "linkedinUrl": "https://www.linkedin.com/posts/...",
      "excerpt": "One-line teaser...",
      "body": [
        {"type": "paragraph", "text": "..."},
        {"type": "heading", "text": "..."},
        {"type": "list", "items": ["...", "..."]},
        {"type": "quote", "text": "..."},
        {"type": "code", "text": "print('hi')"},
        {"type": "image", "src": "/blogs/grafana/p3-fig1.png", "caption": "..."}
      ]
    }]
  }]
}
```

### Add new part (no code change)

1. Copy a LinkedIn post text into `body[]` blocks.
2. Set `linkedinUrl` field — rendered as `Originally posted on LinkedIn + [View on LinkedIn →]` footer.
3. Optional images: drop into `vite-project/public/blogs/<series>/` and set `/blogs/<series>/file.jpg`. Empty string `""` shows placeholder — safe for Netlify.
4. Commit + push — Netlify rebuilds automatically.

### Add new series

Copy one series object, change `id`, `title`, add `episodes[]`.

## Netlify deploy

Repo root contains `vite-project/` + `Old/`, so set:

- Base directory: `vite-project`
- Build command: `npm run build`
- Publish directory: `dist`

Blog images must live in `vite-project/public/blogs/` (copied to `dist` automatically). Do not use `vite-project/assets/` for new blog images — that folder is resolved via `getImageUrl()` in dev but is not auto-copied on build.

No router used, so no `_redirects` needed.
