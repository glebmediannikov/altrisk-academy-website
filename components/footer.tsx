import Link from 'next/link';
import Image from 'next/image';
import {Icon} from './icon';
import {PrivacySettingsButton} from './privacy-consent';
import {FINANCIAL_EDUCATION_DISCLAIMER} from '../lib/seo';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image
              className="brand-image footer-brand-image"
              src="/branding/altrisk-academy-logo.png"
              alt="AltRisk Academy logo"
              width={720}
              height={720}
            />
          </Link>
          <p className="footer-description">
            Building a generation that understands risk, makes thoughtful decisions, and prepares
            for uncertainty.
          </p>
          <span className="micro">Free educational resources · No real money required</span>
          <p className="micro">
            Founded by{' '}
            <a href="https://mariamediannikova.com/" target="_blank" rel="noopener noreferrer">
              Maria Mediannikova
            </a>
          </p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/learn">Learning Paths</Link>
          <Link href="/risk-lab">Risk Lab</Link>
          <Link href="/challenges">Challenges</Link>
          <Link href="/dictionary">Risk Dictionary</Link>
        </div>
        <div>
          <b>Academy</b>
          <Link href="/articles">Articles</Link>
          <Link href="/for-educators">For Educators</Link>
          <Link href="/about">Our Mission</Link>
          <Link href="/about#founder">Founder</Link>
        </div>
        <div>
          <b>Get started</b>
          <p>Curious about risk? Start with the basics, then try a real simulation.</p>
          <Link className="footer-link" href="/learn">
            Explore free lessons <Icon name="arrow" size={16} />
          </Link>
          <PrivacySettingsButton />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} AltRisk Academy. Educational use only.</span>
        <span>{FINANCIAL_EDUCATION_DISCLAIMER}</span>
      </div>
    </footer>
  );
}
