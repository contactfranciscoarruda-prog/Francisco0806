---
name: website-animations
description: Use when someone asks to add animations, transitions, motion effects, scroll animations, hover effects, or any animated UI elements to the veos website.
argument-hint: [element or animation type]
---

## What This Skill Does

Adds polished animations and motion effects to the veos website. Covers CSS transitions, keyframe animations, scroll-triggered effects, hover states, entrance animations, and JS-driven motion (GSAP, Framer Motion, or vanilla).

## Steps

1. **Understand the request** — Read $ARGUMENTS to identify what needs animating (hero, navbar, cards, text, images, page transitions, etc.). If unclear, ask the user which element and what feeling they want (smooth, snappy, dramatic, subtle).

2. **Check existing code** — Read the relevant component/page file before writing anything. Note current class names, structure, and any existing animation libraries.

3. **Choose the right tool**
   - Simple hover/entrance: pure CSS (`transition`, `@keyframes`)
   - Scroll-triggered: CSS `@keyframes` + `IntersectionObserver`, or GSAP ScrollTrigger if already in project
   - Complex sequences / timeline: GSAP or Framer Motion
   - Page transitions: Framer Motion `AnimatePresence` if React, or View Transitions API

4. **Implement the animation**
   - Keep animations under 400ms for UI feedback, 600–900ms for entrances, up to 1200ms for dramatic reveals
   - Always use `ease-out` or `cubic-bezier` — never linear for motion
   - Add `will-change: transform` only when needed (not by default)
   - Respect `prefers-reduced-motion` — wrap or disable animations for accessibility
   - Use `transform` and `opacity` for GPU-composited animations; avoid animating `width`, `height`, `top`, `left`

5. **Test mentally** — Confirm the animation reads well on both first load and repeat visits. Note any states that need resetting.

6. **Output** — Edit the relevant file(s) directly. If adding a new utility (e.g. a scroll observer hook), place it in the appropriate utils/hooks folder.

## Common Animation Patterns

### Fade + slide up (entrance)
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fadeUp 0.6s ease-out both;
}
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up { animation: none; }
}
```

### Scroll-triggered with IntersectionObserver
```js
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Hover lift (cards)
```css
.card {
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}
```

### Staggered list entrance
```css
.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 80ms; }
.list-item:nth-child(3) { animation-delay: 160ms; }
/* or use JS to set --delay CSS var per index */
```

## Notes

- Match the veos brand feel — check reference images in the `/code` root before choosing animation style
- If GSAP or Framer Motion isn't already installed, prefer CSS-only or vanilla JS to avoid adding dependencies without asking
- Never animate layout properties (`width`, `height`, `margin`, `padding`) — always use `transform` equivalents
- Ask before adding new npm packages
