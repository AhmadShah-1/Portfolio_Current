# Ahmad Shah — Portfolio

A personal portfolio built with Next.js, React, Tailwind CSS, MDX, and Framer Motion.

## Run locally

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Content

- Page components live in `pages/`.
- Shared interface components live in `components/`.
- Project case studies are MDX files in `content/projects/`.
- Project filters are maintained in `data/projectTags.js`.
- Images, videos, papers, and the résumé live in `public/Assets/`.

To add a project, create a new `.mdx` file in `content/projects/` with front matter matching the existing entries. Add its slug to `data/projectTags.js` if it should appear in a filter.
