

## Plan: Hero Stats Cards, Case Studies, Testimonials, and Explainer Section

### Summary
Restructure the site with: floating stats cards in the hero, detailed case studies in Results, a testimonials section with real client names, and an embedded video/explainer section. Keep the phone marquee near the top. No "Deliverables" section.

---

### 1. Hero -- Add Floating Stats Sidebar
**File:** `src/components/Hero.tsx`

- Keep all existing copy (headline, subtitle, CTAs) but shift to left-aligned on desktop
- Add 2-3 small frosted glass stat cards floating on the right side (e.g. "$33M+ Generated", "40+ Clients Served", "41% Avg Open Rate")
- Cards use the existing glass style (`bg-card/80 backdrop-blur-xl border-border`)
- On mobile, stats stack below the CTA buttons
- LogoScroll stays at the bottom

### 2. Case Studies Section (Restructure Results)
**File:** `src/components/Results.tsx`

- Convert current Results grid into detailed case study cards
- Each card: client result headline, before/after metrics, and the existing dashboard screenshot as proof
- Three case studies using existing images:
  - `dashboard-detailed.png` -- "$592K+ in a single month"
  - `dashboard-summary.png` -- "$1M+ total, 326% growth"
  - `campaign-stats.png` -- "42-48% open rates"
- Add before/after stat pairs (e.g. "Before: 12% open rate / After: 46%")
- Glass card styling consistent with the light theme

### 3. Testimonials Section (New)
**File:** `src/components/Testimonials.tsx` (new)

- Grid of testimonial quote cards with placeholder quotes
- Client names: **Aqua**, **Funded Founder Futures**, **Goat Furniture**, **Blue Guardian**
- Each card: quote text (placeholder), client name, company name
- Glass card styling matching the rest of the site
- Placeholder text the user can swap later

### 4. Explainer/Video Section (New)
**File:** `src/components/Explainer.tsx` (new)

- Section with a headline like "See How It Works"
- Embedded video placeholder (a styled container with a play button overlay)
- Can embed a real YouTube/Vimeo URL later, or keep as a visual placeholder
- Glass card container with the light theme styling

### 5. Page Order Update
**File:** `src/pages/Index.tsx`

New order:
```
Navbar > Hero (with stats) > PhoneMarquee > StatBar > Services > Results (case studies) > Process > Explainer > Testimonials > Meaning > CTA > Footer
```

### 6. Navbar Update
**File:** `src/components/Navbar.tsx`

- Add "Testimonials" link to nav if not already present

---

### Technical Details
- All new components use `framer-motion` fade-in animations matching existing pattern
- Glass styling: `bg-card/80 backdrop-blur-xl border border-border rounded-2xl`
- Existing assets reused in case studies -- no new images needed
- Testimonials use placeholder quotes that can be edited later
- Explainer section uses an iframe-ready container or a styled placeholder with play icon

