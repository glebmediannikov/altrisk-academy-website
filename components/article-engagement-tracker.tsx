'use client';

import {useEffect, useRef} from 'react';
import {getAnalyticsTopic, trackAnalyticsEvent} from '../lib/analytics';

export function ArticleEngagementTracker({
  contentId,
  category,
}: {
  contentId: string;
  category: string;
}) {
  const trackedArticleId = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (trackedArticleId.current === contentId || window.scrollY <= 0) {
        return;
      }

      const articleContent = document.querySelector<HTMLElement>('.article-prose');
      if (!articleContent) {
        return;
      }

      const articleTop = window.scrollY + articleContent.getBoundingClientRect().top;
      const halfwayPoint = articleTop + articleContent.offsetHeight / 2;
      if (window.scrollY + window.innerHeight < halfwayPoint) {
        return;
      }

      const tracked = trackAnalyticsEvent('article_engaged', {
        content_id: contentId,
        content_type: 'article',
        topic: getAnalyticsTopic(category),
        engagement_threshold: '50_percent',
      });
      if (tracked) {
        trackedArticleId.current = contentId;
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [category, contentId]);

  return null;
}
