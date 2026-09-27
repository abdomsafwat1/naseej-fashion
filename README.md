# NASEEJ — Fashion & Apparel (Front-End Only)

A premium, minimal fashion e-commerce front-end built with React, Vite and
Tailwind CSS. No backend, database or payment gateway — cart, wishlist and
theme preference persist in the browser via `localStorage`.

## Tech stack

- React 18 + Vite 5
- React Router DOM (routing)
- Tailwind CSS (styling, dark mode via the `class` strategy)
- Context API (`CartContext`, `WishlistContext`)
- react-icons

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/            (logo.png — your provided NASEEJ logo)
├── components/        Navbar, Footer, Hero, CategoryCard, ProductCard,
│                       ProductGrid, SearchBar, FilterBar, Rating,
│                       QuantitySelector, Newsletter, Loading, Logo,
│                       ScrollToTop
├── pages/              Home, Products, ProductDetails, Cart, About, Contact
├── context/            CartContext.jsx, WishlistContext.jsx
├── hooks/              useDarkMode.js
├── data/               products.js (20 fictional products)
├── App.jsx
├── main.jsx
└── index.css
```

## What's implemented

- **Home**: Hero, categories grid, new arrivals, promo banner, best sellers, newsletter
- **Products**: search, category filter, price range filter, sorting, responsive grid, empty state
- **Product Details**: size/color selection, quantity, add to cart, wishlist toggle, related products
- **Cart**: quantity controls, remove item, subtotal/shipping/total, empty-cart state, `localStorage` persistence
- **About / Contact**: brand story, mission, values, validated contact form with simulated success state
- **Dark mode**: toggle in the navbar, persisted in `localStorage`, full custom dark palette (not just inverted colors)
- **Responsive**: mobile, tablet and desktop layouts; sticky, collapsible mobile navbar

## Notes on images

Product, hero and category images use `picsum.photos` (a reliable placeholder
image service) so nothing ever breaks or 404s. Swap any `image` field in
`src/data/products.js`, or the URLs in `Hero.jsx` / `Home.jsx` / `About.jsx` /
`Contact.jsx`, for real photography whenever you have it.

## Notes on checkout

The **Checkout** button on the Cart page is intentionally a UI-only element —
this is a front-end-only project with no payment integration, as specified.
