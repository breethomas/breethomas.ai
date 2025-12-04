# BreeThomas.ai

Personal portfolio site for Bree Thomas - Product Leader & AI Builder.

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [MDX](https://mdxjs.com) - Case study content

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Structure

```
src/
├── content/
│   └── case-studies/     # Markdown case study files
├── layouts/
│   └── BaseLayout.astro  # Main layout with nav/footer
├── pages/
│   ├── index.astro       # Home page
│   ├── about.astro       # About page
│   ├── contact.astro     # Contact page
│   └── work/
│       ├── index.astro   # Case study list
│       └── [slug].astro  # Individual case study
├── styles/
│   └── global.css        # Tailwind + custom styles
public/
└── images/               # Static images (headshots, etc.)
```

## Deployment

Deployed to Vercel, pointing to breethomas.ai domain.

## Adding/Editing Case Studies

Case studies are markdown files in `src/content/case-studies/`. Each file needs frontmatter:

```yaml
---
title: "Project Name"
description: "Brief description"
role: "Your Role"
year: "2024"
thumbnail: "/images/project-preview.png"
metrics: ["Metric 1", "Metric 2"]
order: 1
---
```

Then write the case study content in markdown below the frontmatter.
