'use client';

import Link from 'next/link';
import type {ReactNode} from 'react';
import {
  trackAnalyticsEvent,
  type AnalyticsEventName,
  type AnalyticsEventParameters,
} from '../lib/analytics';

type AnalyticsLinkProps<EventName extends AnalyticsEventName> = {
  href: string;
  eventName: EventName;
  eventParameters: AnalyticsEventParameters[EventName];
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
  children: ReactNode;
};

export function AnalyticsLink<EventName extends AnalyticsEventName>({
  href,
  eventName,
  eventParameters,
  ...linkProps
}: AnalyticsLinkProps<EventName>) {
  const handleClick = () => {
    trackAnalyticsEvent(eventName, eventParameters);
  };

  if (/^https?:\/\//i.test(href)) {
    return <a href={href} {...linkProps} onClick={handleClick} />;
  }

  return <Link href={href} {...linkProps} onClick={handleClick} />;
}
