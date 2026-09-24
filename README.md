# Dhruv Baslas | Data Engineer Portfolio

Personal portfolio for Dhruv Baslas, a Data Engineer focused on Azure, Databricks, PySpark, Lakehouse architecture, and metadata-driven data platforms.

Live site: [dhruvbaslas.github.io](https://dhruvbaslas.github.io)

## Stack

- React 18
- Vite
- Vitest and Testing Library
- Bootstrap 5 and Bootstrap Icons
- GitHub Pages via `gh-pages`

## Local Development

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/dhruvbaslas/dhruvbaslas.github.io.git
cd dhruvbaslas.github.io
npm install
npm run dev
```

Open `http://localhost:5173`.

## Validation

```bash
npm test
npm run build
```

The test suite covers the primary portfolio content and external link destinations. The build output is generated in `dist/`.

## Deployment

The repository deploys the Vite `dist/` directory to the `gh-pages` branch:

```bash
npm run deploy
```

GitHub Pages serves the site at `https://dhruvbaslas.github.io`.

## Structure

Each portfolio section is an independent component in `src/Components/`. `App.jsx` owns only the theme state and page composition. Static assets live in `src/Static/`, while public metadata and the favicon live in `public/`.

## License

[MIT](LICENSE)
