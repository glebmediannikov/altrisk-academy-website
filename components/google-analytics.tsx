'use client';

import Script from 'next/script';
import {usePathname} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';

const configuredMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const measurementId = configuredMeasurementId || 'G-56KG7JRY77';
const isValidMeasurementId = /^G-[A-Z0-9]+$/.test(measurementId);

export const analyticsConsentStorageKey = 'altrisk-analytics-consent';
export const analyticsConsentEvent = 'altrisk-analytics-consent';

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
    dataLayer?: IArguments[];
    gtag?: (...args: [string, ...unknown[]]) => void;
  }
}

export function setGoogleAnalyticsDisabled(disabled: boolean) {
  if (isValidMeasurementId) {
    window[`ga-disable-${measurementId}`] = disabled;
  }
}

export function ConsentAwareGoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (configuredMeasurementId && !isValidMeasurementId) {
      console.error('Invalid NEXT_PUBLIC_GA_MEASUREMENT_ID; analytics remains disabled.');
    }
  }, []);

  useEffect(() => {
    const syncConsent = () => {
      let consentGranted = false;

      try {
        consentGranted = window.localStorage.getItem(analyticsConsentStorageKey) === 'granted';
      } catch (error) {
        console.error('Unable to read analytics consent; analytics remains disabled.', error);
      }

      setGoogleAnalyticsDisabled(!consentGranted);
      setHasConsent(consentGranted);
    };

    syncConsent();
    window.addEventListener('storage', syncConsent);
    window.addEventListener(analyticsConsentEvent, syncConsent);

    return () => {
      window.removeEventListener('storage', syncConsent);
      window.removeEventListener(analyticsConsentEvent, syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!hasConsent) {
      return;
    }

    if (!scriptReady || !pathname || lastTrackedPath.current === pathname) {
      return;
    }

    window.gtag?.('event', 'page_view', {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
    lastTrackedPath.current = pathname;
  }, [hasConsent, pathname, scriptReady]);

  if (process.env.NODE_ENV !== 'production' || !isValidMeasurementId || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        id="altrisk-ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('set', {
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
            });
            window.gtag('config', '${measurementId}', {send_page_view: false});
          `,
        }}
      />
      <Script
        id="altrisk-ga-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
    </>
  );
}
