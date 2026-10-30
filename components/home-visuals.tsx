import Image from 'next/image';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {Icon} from './icon';
import {HeadingText} from './heading-text';

type VisualSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  action?: string;
};

export function VisualSectionHeader({
  eyebrow,
  title,
  description,
  href,
  action,
}: VisualSectionHeaderProps) {
  return (
    <div className="visual-section-header">
      <div>
        <span className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</span>
        <h2><HeadingText text={title}/></h2>
        {description && <p>{description}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {action || 'Explore all'} <Icon name="arrow" size={17}/>
        </Link>
      )}
    </div>
  );
}

export function FeatureCard({
  icon,
  tone,
  title,
  children,
}: {
  icon: string;
  tone: 'blue' | 'amber';
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={`home-feature-card home-feature-card-${tone}`}>
      <span className="home-feature-icon"><Icon name={icon} size={20}/></span>
      <div>
        <h3><HeadingText text={title}/></h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

export function EducationalIllustrationCard({
  className = '',
  eyebrow,
  title,
  caption,
  src,
  alt,
  children,
}: {
  className?: string;
  eyebrow: string;
  title: string;
  caption: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
}) {
  return (
    <figure className={`educational-illustration-card ${className}`.trim()}>
      <div className="educational-illustration-heading">
        <span>{eyebrow}</span>
        <h3><HeadingText text={title}/></h3>
      </div>
      {src && alt ? (
        <Image
          className="educational-illustration-image"
          src={src}
          alt={alt}
          width={1200}
          height={675}
          sizes="(max-width: 760px) 100vw, 55vw"
        />
      ) : children}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function RiskReturnDiagram() {
  return (
    <svg
      className="risk-return-diagram"
      viewBox="0 0 640 410"
      role="img"
      aria-labelledby="risk-return-title risk-return-description"
    >
      <title id="risk-return-title">Conceptual view of potential return and uncertainty</title>
      <desc id="risk-return-description">
        An illustrative chart with potential return on the vertical axis and uncertainty on the
        horizontal axis. Three labeled points represent conceptual choices, not measured assets.
      </desc>
      <defs>
        <linearGradient id="risk-return-area" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e9e9ff"/>
          <stop offset="100%" stopColor="#e9f8f5"/>
        </linearGradient>
      </defs>
      <rect x="74" y="34" width="518" height="300" rx="18" fill="#fbfcff"/>
      <path d="M108 75v220h438" fill="none" stroke="#7990a3" strokeWidth="2"/>
      <path d="M108 130h438M108 185h438M108 240h438" stroke="#e5ebf1" strokeWidth="1.5" strokeDasharray="5 7"/>
      <path d="M154 269c77-17 108-57 167-76 75-24 113-23 192-104v206H154Z" fill="url(#risk-return-area)" opacity=".9"/>
      <path d="M154 269c77-17 108-57 167-76 75-24 113-23 192-104" fill="none" stroke="#7769c7" strokeWidth="3" strokeDasharray="7 8" strokeLinecap="round"/>
      <circle cx="185" cy="254" r="13" fill="#2677bd" stroke="#fff" strokeWidth="5"/>
      <circle cx="331" cy="184" r="13" fill="#168d83" stroke="#fff" strokeWidth="5"/>
      <circle cx="486" cy="104" r="13" fill="#e69a36" stroke="#fff" strokeWidth="5"/>
      <rect x="135" y="282" width="105" height="30" rx="15" fill="#e8f1ff"/>
      <text x="187" y="302" textAnchor="middle" fill="#265d9a" fontSize="12" fontWeight="700">Choice A</text>
      <rect x="279" y="207" width="105" height="30" rx="15" fill="#e6f6f3"/>
      <text x="331" y="227" textAnchor="middle" fill="#11766f" fontSize="12" fontWeight="700">Choice B</text>
      <rect x="435" y="53" width="105" height="30" rx="15" fill="#fff1df"/>
      <text x="487" y="73" textAnchor="middle" fill="#98601e" fontSize="12" fontWeight="700">Choice C</text>
      <text x="327" y="366" textAnchor="middle" fill="#40596d" fontSize="13" fontWeight="700">Greater uncertainty / wider range of outcomes</text>
      <text x="31" y="193" transform="rotate(-90 31 193)" textAnchor="middle" fill="#40596d" fontSize="13" fontWeight="700">Potential return</text>
      <text x="107" y="316" textAnchor="middle" fill="#7890a1" fontSize="10">LESS</text>
      <text x="547" y="316" textAnchor="middle" fill="#7890a1" fontSize="10">MORE</text>
      <text x="97" y="79" textAnchor="end" fill="#7890a1" fontSize="10">HIGHER</text>
      <text x="97" y="298" textAnchor="end" fill="#7890a1" fontSize="10">LOWER</text>
    </svg>
  );
}

export function VideoPreview() {
  return (
    <figure className="home-video-preview">
      <div className="home-video-art" role="img" aria-label="Illustrated preview for an upcoming AltRisk Academy introduction video">
        <div className="home-video-art-grid" aria-hidden="true"/>
        <div className="video-preview-panel">
          <span className="video-preview-kicker">ALTRISK ACADEMY · INTRODUCTION</span>
          <h3><span className="heading-sentence">Understand the risk.</span><span className="heading-sentence video-preview-heading-accent">Explore your choices</span></h3>
          <div className="video-preview-flow" aria-hidden="true">
            <span><Icon name="target" size={17}/></span><i/>
            <span><Icon name="compass" size={17}/></span><i/>
            <span><Icon name="shieldcheck" size={17}/></span>
          </div>
        </div>
        <span className="video-preview-badge"><i aria-hidden="true"/> INTRO VIDEO COMING SOON</span>
        <span className="video-preview-decoration video-preview-decoration-one" aria-hidden="true"/>
        <span className="video-preview-decoration video-preview-decoration-two" aria-hidden="true"/>
      </div>
      <figcaption>Illustrated placeholder. A video will be added when an approved version is available.</figcaption>
    </figure>
  );
}
