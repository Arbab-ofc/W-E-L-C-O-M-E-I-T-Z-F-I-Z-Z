<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:45db7d,100:1f1f1f&height=220&section=header&text=WELCOME%20ITZ%20FIZZ&fontSize=48&fontColor=0a0a0a&animation=fadeIn" alt="Welcome Itz Fizz header" />

<p>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/GSAP-0AE448?style=for-the-badge&logo=greensock&logoColor=0a0a0a" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

<p><strong>Scroll‑scrubbed hero track with a car that reveals the headline as it moves.</strong></p>

<p>
  <a href="https://github.com/Arbab-ofc/W-E-L-C-O-M-E-I-T-Z-F-I-Z-Z">
    <img src="https://img.shields.io/badge/Repo-View%20on%20GitHub-0b0f0b?style=for-the-badge" />
  </a>
  <a href="https://arbab-ofc.github.io/W-E-L-C-O-M-E-I-T-Z-F-I-Z-Z/">
    <img src="https://img.shields.io/badge/Live%20Site-Open-45db7d?style=for-the-badge" />
  </a>
</p>

</div>

---

## About

A Vite + React single‑page experience built around a bold hero animation. The car scrubs horizontally on scroll, the track fills progressively, and the headline reveals only where the car has covered. Stat cards are split above and below the track to balance the composition.

## Highlights

- Scroll‑scrubbed hero animation with GSAP ScrollTrigger
- Track fill synced with car position
- Headline text reveal masked to the fill
- Split stats layout for a premium, editorial feel
- Responsive sizing for track, headline, and car

## How It Works (Map Diagram)

```mermaid
flowchart LR
  A[User Scroll] --> B[ScrollTrigger Timeline]
  B --> C[Car X Position]
  B --> D[Track Fill Scale]
  B --> E[Headline Reveal %]
  C --> F[Car Moves on Track]
  D --> G[Green Track Progress]
  E --> H[Headline Reveals Covered Area]
  F --> I[Visual Sync]
  G --> I
  H --> I
```

## Tech Stack

- React
- Vite
- GSAP + ScrollTrigger
- CSS

## Project Structure

```
.
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ styles.css
│  └─ main.jsx
├─ index.html
└─ package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Clone

```
git clone https://github.com/Arbab-ofc/W-E-L-C-O-M-E-I-T-Z-F-I-Z-Z.git
cd W-E-L-C-O-M-E-I-T-Z-F-I-Z-Z
```

### Install

```
npm install
```

### Run (Development)

```
npm run dev
```

### Build

```
npm run build
```

### Preview

```
npm run preview
```

## Deploy (GitHub Pages)

### One‑time Setup

```
npm install --save-dev gh-pages
```

### Deploy

```
npm run build
npm run deploy
```

### GitHub Pages Settings

- Repo → Settings → Pages
- Source: `gh-pages` / `/ (root)`

## Customization

- Track and headline styles: `src/styles.css`
- Hero animation logic: `src/components/Hero.jsx`
- Car asset: `src/assets/hero-visual.png`

---

## Contact

<p>
  <a href="https://github.com/Arbab-ofc">
    <img src="https://img.shields.io/badge/GitHub-Arbab--ofc-0b0f0b?style=for-the-badge&logo=github" />
  </a>
  <a href="mailto:arbabprvt@gmail.com">
    <img src="https://img.shields.io/badge/Email-arbabprvt%40gmail.com-45db7d?style=for-the-badge&logo=gmail&logoColor=0a0a0a" />
  </a>
  <a href="https://www.linkedin.com/in/arbab-ofc/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>
