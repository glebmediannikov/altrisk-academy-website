export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || 'G-56KG7JRY77';
export const isValidGaMeasurementId = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID);

export const analyticsConsentStorageKey = 'altrisk-analytics-consent';
export const analyticsConsentEvent = 'altrisk-analytics-consent';

export type AnalyticsTopic =
  | 'foundations'
  | 'financial_risk'
  | 'investing'
  | 'risk_careers'
  | 'ai_technology'
  | 'stress_testing'
  | 'risk_reporting'
  | 'market_access'
  | 'model_risk'
  | 'risk_analytics'
  | 'liquidity_risk'
  | 'sustainable_finance'
  | 'sustainable_living'
  | 'everyday_risk'
  | 'business_risk'
  | 'career_risk'
  | 'digital_risk'
  | 'global_risk';

export type AnalyticsDifficulty = 'beginner' | 'intermediate' | 'beginner_intermediate';

export type AnalyticsEventParameters = {
  risk_simulation_start: {
    content_id: string;
    content_type: 'simulation';
    topic: AnalyticsTopic;
    difficulty: AnalyticsDifficulty;
  };
  lesson_start: {
    content_id: string;
    content_type: 'lesson';
    topic: AnalyticsTopic;
  };
  article_engaged: {
    content_id: string;
    content_type: 'article';
    topic: AnalyticsTopic;
    engagement_threshold: '50_percent';
  };
  article_related_click: {
    content_id: string;
    content_type: 'article';
    topic: AnalyticsTopic;
  };
};

export type AnalyticsEventName = keyof AnalyticsEventParameters;

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean | undefined;
    dataLayer?: IArguments[];
    gtag?: (...args: [string, ...unknown[]]) => void;
  }
}

export function trackAnalyticsEvent<EventName extends AnalyticsEventName>(
  eventName: EventName,
  parameters: AnalyticsEventParameters[EventName],
): boolean {
  if (typeof window === 'undefined' || !isValidGaMeasurementId) {
    return false;
  }

  try {
    if (window.localStorage.getItem(analyticsConsentStorageKey) !== 'granted') {
      return false;
    }
  } catch (error) {
    console.error('Unable to verify analytics consent; event was not sent.', error);
    return false;
  }

  if (window[`ga-disable-${GA_MEASUREMENT_ID}`] || typeof window.gtag !== 'function') {
    return false;
  }

  window.gtag('event', eventName, parameters);
  return true;
}

const articleTopicByCategory: Record<string, AnalyticsTopic> = {
  Foundations: 'foundations',
  'Financial Risk': 'financial_risk',
  Investing: 'investing',
  'Business Risk': 'business_risk',
  'Career Risk': 'career_risk',
  'Digital Risk': 'digital_risk',
  'Everyday Risk': 'everyday_risk',
  'Global Risk': 'global_risk',
  'Risk Careers': 'risk_careers',
  'AI & Technology': 'ai_technology',
  'Stress Testing': 'stress_testing',
  'Risk Reporting': 'risk_reporting',
  'Market Access': 'market_access',
  'Model Risk': 'model_risk',
  'Risk Analytics': 'risk_analytics',
};

export function getAnalyticsTopic(category: string): AnalyticsTopic {
  const topic = articleTopicByCategory[category];
  if (!topic) {
    throw new Error(`Unknown analytics topic category "${category}".`);
  }
  return topic;
}
