// One-off, reusable-across-languages script: appends tenses/grammar/
// exceptions categories to a grammar_<lang>.ts file, bringing it from its
// 5-rule basics stub to 70 rules. Validates total count and rule-ID
// uniqueness before writing. Expects <scratch-dir>/<lang>-grammar-tenses.json,
// <lang>-grammar-grammar-1.json, <lang>-grammar-grammar-2.json,
// <lang>-grammar-exceptions.json.
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-require-imports */

const lang = process.argv[2];
const scratchDir = process.argv[3];
if (!lang || !scratchDir) {
  console.error('Usage: node merge-grammar-lang.cjs <lang> <scratch-dir-with-json-files>');
  process.exit(1);
}

const grammarPath = path.join(__dirname, `../../data/grammar-data/grammar_${lang}.ts`);
const varName = `GRAMMAR_${lang.toUpperCase()}`;

function loadJson(name) {
  return JSON.parse(fs.readFileSync(path.join(scratchDir, name), 'utf8'));
}

const tenses = loadJson(`${lang}-grammar-tenses.json`);
const grammar1 = loadJson(`${lang}-grammar-grammar-1.json`);
const grammar2 = loadJson(`${lang}-grammar-grammar-2.json`);
const exceptions = loadJson(`${lang}-grammar-exceptions.json`);
const grammarRules = [...grammar1, ...grammar2];

const src = fs.readFileSync(grammarPath, 'utf8');
const re = new RegExp(`export const ${varName}: GrammarCategory\\[\\] = (\\[[\\s\\S]*\\]);\\s*$`);
const basicsMatch = src.match(re);
if (!basicsMatch) {
  console.error(`Could not locate ${varName} array in file`);
  process.exit(1);
}
const existing = eval(basicsMatch[1]);

const newCategories = [
  {
    id: 'tenses',
    title: 'Часи та способи дієслова',
    titleEn: 'Tenses & Moods',
    emoji: '⏰',
    rules: tenses,
  },
  {
    id: 'grammar',
    title: 'Граматика',
    titleEn: 'Grammar',
    emoji: '📖',
    rules: grammarRules,
  },
  {
    id: 'exceptions',
    title: 'Виключення',
    titleEn: 'Exceptions',
    emoji: '⚡',
    rules: exceptions,
  },
];

const all = [...existing, ...newCategories];

const totalRules = all.reduce((n, c) => n + c.rules.length, 0);
const ids = all.flatMap((c) => c.rules.map((r) => r.id));
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);

console.log('Total rules:', totalRules);
if (dupes.length) {
  console.error('Duplicate rule IDs:', dupes);
  process.exit(1);
}
if (totalRules !== 70) {
  console.error('Expected 70 total rules, got', totalRules);
  process.exit(1);
}

const header = `// Vymova — data/grammar-data/grammar_${lang}.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const ${varName}: GrammarCategory[] = `;

const out = header + JSON.stringify(all, null, 2) + ';\n';
fs.writeFileSync(grammarPath, out, 'utf8');
console.log(`Wrote grammar_${lang}.ts with`, totalRules, 'rules across', all.length, 'categories.');
