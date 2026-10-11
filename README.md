# Resume website

A Next.js Pages Router website with a MongoDB-backed resume and a PDF view.

## Development

Use Node.js 24 LTS (supported: Node 22.13+ in the 22.x line, or Node 24+).

```sh
npm ci
npm run dev
```

Create `.env.local` with your database connection string:

```dotenv
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/
```

The application reads one document from `website.resume`. Both `/Resume` and
`/ResumePdf` require that database at request time. An empty collection returns
404; connection or configuration errors remain server errors. Builds do not
connect to MongoDB. The Inter font is downloaded from Google during a cold build.

## Validation and production

```sh
npm run lint
npm run build
npm start
npm audit --omit=dev
```

## Dependency maintenance

Dependencies were updated on October 11, 2026. The project uses Next.js 16.4,
React 19.3, Tailwind CSS 4.3, Headless UI 2.2, React PDF 4.9, MongoDB driver 7.7,
and Typed.js 3.0. The committed npm lockfile records the complete dependency tree.

- Tailwind uses `@tailwindcss/postcss`; `globals.css` explicitly loads the existing
  theme configuration. Autoprefixer is no longer needed.
- Turbopack handles SVG components through `@svgr/webpack` in `next.config.mjs`.
- Linting uses ESLint's flat configuration and the ESLint CLI.
- ESLint stays on 9.39.5 because `eslint-plugin-react` 7.37.5, used by Next.js,
  does not support ESLint 10. Revisit this when the plugin adds support.
- The production dependency audit has no known vulnerabilities. The full audit
  reports five high-severity entries from one unpatched `braces` advisory in
  the development-only Next.js lint dependency chain. There is no patched
  release listed at https://github.com/advisories/GHSA-vfj7-8cjw-p6xm.
  Avoid `npm audit fix --force`: its suggested change downgrades the Next.js
  lint configuration to version 14 and breaks the current setup.
