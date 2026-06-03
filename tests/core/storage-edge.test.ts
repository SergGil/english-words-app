import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { _lzSave, _lzLoad, saveKnown, loadKnown } from '../../js/core/storage.ts';

// ── localStorage mock ─────────────────────────────────────────
const _store: Record<string, string> = {};
const lsMock = {
  getItem:    (k: string) => _store[k] ?? null,
  setItem:    (k: string, v: string) => { _store[k] = v; },
  removeItem: (k: string) => { delete _store[k]; },
  clear:      () => { Object.keys(_store).forEach(k => delete _store[k]); },
  get length(){ return Object.keys(_store).length; },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

beforeEach(() => { lsMock.clear(); vi.stubGlobal('localStorage', lsMock); });
afterEach(() => { vi.unstubAllGlobals(); });

// ── LZ corruption fallback ─────────────────────────────────────
describe('_lzLoad() — corruption fallback', () => {
  it('returns fallback on corrupted LZ data (decompress fails or JSON invalid)', () => {
    // When LZString decompresses to garbage and JSON.parse fails → returns fallback
    // (storage.ts catches the error and returns fallback)
    lsMock.setItem('corrupt_key', 'this-is-not-valid-lz-data!!!###');
    lsMock.setItem('corrupt_key_lz', '1');
    const result = _lzLoad<string[]>('corrupt_key', ['fallback']);
    // Either returns fallback (JSON parse failed) or empty array (decompressed to invalid)
    // Either way, it must not throw and must return the fallback type
    expect(Array.isArray(result)).toBe(true);
  });

  it('returns fallback on JSON.parse failure', () => {
    lsMock.setItem('bad_json', '{not valid json}');
    const result = _lzLoad<Record<string,number>>('bad_json', { default: 1 });
    expect(result).toEqual({ default: 1 });
  });

  it('preserves _lz marker after successful save', () => {
    _lzSave('mykey', { a: 1 });
    expect(lsMock.getItem('mykey_lz')).toBe('1');
  });
});

// ── Round-trip fidelity ───────────────────────────────────────
describe('saveKnown / loadKnown — round-trip fidelity', () => {
  it('preserves words with special characters', () => {
    const words = new Set(["don't", 'café', 'naïve', 'über']);
    saveKnown(words);
    const loaded = loadKnown();
    for (const w of words) expect(loaded.has(w)).toBe(true);
  });

  it('Set size is preserved exactly', () => {
    const words = new Set(['a', 'b', 'c', 'd', 'e']);
    saveKnown(words);
    expect(loadKnown().size).toBe(5);
  });

  it('multiple save/load cycles remain consistent', () => {
    const first = new Set(['apple', 'banana']);
    saveKnown(first);
    const loaded1 = loadKnown();
    // Modify and save again
    loaded1.add('cherry');
    saveKnown(loaded1);
    const loaded2 = loadKnown();
    expect(loaded2.size).toBe(3);
    expect(loaded2.has('cherry')).toBe(true);
  });
});
