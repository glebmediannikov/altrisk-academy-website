# AltRisk Academy GA4 Implementation Audit

## Executive summary

The GA4 component is mounted once in the root App Router layout, so it covers the website's static pages and generated article and learning-path routes. Analytics is opt-in: the Google tag is not rendered before consent. Page views are sent manually once per pathname after the Google tag is ready, with the built-in initial page view disabled.

The existing production Measurement ID is retained as a fallback and may be overridden at build time with `NEXT_PUBLIC_GA_MEASUREMENT_ID`. The repository does not expose Vercel's environment settings, so the Production environment variable itself must be verified by an authorized deploy administrator. The GA4 web stream's Enhanced Measurement history-based page-change setting must be disabled to avoid it independently generating page views in addition to the manual events.

## Measurement ID configuration

- Environment variable: `NEXT_PUBLIC_GA_MEASUREMENT_ID` (public build-time configuration; it is not a credential).
- The former production Measurement ID remains in source as the fallback when the variable is blank or unset; the value is intentionally not repeated in this report.
- A syntactically invalid configured ID causes the analytics component to render nothing and logs a console error without echoing the configured value.
- `.env.example` documents the variable without including a deployed value. Do not commit `.env.local` or deployment-specific environment files.
- `NEXT_PUBLIC_*` values are embedded at build time. Configure the Production environment variable in the deployment platform and trigger a fresh production build/deployment. Runtime-only environment changes do not replace a value already compiled into a Next.js client bundle.
- Production environment configuration could not be inspected from this repository. Confirm the configured value in Vercel (or the active deployment platform) against the existing GA4 Web data stream before release.

## Global installation and duplicate-tag audit

- `ConsentAwareGoogleAnalytics` is included once in `app/layout.tsx`, outside route-specific content.
- The single component uses one inline `gtag` initialization and one Google tag script URL for one Measurement ID.
- A repository-wide search found no other `gtag`, Google Analytics, Google Tag Manager, or Measurement ID implementations in the application source. No GTM container is installed.
- The dependency `@next/third-parties` remains in the package manifest but the component no longer uses its `GoogleAnalytics` helper. It does not initialize analytics by itself.
- The previous privacy protections are preserved: Google Signals and advertising personalization remain disabled, and no user ID is configured.
- `gtag('config', ..., {send_page_view: false})` disables the config-generated initial page view. The component emits one explicit `page_view` per pathname after the tag script is ready.
- GA4 Enhanced Measurement can separately observe browser-history changes. Turn off **Page changes based on browser history events** in the web stream's Enhanced Measurement settings; this cannot be confirmed or controlled from this code repository.

## Route coverage checklist

The root layout is shared by all routes. `usePathname()` observes Next.js App Router transitions, including `Link` navigation, so page tracking is not limited to initial document requests.

| Route group | Coverage |
|---|---|
| `/` | Checked |
| `/about` | Checked |
| `/articles` | Checked |
| `/articles/what-is-risk`; `/articles/risk-vs-uncertainty`; `/articles/what-is-financial-risk`; `/articles/portfolio-diversification`; `/articles/market-volatility`; `/articles/risk-and-return` | Checked via the shared dynamic article route |
| `/articles/what-does-a-risk-manager-do`; `/articles/how-ai-is-transforming-risk-management`; `/articles/stress-testing-explained`; `/articles/risk-dashboards-real-time-exposure`; `/articles/sec-rule-15c3-5-pre-trade-risk-controls`; `/articles/model-risk-management-2026` | Checked via the shared dynamic article route |
| `/articles/python-for-risk-managers-practical-applications`; `/articles/monte-carlo-simulation-financial-risk-management`; `/articles/algorithmic-trading-risk-controls-explained`; `/articles/understanding-liquidity-risk`; `/articles/machine-learning-financial-risk-anomalies`; `/articles/var-vs-expected-shortfall` | Checked via the shared dynamic article route |
| `/learn` | Checked |
| `/learn/financial-risk`; `/learn/business-risk`; `/learn/career-risk`; `/learn/cyber-risk`; `/learn/everyday-risk`; `/learn/global-risk` | Checked via the shared dynamic learning-path route |
| `/risk-lab` | Checked |
| `/dictionary` | Checked |
| `/challenges` | Checked |
| `/for-educators` | Checked |
| `/green-investing` | Checked |
| `/responsible-consumption` | Checked |

This includes 34 page routes: 12 static pages, 18 article pages, and 6 learning-path pages. The separate Streamlit applications linked from Risk Lab are outside this Next.js property's route coverage.

## Page-view behavior

- The initial automatic `page_view` from the GA config command is disabled with `send_page_view: false`.
- After the external Google tag is ready and consent is granted, a manual `page_view` is emitted for the current route.
- App Router `pathname` changes generate subsequent page views. A ref suppresses repeat events for the same pathname, including query-only changes.
- `page_path` is the current pathname without query parameters; `page_location` is the current browser URL; `page_title` is `document.title` at tracking time.
- No `page_view` is queued before the external tag is ready. The last-tracked pathname is retained across consent changes to avoid sending a duplicate for the same page if a visitor revokes and immediately re-grants consent; if the route changes while consent is denied, granting consent on the new route records that route once.
- Verify that GA4's Enhanced Measurement history-based page changes are disabled, or its independent history tracking can duplicate the manual route events even though `send_page_view` is false.

## Consent and privacy behavior

- The site uses explicit opt-in rather than Consent Mode. Before consent, the analytics component renders no Google scripts, creates no GA data layer, and does not send analytics events. With no tag present, analytics storage is effectively unavailable/denied; there is no Google consent command queued.
- The default and storage-error states are denied. Stored consent is read from `localStorage` after hydration.
- Accepting consent stores the choice, enables the tag, loads GA scripts in production only, and begins tracking after the tag is ready.
- Declining consent before acceptance stores the denied choice and leaves analytics scripts unloaded. Revoking after acceptance stores the denied choice, sets Google's `ga-disable-<Measurement ID>` flag, and attempts to clear accessible GA cookies. A script already downloaded after an earlier acceptance remains in the browser document; the disable flag prevents future GA collection and the page-view effect stops sending events.
- Reopening Privacy Settings and changing the choice dispatches the same consent event and synchronizes the global analytics component.
- A storage failure when saving the choice is surfaced in the banner and does not grant consent. A failure when reading consent is logged and remains denied.
- Revocation stops future page tracking but cannot retract data already sent to Google. Browser access restrictions can also limit cookie deletion.
- Google Signals and advertising personalization remain disabled; no user ID is configured.

## Issues discovered and fixes made

1. **Hard-coded Measurement ID:** changed to `NEXT_PUBLIC_GA_MEASUREMENT_ID` with the established production ID retained as fallback, avoiding accidental breakage if deployment configuration is not yet populated. Invalid configured values are rejected and diagnosed without logging the value.
2. **No explicit App Router page-view handler:** added pathname observation and a single manual page-view event after tag readiness.
3. **Potential duplicate initial page view:** disabled the config-generated page view. The GA4 Enhanced Measurement history setting remains a deployment-level duplicate risk and is called out above.
4. **Re-consent duplicate risk:** retained the last tracked pathname when consent is withdrawn, so toggling consent on the same route does not emit a duplicate page view.
5. **Consent ID drift risk:** the disable flag is now derived from the same configured Measurement ID used to initialize the tag.
6. **Environment setup undocumented:** added `.env.example` and updated README configuration and GA4 history-setting instructions.

## Recommended deployment actions

1. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the deployment platform's Production environment to the existing GA4 Web stream ID, then create a fresh production build/deployment.
2. In GA4 Admin → Data Streams → Web → Enhanced Measurement settings, disable browser-history page changes because page views are emitted manually.
3. Confirm no other deployment-level GTM container or injected Google tag is configured outside this repository.
4. Keep opt-in consent behavior and do not add a second GA integration at the layout, page, or hosting-platform level.

## Production and consent verification

Run the production build and test in a clean browser profile with network inspection:

1. With no saved consent, visit the site. Confirm no request to `googletagmanager.com/gtag/js`, no GA collection request, and no `_ga` cookies.
2. Accept analytics. Confirm one Google tag initialization/config and one `page_view` with the expected pathname, full location, and current page title.
3. Navigate with `Link` across static pages, an article, and a learning path. Confirm exactly one `page_view` per pathname, with updated `page_path`, `page_location`, and `page_title`.
4. Change only a query parameter and confirm it does not create another page view.
5. Decline/revoke via Privacy Settings. Confirm the disable flag is true, accessible GA cookies are cleared, and subsequent navigation emits no page views.
6. Repeat in GA4 DebugView using the production data stream after the authorized property setting and deployment configuration have been confirmed.

The production build passed and the sitemap's 34 page routes all returned HTTP 200 in a local production-server check. The initial production HTML contains no GA script before consent. A local production-browser check with the Google tag network response stubbed confirmed: no script or `gtag` before consent; one config with automatic initial page view disabled and one manual initial page view after consent; Google Signals and ad personalization set to false; correctly titled/locationed page views on Next.js `Link` navigation across the homepage, articles directory, an article, the learning index, and a learning path; no additional page view on a query-only history change; no duplicate for revoke/re-consent on the same route; and no event after revocation while navigating to another route. Re-consenting on a different route then emitted one page view for that route. A clean-profile decline check confirmed no Google tag script request before or after rejection. A script previously downloaded following consent remains present after revocation, as expected for an already executed third-party script; the disable flag and event gate stop collection.

No development-mode tracking/debug hook was added: analytics is intentionally production-only. A stubbed production build was used to verify behavior without sending test traffic to Google.

This source audit and local browser test cannot verify live Vercel environment configuration, GA4 Admin settings, actual network collection by Google's production tag, or event arrival in DebugView. Those remain manual deployment/property checks.
