# 🍊 react-fav

[![npm version](https://img.shields.io/npm/v/react-fav.svg)](https://www.npmjs.com/package/react-fav)
[![minzipped size](https://badgen.net/bundlephobia/minzip/react-fav)](https://bundlephobia.com/result?p=react-fav)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> **A cute, animated favorite button for React apps.**

Add a fun, GSAP-powered favorite (like/heart) button to your blog, portfolio, or product with a single import. Supports persistent counts via optional backend API.

---

## ✨ Features

- 🍊 Animated SVG orange button
- ⚡ Smooth GSAP animations
- 🔢 Shows favorite count (with optional backend)
- 🪶 Lightweight and tree-shakable
- 🛠️ Zero-config, works out of the box
- 🖥️ SSR/Next.js/Vercel-friendly
- 🟦 TypeScript support

---

## 📦 Installation

```bash
npm install react-fav
# or
pnpm add react-fav
# or
yarn add react-fav
```

---

## 🚀 Usage

```jsx
import { Orange } from 'react-fav';
import 'react-fav/dist/react-fav.css';

export default function App() {
  return <Orange />;
}
```

---

## ⚙️ How It Works

- Click the orange to "favorite".
- The orange animates and fills up as you click.
- Favorite count is fetched from `/api/favorites/[domain]` (see below).
- No props required. Just drop in `<Orange />`.


---

## 📄 License

MIT License © 2024 Dzung Vu

---

## 🙏 Credits
- [GSAP](https://greensock.com/gsap/) for animation
- [Upstash Redis](https://upstash.com/) for backend example


