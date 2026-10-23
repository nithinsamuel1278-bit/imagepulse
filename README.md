# ImagePulse

ImagePulse is a small, responsive image-search interface built with HTML, CSS, and JavaScript. Visitors can search Wikimedia Commons or select a suggested prompt to browse matching images.

## Run locally

Open `index.html` in a modern browser. No packages or external assets are required.

## Image search

Searches use the Wikimedia Commons API and display matching image thumbnails in a responsive results grid. An internet connection is required.

## Design decisions

1. **Warm paper, deep ink, and a sharp lime accent:** The off-white canvas feels like a printed field guide, while ink-colored controls preserve readable contrast. Lime is reserved for small highlights so key details are easy to spot.
2. **Simple, responsive results grid:** CSS Grid adapts image results to the available screen width. Status messages cover loading, empty results, and search failures.
