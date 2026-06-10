import { describe, it, expect, beforeEach } from 'vitest';
import { t, tLang, getLang, wordsLabel } from '../../js/features/i18n.ts';

describe('i18n', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('falls back to Ukrainian by default', () => {
    expect(getLang()).toBe('ua');
  });

  it('translates a known key for the current language', () => {
    expect(t('nav.cards')).toBe('Картки');
  });

  it('returns the key itself for an unknown key', () => {
    expect(t('does.not.exist')).toBe('does.not.exist');
  });

  it('tLang translates a key for an explicit language regardless of current language', () => {
    expect(tLang('nav.cards', 'ua')).toBe('Картки');
    expect(tLang('nav.cards', 'en')).toBe('Cards');
    expect(tLang('nav.cards', 'es')).toBe('Tarjetas');
  });

  it('interpolates {{n}}-style placeholders via params', () => {
    expect(tLang('wd.inDays', 'ua', { n: 3 })).toBe('Через 3 дн.');
    expect(tLang('wd.inDays', 'en', { n: 3 })).toBe('In 3 days');
    expect(tLang('wd.inDays', 'es', { n: 3 })).toBe('En 3 días');
  });

  it('wordsLabel applies Ukrainian one/few/many plural rules (1/2-4/5+)', () => {
    expect(wordsLabel(1)).toBe('слово');
    expect(wordsLabel(2)).toBe('слова');
    expect(wordsLabel(5)).toBe('слів');
    expect(wordsLabel(11)).toBe('слів');
    expect(wordsLabel(21)).toBe('слово');
    expect(wordsLabel(22)).toBe('слова');
    expect(wordsLabel(25)).toBe('слів');
  });
});
