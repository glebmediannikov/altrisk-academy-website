'use client';

import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Icon} from './icon';
import type {Article} from '../lib/hub-articles';

export function ArticleDirectory({articles}: {articles: Article[]}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(articles.map((article) => article.category))];
  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <>
      <nav className="article-filters" aria-label="Filter articles by category">
        {categories.map((category) => {
          const count =
            category === 'All'
              ? articles.length
              : articles.filter((article) => article.category === category).length;

          return (
            <button
              aria-pressed={selectedCategory === category}
              className="article-filter"
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category} <span>{count}</span>
            </button>
          );
        })}
      </nav>
      <p className="article-result-count" aria-live="polite">
        Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
      </p>
      <div className="article-grid">
        {filteredArticles.map((article, index) => (
          <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}>
            {article.coverImage ? (
              <div className="article-art article-card-cover">
                <Image
                  src={article.coverImage.src}
                  alt=""
                  width={1600}
                  height={900}
                  sizes="(max-width: 650px) 100vw, 33vw"
                  unoptimized
                />
              </div>
            ) : (
              <div className={`article-art article-art-${index % 3}`} aria-hidden="true">
                <Icon
                  name={index % 3 === 0 ? 'shield' : index % 3 === 1 ? 'compass' : 'chart'}
                  size={45}
                />
              </div>
            )}
            <div className="article-body">
              <span className="tiny-label">
                {article.category.toUpperCase()} · {article.read.toUpperCase()} READ
              </span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="text-link">
                Read article <Icon name="arrow" size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
