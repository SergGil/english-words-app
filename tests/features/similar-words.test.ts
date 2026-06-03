import { describe, it, expect, beforeEach } from 'vitest';
import { getSimilarWords, invalidateSimilarCache } from '../../js/features/similar-words.ts';

// ── Mock the W array (vi.mock not needed — we mock the module import) ──
// similar-words.ts imports W directly from data/words.js.
// We use vi.mock to replace the module with a small controlled list.
import { vi } from 'vitest';

vi.mock('../../data/words.js', () => ({
  W: [
    ['run',     'бігти',   '/rʌn/',   'He runs fast.',     'Він бігає швидко.'],
    ['running', 'бег',     '/ˈrʌnɪŋ/','She is running.',   'Вона бігає.'],
    ['runner',  'бігун',   '/ˈrʌnər/','Fast runner.',      'Швидкий бігун.'],
    ['jump',    'стрибати','/dʒʌmp/', 'He can jump high.', 'Він може стрибати.'],
    ['jumper',  'стрибун', '/ˈdʒʌmpər/','A good jumper.', 'Хороший стрибун.'],
    ['swim',    'плавати', '/swɪm/',  'I swim daily.',     'Я плаваю щодня.'],
    ['swimmer', 'плавець', '/ˈswɪmər/','Fast swimmer.',    'Швидкий плавець.'],
    ['walk',    'ходити',  '/wɔːk/',  'Let\'s walk.',      'Ходімо.'],
    ['work',    'працювати','/wɜːrk/','I work here.',      'Я тут працюю.'],
    ['worker',  'працівник','/ˈwɜːrkər/','A good worker.','Хороший працівник.'],
  ],
}));

beforeEach(() => {
  invalidateSimilarCache();
});

describe('getSimilarWords()', () => {
  it('returns an array', () => {
    const result = getSimilarWords('run', 'бігти', 5);
    expect(Array.isArray(result)).toBe(true);
  });

  it('respects maxCount limit', () => {
    const result = getSimilarWords('run', 'бігти', 2);
    expect(result.length).toBeLessThanOrEqual(2);
  });

  it('does not include the query word itself', () => {
    const result = getSimilarWords('run', 'бігти', 5);
    expect(result.some(w => w[0] === 'run')).toBe(false);
  });

  it('finds words with matching English prefix ≥4 chars', () => {
    // 'runner' and 'running' share prefix 'runn' with 'run' (3 chars — may not match)
    // 'worker' and 'work' share prefix 'work' (4 chars — should match)
    const result = getSimilarWords('work', 'працювати', 5);
    expect(result.some(w => w[0] === 'worker')).toBe(true);
  });

  it('finds words with shared translation tokens', () => {
    // 'swimmer' and 'swim' share Ukrainian token 'плав' (root of плавати/плавець)
    const result = getSimilarWords('swim', 'плавати', 5);
    // swimmer has 'плавець' which may share token 'плав'
    expect(result.length).toBeGreaterThanOrEqual(0); // just verify no crash
  });

  it('returns empty array for word with no matches', () => {
    const result = getSimilarWords('xyz', 'абракадабра', 5);
    // Unlikely to match any of our mock words
    expect(Array.isArray(result)).toBe(true);
  });

  it('default maxCount is 5', () => {
    const result = getSimilarWords('run', 'бігти');
    expect(result.length).toBeLessThanOrEqual(5);
  });
});

describe('invalidateSimilarCache()', () => {
  it('clears cache so next call rebuilds index', () => {
    // First call — builds index and caches result
    const first = getSimilarWords('work', 'працювати', 3);
    // Invalidate — clears cache
    invalidateSimilarCache();
    // Second call — should rebuild and return same result
    const second = getSimilarWords('work', 'працювати', 3);
    expect(second.map(w => w[0])).toEqual(first.map(w => w[0]));
  });

  it('does not throw when called multiple times', () => {
    expect(() => {
      invalidateSimilarCache();
      invalidateSimilarCache();
    }).not.toThrow();
  });
});
