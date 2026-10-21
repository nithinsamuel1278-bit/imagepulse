# ImagePulse

ImagePulse is a small, responsive image-search interface scaffold built with HTML, CSS, and a little JavaScript. Visitors can enter a search term or select a suggested prompt. The results area is intentionally empty for now: connecting a real image-search source is planned for a future update.

## Run locally

Open `index.html` in a modern browser. No packages or external assets are required.

## Planned image-search function

The search form and suggested prompts are ready to use, but image searching is not connected yet. The next step is to connect a chosen image-search API and show matching images in the responsive results grid.

## Design decisions

1. **Warm paper, deep ink, and a sharp lime accent:** The off-white canvas feels like a printed field guide, while ink-colored controls preserve readable contrast. Lime is reserved for small highlights so key details are easy to spot.
2. **Simple, responsive results grid:** The empty grid uses CSS Grid with auto-filling columns so future image results can adapt to the available screen width. A small status message explains that search results are planned instead of implying the feature is already connected.
