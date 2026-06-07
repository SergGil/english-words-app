import { describe, it, expect } from 'vitest';
import { CATEGORY_LIST, WORD_CATEGORIES } from '../../data/categories.js';

// WORD_CATEGORIES: Record<categoryName, string[]>
//   e.g. { '🐾 Тварини': ['cat', 'dog', ...], ... }

describe('CATEGORY_LIST', () => {
  it('is a non-empty array of strings', () => {
    expect(Array.isArray(CATEGORY_LIST)).toBe(true);
    expect(CATEGORY_LIST.length).toBeGreaterThan(0);
  });

  it('every entry is a non-empty string', () => {
    for (const cat of CATEGORY_LIST) {
      expect(typeof cat).toBe('string');
      expect(cat.length).toBeGreaterThan(0);
    }
  });

  it('all entries are unique', () => {
    expect(new Set(CATEGORY_LIST).size).toBe(CATEGORY_LIST.length);
  });

  it('contains expected categories', () => {
    const required = ['🐾 Тварини', '🍕 Їжа & Страви', '💻 Технології', '✈️ Подорожі'];
    for (const r of required) {
      expect(CATEGORY_LIST, `missing: ${r}`).toContain(r);
    }
  });

  it('has at least 20 categories', () => {
    expect(CATEGORY_LIST.length).toBeGreaterThanOrEqual(20);
  });
});

describe('WORD_CATEGORIES', () => {
  it('is an object with category names as keys', () => {
    expect(typeof WORD_CATEGORIES).toBe('object');
    expect(WORD_CATEGORIES).not.toBeNull();
  });

  it('every key is a known category from CATEGORY_LIST', () => {
    const wcKeys = Object.keys(WORD_CATEGORIES);
    for (const key of wcKeys) expect(CATEGORY_LIST).toContain(key);
  });

  it('every category except the 📦 Інше fallback has assigned words', () => {
    // 📦 Інше is a fallback for getCategoriesForWord — every real word now
    // has an explicit category, so it intentionally has no RAW entries.
    for (const cat of CATEGORY_LIST) {
      if (cat === '📦 Інше') continue;
      expect(WORD_CATEGORIES[cat]?.length ?? 0).toBeGreaterThan(0);
    }
  });

  it('every category has a non-empty words array', () => {
    for (const [cat, words] of Object.entries(WORD_CATEGORIES)) {
      expect(Array.isArray(words), `${cat}: words must be array`).toBe(true);
      expect(words.length, `${cat}: must have at least one word`).toBeGreaterThan(0);
    }
  });

  it('every word in a category is a non-empty string', () => {
    // Most words are lowercase; exceptions like "DNA" are uppercase acronyms
    const UPPERCASE_EXCEPTIONS = new Set(['DNA']);
    for (const [cat, words] of Object.entries(WORD_CATEGORIES)) {
      for (const w of words) {
        expect(typeof w, `${cat}: word "${w}" must be string`).toBe('string');
        expect(w.length, `${cat}: word must not be empty`).toBeGreaterThan(0);
        if (!UPPERCASE_EXCEPTIONS.has(w)) {
          expect(w, `${cat}: word "${w}" should be lowercase`).toBe(w.toLowerCase());
        }
      }
    }
  });

  it('🐾 Тварини contains common animals', () => {
    const animals = WORD_CATEGORIES['🐾 Тварини'] ?? [];
    expect(animals).toContain('cat');
    expect(animals).toContain('dog');
    expect(animals).toContain('lion');
  });

  it('💻 Технології contains tech words', () => {
    const tech = WORD_CATEGORIES['💻 Технології'] ?? [];
    expect(tech.length).toBeGreaterThan(10);
    expect(tech).toContain('computer');
  });

  it('✈️ Подорожі contains travel words', () => {
    const travel = WORD_CATEGORIES['✈️ Подорожі'] ?? [];
    expect(travel).toContain('hotel');
    expect(travel).toContain('passport');
  });

  it('no duplicate words within a single category', () => {
    for (const [cat, words] of Object.entries(WORD_CATEGORIES)) {
      const unique = new Set(words);
      expect(unique.size, `${cat}: has duplicate words`).toBe(words.length);
    }
  });

  it('total word-category assignments is substantial', () => {
    const total = Object.values(WORD_CATEGORIES).reduce((s, w) => s + w.length, 0);
    expect(total).toBeGreaterThan(200);
  });
});
