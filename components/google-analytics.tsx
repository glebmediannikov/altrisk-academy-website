'use client';

import {useEffect, useState} from 'react';
import {GoogleAnalytics} from '@next/third-parties/google';

const measurementId = 'G-56KG7JRY77';
export const analyticsConsentStorageKey = 'altrisk-analytics-consent';
export const analyticsConsentEvent = 'altrisk-analytics-consent';

declare global {
  interface Window {
    'ga-disable-G-56KG7JRY77'?: boolean;
    gtag?: (...args: [string, ...unknown[]]) => void;
  }
}

export function ConsentAwareGoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      let consentGranted = false;

      try {
        consentGranted = window.localStorage.getItem(analyticsConsentStorageKey) === 'granted';
      } catch (error) {
        console.error('Unable to read analytics consent; analytics remains disabled.', error);
      }

      window['ga-disable-G-56KG7JRY77'] = !consentGranted;

      if (consentGranted) {
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function gtag() {
          window.dataLayer?.push(arguments);
        };
        window.gtag('set', {
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
        });
      }

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

  if (process.env.NODE_ENV !== 'production' || !hasConsent) {
    return null;
  }

  return <GoogleAnalytics gaId={measurementId} />;
}
