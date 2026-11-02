'use client';

import {Children, useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode} from 'react';

export function ModuleCarousel({children, label}: {children: ReactNode; label: string}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const behavior = useCallback((): ScrollBehavior => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  ), []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const start = track.scrollLeft <= 2;
    const end = track.scrollLeft >= max - 2;
    setAtStart(start);
    setAtEnd(end);
    const items = Array.from(track.children) as HTMLElement[];
    let nearest = 0;
    let best = Infinity;
    items.forEach((item, i) => {
      const distance = Math.abs(item.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (distance < best) { best = distance; nearest = i; }
    });
    setActive(end ? items.length - 1 : start ? 0 : nearest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const item = track?.children[index] as HTMLElement | undefined;
    if (!track || !item) return;
    track.scrollTo({left: item.offsetLeft - track.offsetLeft, behavior: behavior()});
  };

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const second = track?.children[1] as HTMLElement | undefined;
    if (!track || !first || !second) return;
    const width = second.offsetLeft - first.offsetLeft;
    track.scrollTo({left: Math.round(track.scrollLeft / width + direction) * width, behavior: behavior()});
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    if (event.key === 'Home') { event.preventDefault(); scrollToIndex(0); }
    if (event.key === 'End') { event.preventDefault(); scrollToIndex(slides.length - 1); }
  };

  return (
    <div className="module-carousel">
      <div className="module-carousel-controls">
        <button type="button" className="module-carousel-arrow" onClick={() => step(-1)} disabled={atStart} aria-label="Previous learning modules">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button type="button" className="module-carousel-arrow" onClick={() => step(1)} disabled={atEnd} aria-label="Next learning modules">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <div
        ref={trackRef}
        className="module-carousel-track"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {slides.map((slide, i) => (
          <div className="module-carousel-slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`} key={i}>
            {slide}
          </div>
        ))}
      </div>
      <div className="module-carousel-dots">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            className={i === active ? 'module-carousel-dot is-active' : 'module-carousel-dot'}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to module ${i + 1} of ${slides.length}`}
            aria-current={i === active ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
