# Music Explorer — Vue 3 UI

A Vue 3 front-end application for browsing and previewing music. Built as a learning project to practice Vue 3, the Composition API, Pinia, and Vue Router. Consumes the [music-explorer-web-api](https://github.com/matt-turan/music-explorer-ui) Symfony backend.

## Architecture

```
Vue 3 (this project) → music-explorer-web-api (Symfony) → Deezer Public API
```

---

## Requirements

- Node.js 20+
- The [music-explorer-web-api](https://github.com/matt-turan/music-explorer-ui) Symfony backend running locally on port 8000

---

## Local Setup

### 1. Clone the repo

```bash
git clone <repo-url>
cd music-explorer-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Symfony backend

Make sure the Symfony API is running before starting the UI:

```bash
# In the music-explorer-web-api directory
symfony serve --no-tls
```

The API must be available at `http://localhost:8000`.

### 4. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Features

- **Search** — search for artists and tracks via the Deezer public API
- **Audio previews** — play 30 second track previews directly in the browser
- **Artist pages** — view artist details and full album discography
- **Album pages** — view album track listings with durations and previews
- **Routing** — full client-side navigation between search, artist, and album views

---

## Project Structure

```
src/
  views/
    HomeView.vue       — Search interface and results listing
    ArtistView.vue     — Artist details and album grid
    AlbumView.vue      — Album details and track listing
  stores/
    musicStore.ts      — Pinia store for search state
  services/
    api.ts             — All API calls to the Symfony backend
  router/
    index.ts           — Vue Router route definitions
  App.vue              — Root component with nav bar
  main.ts              — App entry point
```

---

## Tech Stack

- [Vue 3](https://vuejs.org/) — Composition API with `<script setup>`
- [Pinia](https://pinia.vuejs.org/) — State management
- [Vue Router](https://router.vuejs.org/) — Client-side routing
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vite](https://vitejs.dev/) — Build tooling and dev server

---

## Notes

- The app requires the Symfony backend to be running locally — all API calls go through it, not directly to Deezer
- No authentication required
- Audio previews are 30 seconds, sourced directly from Deezer's CDN
