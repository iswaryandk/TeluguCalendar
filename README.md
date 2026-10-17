# TeluguCalendar — తెలుగు పంచాంగం

A responsive, Telugu-first devotional calendar starter site. It includes reusable data-driven deity cards, a featured deity for the current weekday, short Telugu stotrams, and placeholder Panchangam/festival sections.

## Run locally
Open `index.html` in a browser, or use a local static server.

## Publish with GitHub Pages
1. Upload the files in this folder to the root of your `TeluguCalendar` repository.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose `main` and `/ (root)`, then Save.
5. Wait for the published URL shown in Settings → Pages.

## Reusable design
- `createDeityCard(deity)` renders every weekday card from shared data.
- `renderFeatured(deity)` renders the selected deity and stotram.
- `getTodayDeity(date)` chooses a deity using the weekday.
- `deities` in `app.js` holds all weekday content, so you can edit prayers and images in one place.

## Important before production
- The Panchangam times are explicitly placeholders. Accurate tithi, nakshatra, sunrise/sunset, Rahu Kalam and festival dates need a verified Panchangam data source or astronomy calculation, including the user's city/time zone.
- Replace the sample external images with appropriately licensed images stored in the repository. The image links are illustrative and may not correspond to the exact deity shown.
- Verify every stotram and Telugu spelling with a trusted source or knowledgeable reader before public release.
- This starter uses no framework or build step; it can be hosted as a static GitHub Pages site.
