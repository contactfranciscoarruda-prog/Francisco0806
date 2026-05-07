# veos Website

## Available Skills

- `/website-animations` — Add animations, transitions, scroll effects, hover states, or any motion to the site. Trigger: "animate X", "add a transition to Y", "make the hero slide in", etc.
- `/skill-builder` — Create or audit Claude Code skills for this project.

## Project Notes

- Reference images are in the root `/code` folder (`.jpeg` files) — check them for brand/style before implementing UI.

## GitHub / Deployment Rules

- **Hero videos (`.mp4`) must always be committed and pushed to GitHub** — Vercel serves them directly and will 404 without them.
- Screen recordings (`Bildschirmaufnahme*.mov`) are excluded from git (too large, not needed for deployment).
- Before every push, confirm that any video referenced in a `<source src="...">` tag is tracked by git (`git status` should not show it as untracked).
- The Vercel deployment is connected to the `main` branch of `https://github.com/contactfranciscoarruda-prog/Francisco0806`.
