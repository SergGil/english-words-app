import { describe, it, expect } from 'vitest';
import { GRAMMAR } from '../../data/grammar.ts';

// ── Word detail logic helpers ─────────────────────────────────
// We test the pure logic parts (IPA detection, format detection)
// without requiring DOM since openWordDetail uses window.*

type WordEntry = readonly [string, string, string?, string?, string?];

function isFmtB(w: WordEntry): boolean {
  return !!w[2] && (w[2][0] === '/' || w[2][0] === '[');
}

function getIpa(w: WordEntry): string {
  return isFmtB(w) ? (w[2] ?? '') : (w[4] ?? '');
}

function getEnExample(w: WordEntry): string {
  return isFmtB(w) ? (w[3] ?? '') : (w[2] ?? '');
}

function getUaExample(w: WordEntry): string {
  return isFmtB(w) ? (w[4] ?? '') : (w[3] ?? '');
}

describe('Word format detection (isFmtB)', () => {
  it('Format B: starts with / → true', () => {
    const w: WordEntry = ['work', 'працювати', '/wɜːrk/', 'She works hard.', 'Вона наполегливо працює.'];
    expect(isFmtB(w)).toBe(true);
  });

  it('Format B: starts with [ → true', () => {
    const w: WordEntry = ['abate', 'зменшуватися', '[əˈbeɪt]', 'The storm abated.', 'Буря вщухла.'];
    expect(isFmtB(w)).toBe(true);
  });

  it('Format A: no IPA brackets → false', () => {
    const w: WordEntry = ['abate', 'зменшуватися', 'The storm began to abate.', 'Буря почала вщухати.', '[\\u0259\\u02c8be\\u026at]'];
    expect(isFmtB(w)).toBe(false);
  });
});

describe('IPA extraction', () => {
  it('Format B: IPA from index 2', () => {
    const w: WordEntry = ['word', 'слово', '/wɜːrd/', 'Example.', 'Приклад.'];
    expect(getIpa(w)).toBe('/wɜːrd/');
  });

  it('Format A: IPA from index 4', () => {
    const w: WordEntry = ['word', 'слово', 'Example sentence.', 'Приклад.', '[wɜːrd]'];
    expect(getIpa(w)).toBe('[wɜːrd]');
  });

  it('returns empty string when no IPA', () => {
    const w: WordEntry = ['word', 'слово'];
    expect(getIpa(w)).toBe('');
  });
});

describe('Example extraction', () => {
  it('Format B: EN example from index 3', () => {
    const w: WordEntry = ['run', 'бігти', '/rʌn/', 'She <b>runs</b> fast.', 'Вона бігає швидко.'];
    expect(getEnExample(w)).toBe('She <b>runs</b> fast.');
    expect(getUaExample(w)).toBe('Вона бігає швидко.');
  });

  it('Format A: EN example from index 2', () => {
    const w: WordEntry = ['run', 'бігти', 'She runs fast.', 'Вона бігає швидко.', '[rʌn]'];
    expect(getEnExample(w)).toBe('She runs fast.');
    expect(getUaExample(w)).toBe('Вона бігає швидко.');
  });

  it('handles missing examples gracefully', () => {
    const w: WordEntry = ['run', 'бігти'];
    expect(getEnExample(w)).toBe('');
    expect(getUaExample(w)).toBe('');
  });
});

// ── Grammar rendering logic (section types) ───────────────────
describe('Grammar section type coverage', () => {
  const allSectionTypes = new Set(
    GRAMMAR.flatMap(c => c.rules.flatMap(r => r.sections.map(s => s.type)))
  );

  it('has intro sections', () => expect(allSectionTypes.has('intro')).toBe(true));
  it('has formula sections', () => expect(allSectionTypes.has('formula')).toBe(true));
  it('has table sections', () => expect(allSectionTypes.has('table')).toBe(true));
  it('has examples sections', () => expect(allSectionTypes.has('examples')).toBe(true));
  it('has markers sections', () => expect(allSectionTypes.has('markers')).toBe(true));
  it('has note sections', () => expect(allSectionTypes.has('note')).toBe(true));
  it('has tip sections', () => expect(allSectionTypes.has('tip')).toBe(true));
});

describe('Grammar content — new rules completeness', () => {
  it('has reported-questions rule', () => {
    const all = GRAMMAR.flatMap(c => c.rules);
    expect(all.some(r => r.id === 'reported-questions')).toBe(true);
  });

  it('has wish-would-rather rule', () => {
    const all = GRAMMAR.flatMap(c => c.rules);
    expect(all.some(r => r.id === 'wish-would-rather')).toBe(true);
  });

  it('has numbers-determiners rule', () => {
    const all = GRAMMAR.flatMap(c => c.rules);
    expect(all.some(r => r.id === 'numbers-determiners')).toBe(true);
  });

  it('grammar category has more rules than initial 4', () => {
    const grammar = GRAMMAR.find(c => c.id === 'grammar')!;
    expect(grammar.rules.length).toBeGreaterThan(10);
  });
});
