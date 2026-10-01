// @vitest-environment node
import { toOxlintFiles, toOxlintGlobs } from './index.ts';

describe('toOxlintGlobs', () => {
  it('expands the source extension extglob into braces', () => {
    expect(toOxlintGlobs('**/*config*.?([cm])[jt]s?(x)')).toEqual(['**/*config*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}']);
  });

  it('expands a single optional extglob into two patterns', () => {
    expect(toOxlintGlobs('**/auto-import?(s).d.ts')).toEqual(['**/auto-import.d.ts', '**/auto-imports.d.ts']);
    expect(toOxlintGlobs('**/*.[jt]s?(x)')).toEqual(['**/*.[jt]s', '**/*.[jt]sx']);
  });

  it('keeps plain globs and brace groups untouched', () => {
    expect(toOxlintGlobs('**/{views,pages}/**/*.ts')).toEqual(['**/{views,pages}/**/*.ts']);
  });

  it('rejects extglob syntax it cannot expand', () => {
    expect(() => toOxlintGlobs('**/*.@(ts|tsx)')).toThrow('extglob');
  });
});

describe('toOxlintFiles', () => {
  it('returns undefined for global configs', () => {
    expect(toOxlintFiles(undefined)).toBeUndefined();
  });

  it('reduces AND groups produced by defineConfig extends', () => {
    expect(
      toOxlintFiles([
        ['**/*.ts', '**/*.ts'],
        ['**/*.ts', '**/*.tsx'],
        ['**/*.tsx', '**/*.tsx'],
        ['**/*.tsx', '**/*.mts'],
      ]),
    ).toEqual(['**/*.ts', '**/*.tsx']);
  });

  it('drops non script globs and dedupes the rest', () => {
    expect(toOxlintFiles(['**/*.d.ts', '**/*.md/**', '**/*.json', '**/*.y?(a)ml', '**/*.d.ts'])).toEqual(['**/*.d.ts']);
    expect(toOxlintFiles(['**/*.json', '**/*.json5'])).toEqual([]);
  });
});
