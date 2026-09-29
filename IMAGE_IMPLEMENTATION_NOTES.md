# Hospital image implementation

- All 19 supplied optimized hospital photographs are used in the Gallery with meaningful categories: Critical Care, Doctors & Team, Diagnostics, Patient Areas, and Consultation.
- Facilities cards now use real hospital photography for ICU, emergency/inpatient care, operation/treatment area, clinical laboratory, pharmacy, and inpatient care.
- Existing hero/about building photography is retained to preserve the approved website composition.
- `main-day.png` and `main-night.png` were converted to WebP at the same pixel dimensions, reducing them from ~3.3 MB each to ~0.2 MB each.
- Existing client photographs were already WebP and mostly ~37–125 KB each, so no destructive recompression was applied.
- Image `alt` text and lazy loading are applied where appropriate.

Build note: production build execution could not be completed in the packaging environment because npm dependency installation timed out before Vite was installed. Source-level changes are complete; run `npm install` then `npm run build` in the project environment.
