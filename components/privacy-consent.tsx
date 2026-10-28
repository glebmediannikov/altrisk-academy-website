'use client';

import {useEffect, useRef, useState} from 'react';
import {
  analyticsConsentEvent,
  analyticsConsentStorageKey,
  setGoogleAnalyticsDisabled,
} from './google-analytics';

type ConsentChoice = 'granted' | 'denied' | null;

const openSettingsEvent = 'altrisk-open-privacy-settings';

function clearGoogleAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=', 1)[0])
    .filter((name) => /^_ga(?:_|$)/.test(name));

  const hostname = window.location.hostname;
  const domains = new Set<string | undefined>([undefined, hostname]);
  if (hostname === 'altriskacademy.com' || hostname.endsWith('.altriskacademy.com')) {
    domains.add('altriskacademy.com');
    domains.add('.altriskacademy.com');
  }

  const paths = new Set(['/']);
  const segments = window.location.pathname.split('/').filter(Boolean);
  let path = '';
  for (const segment of segments) {
    path += `/${segment}`;
    paths.add(path);
    paths.add(`${path}/`);
  }

  for (const name of names) {
    for (const cookiePath of paths) {
      for (const domain of domains) {
        const domainAttribute = domain ? `; Domain=${domain}` : '';
        document.cookie = `${name}=; Max-Age=0; Path=${cookiePath}${domainAttribute}; SameSite=Lax`;
      }
    }
  }
}

export function PrivacyConsentBanner() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [saveError, setSaveError] = useState('');
  const declineButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const readChoice = () => {
      try {
        const storedChoice = window.localStorage.getItem(analyticsConsentStorageKey);
        setChoice(storedChoice === 'granted' || storedChoice === 'denied' ? storedChoice : null);
      } catch (error) {
        console.error('Unable to read privacy preferences.', error);
        setChoice(null);
      }
      setIsReady(true);
    };

    const openSettings = () => {
      setSaveError('');
      setIsOpen(true);
    };

    readChoice();
    window.addEventListener('storage', readChoice);
    window.addEventListener(openSettingsEvent, openSettings);

    return () => {
      window.removeEventListener('storage', readChoice);
      window.removeEventListener(openSettingsEvent, openSettings);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      declineButtonRef.current?.focus();
    }
  }, [isOpen]);

  const saveChoice = (nextChoice: Exclude<ConsentChoice, null>) => {
    try {
      window.localStorage.setItem(analyticsConsentStorageKey, nextChoice);
    } catch (error) {
      console.error('Unable to save privacy preferences.', error);
      setSaveError('Your choice could not be saved. Please enable site storage and try again.');
      return;
    }

    setGoogleAnalyticsDisabled(nextChoice !== 'granted');
    if (nextChoice === 'denied') {
      clearGoogleAnalyticsCookies();
    }
    window.dispatchEvent(new Event(analyticsConsentEvent));
    setChoice(nextChoice);
    setSaveError('');
    setIsOpen(false);
  };

  if (!isReady || (!isOpen && choice !== null)) {
    return null;
  }

  return (
    <section
      className="privacy-consent"
      aria-label="Analytics cookie preferences"
      aria-describedby="privacy-consent-description"
    >
      <div className="privacy-consent-copy">
        <h2>Your Privacy Matters</h2>
        <p id="privacy-consent-description">
          We use optional analytics cookies to understand how visitors use AltRisk Academy and
          improve our educational resources. You can accept or decline analytics cookies. Your
          choice will not affect access to our lessons or simulations.
        </p>
        {isOpen && choice && (
          <p className="privacy-consent-current">
            Current choice: {choice === 'granted' ? 'Analytics accepted' : 'Analytics declined'}.
          </p>
        )}
        {saveError && (
          <p className="privacy-consent-error" role="alert">
            {saveError}
          </p>
        )}
      </div>
      <div className="privacy-consent-actions">
        <button ref={declineButtonRef} type="button" onClick={() => saveChoice('denied')}>
          Decline
        </button>
        <button type="button" onClick={() => saveChoice('granted')}>
          Accept Analytics
        </button>
      </div>
    </section>
  );
}

export function PrivacySettingsButton() {
  return (
    <button
      className="privacy-settings-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(openSettingsEvent))}
    >
      Privacy Settings
    </button>
  );
}
