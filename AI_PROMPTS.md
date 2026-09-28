# AI Prompts Documentation — Airbnb Clone
**Project:** KriraAI Take-Home Task  
**Developer:** Dhruv Solanki  

---

## 1. System Prompt & Setup
> "Build a pixel-perfect, production-grade Airbnb clone in Next.js/React replicating reference https://airbnb-orpin-pi.vercel.app/ with exact visual styling, fonts, color palette (#FF385C), micro-animations, and full keyboard accessibility across all 3 screens (Home Listing Carousels, Photo Tour Gallery Overlay, and Lightbox Single Photo Viewer)."

---

## 2. Component Design & Structure Prompts
- **Navbar & Navigation:**
  - *"Generate a responsive Airbnb header navbar matching the official UI: Airbnb logo SVG in #FF385C, interactive tabs ('Homes' with active underline bar, 'Experiences' with NEW badge, 'Services' with NEW badge), right action items ('Become a host', Globe language modal, User menu pill with hamburger and avatar profile dropdown)."*
- **Search Bar:**
  - *"Implement a pill-shaped search bar with sections for 'Where' (destination search & popular destination quick-picks), 'When' (date range selection), and 'Who' (guest counter with increment/decrement buttons), complete with pink circular magnifying-glass search trigger and reset filter action."*
- **Listing Section & Cards:**
  - *"Create horizontal carousels for 'Places to stay in Pune' and 'Popular homes in North Goa' with smooth scroll navigation buttons (< and >). Build ListingCard with 4:3 aspect ratio image carousel, pagination dots, 'Guest favourite' badge, animated heart wishlist toggle with localStorage persistence, and price per night formatting."*
- **Screen 2 — Photo Tour:**
  - *"Implement a full-screen overlay for the property photo tour featuring a top sticky bar with back navigation, share & save actions, quick-jump room category thumbnails (Living room, Full kitchen, Dining area, Bedrooms, Bathrooms, Balcony, Additional photos), and high-resolution photo grids."*
- **Screen 3 — Lightbox Single Photo Viewer:**
  - *"Create a focused photo viewer with smooth slide transitions, photo title indicator, dynamic photo counter ('1 of 23'), floating left/right navigation controls, click-outside-to-close, and custom React hook for ArrowLeft, ArrowRight, and Escape key bindings."*

---

## 3. Backend & Full-Stack Integration
- **Next.js & Express REST API:**
  - *"Expose `GET /api/listings` endpoint supporting query filters (location, category, guests, price) with structured JSON payload, error handling, and MongoDB Atlas schema integration."*

---

## 4. Production Scale Architecture
- **Architecture Specification:**
  - *"Model a high-concurrency microservice cloud deployment diagram representing User Browser -> Cloudflare CDN -> Vercel Edge Frontend -> AWS API Gateway -> Node/Express Microservices & Elasticsearch Search Service -> MongoDB Atlas, PostgreSQL, Redis Cluster, and AWS S3 Media Store."*
