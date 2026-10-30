# Portfolio architekta wnętrz

React + TypeScript + Vite + Tailwind CSS — portfolio zbudowane na podstawie `concept.html`.

---

## Lokalny podgląd

```bash
npm install
npm run dev
```

Otwórz `http://localhost:5173`.

## Build produkcyjny

```bash
npm run build
```

Wynik trafia do katalogu `dist/`.

---

## Deploy na DigitalOcean App Platform

1. Wrzuć projekt do repozytorium GitHub.
2. W DigitalOcean wejdź w **Apps → Create App → GitHub** i wybierz repo.
3. Wybierz typ komponentu **Static Site**.
4. Ustaw:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Kliknij **Next → Deploy**.

Każdy push do gałęzi main będzie automatycznie przebudowywał stronę.

---

## Assety

Zdjęcia znajdują się w `public/images/`. Pełna lista plików, ich zastosowań
i proponowanych opisów alt znajduje się w `public/images/README.md`.
