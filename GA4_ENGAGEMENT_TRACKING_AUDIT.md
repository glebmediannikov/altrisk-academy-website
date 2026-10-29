# GA4 Educational Engagement Tracking Audit

## Event inventory

| Event | UI trigger | Parameters |
|---|---|---|
| `risk_simulation_start` | A visitor clicks one of the six existing simulator launch links on `/risk-lab`. The event records a launch attempt; the destinations are separate applications, so it does not prove that a simulation loaded or was used. | `content_id` (curated simulator ID), `content_type: simulation`, `topic` (controlled topic), `difficulty` (controlled level) |
| `lesson_start` | A visitor selects a lesson from the lesson list on `/learn` or from the lesson list on `/learn/[slug]`. These links open the corresponding article lesson. | `content_id` (lesson/article slug), `content_type: lesson`, `topic` (controlled topic) |
| `article_engaged` | After a visitor scrolls, the bottom of the viewport reaches the midpoint of the article content on `/articles/[slug]`. No event is sent on page load. | `content_id` (article slug), `content_type: article`, `topic` (controlled topic), `engagement_threshold: 50_percent` |
| `article_related_click` | A visitor selects an article link in the “Related learning resources” section on `/articles/[slug]`. | `content_id` (destination article slug), `content_type: article`, `topic` (controlled topic) |

`topic` values are mapped from the site's known article categories in `lib/analytics.ts`. Simulator IDs, topics, difficulties, and event names are defined in code; no arbitrary user-provided parameter values are sent.

## Routes and components

- `/risk-lab` — simulator launch links in `app/risk-lab/page.tsx`.
- `/learn` and `/learn/[slug]` — lesson links in `app/learn/page.tsx` and `app/learn/[slug]/page.tsx`.
- `/articles/[slug]` — scroll-depth tracking and related-article links in `app/articles/[slug]/page.tsx`, using `components/article-engagement-tracker.tsx` and `components/analytics-link.tsx`.
- The existing global GA4 component and consent banner remain responsible for initialization and consent; the event helper does not initialize another tag.

## Consent and privacy behavior

- `trackAnalyticsEvent` checks the existing `altrisk-analytics-consent` preference and the GA disable flag before sending.
- Only an explicit `granted` choice allows events. Denied, unset, or unreadable preferences fail closed. A storage-access error is logged and the event is not sent.
- If `gtag` is unavailable or the Measurement ID is invalid, the helper returns without sending.
- No names, email addresses, personal identifiers, free-text responses, user-entered financial data, or other user inputs are included.
- Events are not queued while consent is denied. A later scroll after granting consent may qualify for article engagement.

## Duplicate-event safeguards

- Link events are emitted from the activated link's click handler, not from component rendering.
- Article engagement is emitted only after the midpoint threshold is reached and only once per article ID for the mounted tracker. The tracker cleans up its scroll listener.
- Completion events are not synthesized from renders or navigation.
- Existing page-view behavior is unchanged; this utility does not configure GA4 or emit `page_view`.

## Functionality deliberately not instrumented

- `risk_simulation_complete`: simulations run in separate applications and the current site cannot confirm completion.
- `risk_scenario_selected`: no in-site scenario-selection control exists in the audited Risk Lab page.
- `lesson_complete`: a lesson link click or article view does not establish that a lesson was completed.
- `challenge_start` and `challenge_complete`: `/challenges` currently presents discussion prompts and links to a general external application. It has no challenge-specific start, response, score, or completion flow.

These events should be added only when the corresponding product interaction can be observed reliably, preferably in the application that owns that interaction.

## Validation and manual verification

- `npm.cmd run lint` (TypeScript check): passed.
- `npm.cmd run build`: passed.
- `git diff --check`: passed.
- Local browser check with a stubbed `gtag` verified that a lesson click emitted one `lesson_start` event after consent and emitted no event when consent was denied.
- Local browser check verified that scrolling past the article midpoint emitted one `article_engaged` event and selecting a related article emitted one `article_related_click` event. The browser test used a stub; it did not send events to the production GA4 property.

For release verification, use Google Tag Assistant and GA4 DebugView in a controlled test session:

1. Clear the site's consent choice, load the site, and verify no GA4 tag/event is sent before opt-in.
2. Decline analytics and activate a lesson or simulator link; verify no engagement event appears.
3. Accept analytics and activate one of the listed controls; confirm one event with the documented controlled parameter values.
4. Scroll an article until its midpoint is reached; confirm one `article_engaged` event, then continue scrolling and verify no duplicate for that article view.
5. Select a related article and verify one `article_related_click` event with the destination slug.
6. Revoke consent in Privacy Settings and confirm subsequent actions produce no analytics events.
7. Confirm no completion or challenge events appear until those interactions exist.

## Files changed for engagement tracking

- `lib/analytics.ts`
- `components/analytics-link.tsx`
- `components/article-engagement-tracker.tsx`
- `components/google-analytics.tsx`
- `components/privacy-consent.tsx`
- `app/risk-lab/page.tsx`
- `app/learn/page.tsx`
- `app/learn/[slug]/page.tsx`
- `app/articles/[slug]/page.tsx`
