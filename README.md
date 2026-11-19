# Firas Aguech — portfolio

A static portfolio for Firas Aguech: AI engineer working across retrieval, evaluation, agents, and product engineering.

## Local preview

```sh
python3 -m http.server 8081
```

Open `http://127.0.0.1:8081/`.

There is no build step and no framework runtime. The site is plain HTML, CSS, and a small progressive-enhancement script.

## Structure

```text
/
├── index.html
├── projects/index.html
├── work/
│   ├── cockpit-ai/index.html
│   ├── presto/index.html
│   ├── ddos-detection/index.html
│   ├── d30-challenge/index.html
│   └── teachers-tn/index.html
├── experience/index.html
├── skills/index.html
├── about/index.html
├── contact/index.html
├── 404.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/site.css
    ├── js/site.js
    ├── docs/
    └── img/
```

The site is served at the domain root. Internal links and asset paths are root-relative.

## Deployment

GitHub Pages can serve the repository from the default branch root. `.nojekyll` is present so the static files are published directly; do not enable a Jekyll build for this site.

## Content notes

- Case-study claims are tied to the linked evidence and the signed Cockpit AI report.
- Presto’s original challenge repository and Kaggle link are no longer public; the case study uses preserved experiment records and does not link to a substitute.
- D30 Challenge is a team-built Smartegy product. The page does not claim sole ownership.
- The PDF resume predates the final content pass. Update it if the portfolio claims change.

## Before publishing

- Check every internal link and asset path.
- Validate `sitemap.xml` after adding pages.
- Run a final responsive and keyboard pass.
- Do not commit or deploy without explicit approval.
