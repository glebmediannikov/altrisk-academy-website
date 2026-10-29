# AltRisk Academy Visual Redesign Audit

## Existing assets found

- `public/articles/` contains 39 SVG files, including the Articles directory cover and topic-specific covers and explanatory diagrams for the published article library. The homepage reuses existing SVG covers for article thumbnails rather than creating duplicate assets.
- `public/branding/altrisk-academy-logo.png` contains the existing site logo.
- `public/competitions/` contains four competition image assets and a source note; these are used on the existing About route.
- The previous homepage used an in-page SVG chart/dashboard, CSS illustrations for Risk Lab, and CSS cards and icons. It did not use an approved video file or a video provider.
- No video URL, local video, YouTube, Vimeo, or iframe embed was found in the application source. No external video embed was added.

## Homepage changes implemented

- Replaced the previous dark dashboard hero with a bright, editorial hero and an original accessible SVG showing the sequence from goal to possible outcomes to an informed next step. It is explicitly presented as a framework, not a forecast.
- Added a labeled conceptual risk/return diagram. Its caption clarifies that the positions are illustrative, not measured market data or investment guidance.
- Added six colorful learning pathway cards sourced from the existing learning-path data and URLs.
- Redesigned the featured Risk Lab section with educational illustrations for virtual allocation and scenario comparison, with existing simulator destinations and educational disclaimers preserved.
- Added three featured article cards using existing topic-specific SVG covers and article metadata, plus the existing Risk Dictionary term feature.
- Added a responsive introductory video placeholder that has no play button, video URL, iframe, or third-party tracking embed. It states that an approved video is still needed.
- Preserved homepage navigation to challenges, educator resources, About, articles, lessons, the Risk Lab, and the existing learning CTA.
- Added a more visual challenge prompt, five-step learning process, educator callout, and founder/story panel while retaining their existing educational purpose and links.
- Added responsive layouts, visible keyboard focus, modest hover transitions, and `prefers-reduced-motion` handling. Visual components are server-rendered and add no client-side JavaScript.
- The article cards use Next.js `Image` with dimensions, responsive `sizes`, and descriptive alt text. Existing article data, slugs, metadata, structured data, sitemap, consent UI, and GA components were not changed.

## New components and illustrations

- `components/home-visuals.tsx`
  - `VisualSectionHeader`
  - `FeatureCard`
  - `EducationalIllustrationCard`
  - `RiskReturnDiagram` (accessible SVG)
  - `VideoPreview` (non-interactive placeholder)
- `app/page.tsx`
  - Original inline decision-process illustration.
  - Visual learning-path, Risk Lab, featured-article, video-placeholder, challenge, and founder sections.
- `app/globals.css`
  - Homepage-specific color, layout, responsive, focus, hover, and reduced-motion styles.

The risk/return diagram is conceptual. It does not encode a return series, market observations, measured probabilities, or asset recommendations. The Risk Lab visuals are labeled as virtual or hypothetical learning scenarios.

## Recommendations for remaining pages

- **Articles:** Continue using the topic-specific SVG covers and diagrams already available. Give article cards consistent visual hierarchy and preserve descriptive image text, figure captions, and the existing source/disclaimer content.
- **Learn:** Add distinct, topic-specific pathway illustrations and a clear visual learning sequence as lesson content is developed. Keep “expanding soon” status visible where content is not yet available.
- **Risk Lab:** Align each simulator card with its actual external tool and state clearly when activity opens a separate application. Add interface previews only when they reflect the real, current tool.
- **Green Investing:** Add an original visual explaining diversification and hypothetical scenario comparisons; label axes and assumptions and ensure all numerical chart examples match the page's disclosed calculations.
- **Responsible Consumption:** Consider an accessible, assumption-labeled illustration comparing hypothetical cost components over time. Do not imply guaranteed solar savings or household-specific estimates.
- **Challenges:** Use illustrated scenario prompts. Add interactive choices or completion states only if a genuine, accessible challenge workflow is implemented; do not imply that informational prompts are tracked as completions.
- **About:** Retain existing competition assets and status wording. Confirm logos are approved for use and keep founder information consistent with the site's documented authorship.

## Video assets still needed

An approved AltRisk Academy introduction video and its thumbnail are still needed. Before enabling playback, provide the approved video URL or local asset, captions, a transcript or equivalent accessible text, and any required licensing/attribution. The current placeholder intentionally has no play affordance and loads no third-party player or tracking code.

## Validation and open issues

- `npm.cmd run lint` (TypeScript check): passed.
- `npm.cmd run build`: passed; all 40 generated routes completed.
- `git diff --check`: passed.
- Production-rendered homepage checks at 1440, 900, 760, and 390 CSS-pixel viewport widths found one primary H1 at each width and no horizontal document overflow.
- Confirmed the featured article covers resolve to the existing SVG assets and include alt text.
- No external video embeds are present on the redesigned homepage.
- Visual publication review is still recommended for editorial approval of the conceptual illustrations and final color/typography choices. Video content remains pending.

## Files changed for this redesign

- `app/page.tsx`
- `app/globals.css`
- `components/home-visuals.tsx` (new)

No article routes or slugs, analytics tracking, cookie consent behavior, structured data, or sitemap entries were changed. No commit or push was made.
