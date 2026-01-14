# 🎬 Filmic - A Premium Cinematic Experience

**Filmic** is a high-end, immersive web application designed for film enthusiasts. It combines a minimalist, dark-themed aesthetic with advanced animations to provide a boutique movie library experience. Users can discover legendary actors, explore iconic production studios, and curate their own personal watchlist.

---

## 📽️ Implemented Features

### 1. **Cinematic Homepage**
- **Dynamic Movie Spotlight:** An auto-shuffling hero section that highlights masterpieces with smooth "fade-and-slide" transitions every 6 seconds.
- **Studio Powerhouses (Vertical Marquee):** A unique, triple-column vertical slider showcasing legendary production studios (A24, Warner Bros, etc.) with parallax-like motion.
- **Icons of Performance:** An infinite, slow-moving horizontal marquee featuring the world's greatest actors with interactive grayscale-to-color transitions.
- **Cinema Quotes Slider:** An elegant, auto-rotating slider featuring iconic lines from film history with blur-reveal effects.

### 2. **Authentication System**
- **Cinematic Login:** A secure, glassmorphic login portal with persistent sessions via cookies.
- **Mock Access:** Hardcoded credentials provided for immediate exploration of member-only features.
- **Protected Routes:** Automatic redirection for unauthenticated users attempting to access sensitive areas like the Watchlist or Contribution pages.

### 3. **Personal Cinema (Wishlist)**
- **Collection Management:** A dedicated space where users can save and manage films they want to watch.
- **Persistence:** All data is saved to `localStorage`, ensuring your curated list remains available across sessions.
- **Premium Toasts:** Custom-built notification system using Framer Motion to provide instant, stylish feedback when adding or removing films.

### 4. **Movie Exploration**
- **Detailed Film Pages:** Deep-dive into movie metadata, including synopses, cast billing, and director credits.
- **Dynamic Routing:** Individualized URL structures for every movie in the library.

### 5. **Global Polish**
- **Dark Mode Aesthetic:** A curated color palette focused on deep blacks, subtle grays, and vibrant primary accents.
- **Custom 404 Page:** A branded "Scene Not Found" experience that keeps users immersed even when a link is broken.

---

## 🛣️ Route Summary

| Route | Description | Accessibility |
| :--- | :--- | :--- |
| `/` | Homepage (Spotlight, Studios, Actors, Quotes) | Public |
| `/movies` | Complete Movie Library & Exploration | Public |
| `/movies/[id]` | Deep-dive Movie details and production info | Public |
| `/wishlist` | Personal "Want to Watch" collection | **Authenticated Only** |
| `/add-movies` | Cinematic submission portal for new films | **Authenticated Only** |
| `/login` | Access portal for the "Personal Cinema" features | Public |
| `/about` | Brand philosophy and platform vision | Public |

---

## 🛠️ Setup & Installation

Follow these steps to set up the production on your local machine:

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd filmic
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the premiere.

4. **Mock Credentials**
   - **Email:** `admin@filmic.com`
   - **Password:** `filmic2026`

---

## 🚀 Deployment

The project is configured for **Vercel** with optimized caching and clean URL handling. Simply connect your GitHub repository to Vercel and it will automatically deploy using the settings in `vercel.json`.

---

## 🏗️ Technology Stack

- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS & Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Persistence:** js-cookie & LocalStorage
