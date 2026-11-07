'use client';

import Link from 'next/link';
import {useState} from 'react';
import {Icon} from './icon';
import {HeadingText} from './heading-text';
import type {DictionaryEntry} from '../lib/data';

export function DictionaryExplorer({entries}: {entries: DictionaryEntry[]}) {
  const [query, setQuery] = useState('');
  const filtered = entries.filter((entry) =>
    (entry.term + ' ' + entry.meaning).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <label className="dictionary-search">
        <Icon name="search" size={20}/>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a risk concept..." aria-label="Search risk dictionary"/>
      </label>
      <div className="dictionary-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'term' : 'terms'} found</div>
      <div className="dictionary-grid">
        {filtered.map((entry) => (
          <div className="dictionary-item" id={entry.id} key={entry.term}>
            <h2><HeadingText text={entry.term}/></h2>
            <p>{entry.meaning}</p>
            <p style={{marginTop: 10}}><strong>Example:</strong> {entry.example}</p>
            <p style={{marginTop: 10}}><strong>Why it matters:</strong> {entry.importance}</p>
            <p style={{marginTop: 10}}>
              <Link href={entry.resource.href} style={{color: 'var(--teal)', textDecoration: 'underline', textUnderlineOffset: '3px'}}>
                {entry.resource.label}
              </Link>
            </p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p className="no-results">No matching terms. Try a different search.</p>}
    </>
  );
}
