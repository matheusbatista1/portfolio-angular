# portfolio-angular

Matheus Batista's personal portfolio, built with **Angular 17** and server-side rendering (Angular Universal / SSR).

> **Note:** This is an earlier version of my portfolio. It has since been replaced by a newer build, [matheusbatista-tech](https://github.com/matheusbatista1/matheusbatista-tech), made with Next.js. This repository is kept as a reference to the previous Angular implementation and is no longer actively developed.

## Tech stack

| Area               | Technology                                              |
| ------------------ | ------------------------------------------------------- |
| Framework          | Angular 17.3 (standalone APIs, Angular CLI)             |
| Language           | TypeScript 5.4                                          |
| Styling            | SCSS                                                    |
| UI components       | Angular Material + Angular CDK                          |
| Rendering           | Server-side rendering via Angular SSR (`@angular/ssr`)  |
| SSR server          | Express                                                 |
| Reactive utilities  | RxJS                                                    |
| Unit testing        | Karma + Jasmine                                         |

## Getting started

### Prerequisites

- Node.js 18+
- A package manager (npm is assumed below)
- Angular CLI — optional globally; it's already included as a dev dependency

### Install

```bash
npm install
```

### Run the dev server

```bash
npm start
```

This runs `ng serve`. Once it's up, open [http://localhost:4200/](http://localhost:4200/); the app reloads automatically as you edit source files.

## Available scripts

| Script                        | What it does                                          |
| ----------------------------- | ----------------------------------------------------- |
| `npm start`                   | Start the local dev server (`ng serve`)               |
| `npm run build`               | Production build into `dist/portfolio`                |
| `npm run watch`               | Build in development mode and rebuild on file changes |
| `npm test`                    | Run unit tests with Karma + Jasmine                   |
| `npm run serve:ssr:portfolio` | Serve the server-side-rendered (SSR) build            |

## Build

```bash
npm run build
```

Build artifacts are written to the `dist/portfolio` directory.

## Server-side rendering (SSR)

This project is configured for server-side rendering. The SSR entry point lives in [`server.ts`](server.ts) and is served through Express, with prerendering enabled in the build configuration.

To build and run the SSR version:

```bash
npm run build
npm run serve:ssr:portfolio
```

The `serve:ssr:portfolio` script runs the compiled server bundle from `dist/portfolio` with Node, so make sure you've built the project first.

## Testing

Unit tests run on [Karma](https://karma-runner.github.io) with [Jasmine](https://jasmine.github.io):

```bash
npm test
```

> End-to-end tests are not configured out of the box. To add them, install an e2e runner of your choice — the Angular CLI no longer ships one by default.

## Project structure

```
.
├── src/                  # Application source
│   ├── app/              # Components, services, routes, shared code
│   │   ├── app.config.ts        # Standalone app providers (router, hydration)
│   │   └── app.config.server.ts # Server-side providers (SSR)
│   ├── main.ts           # Browser bootstrap
│   ├── main.server.ts    # Server bootstrap (SSR)
│   └── styles.scss       # Global styles
├── server.ts             # Express server entry point for SSR
├── angular.json          # Angular CLI workspace configuration
└── package.json
```

## Further reading

- [Angular CLI overview and command reference](https://angular.dev/tools/cli)
- [Angular SSR / hydration guide](https://angular.dev/guide/ssr)

## Contact

Matheus Batista — [matheus.sbatista@outlook.com](mailto:matheus.sbatista@outlook.com)
