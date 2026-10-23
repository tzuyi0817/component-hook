// @vitest-environment node
import {
  comparePackageJson,
  countDrift,
  diffArtTemplate,
  findTemplateOnly,
  isPackageDiffEmpty,
  newerSideOf,
  templateKindsOf,
  toTemplatePath,
} from './compare.ts';
import type { Entry } from './types.ts';

describe('toTemplatePath', () => {
  it('maps files the CLI renames when scaffolding back to their template name', () => {
    expect(toTemplatePath('.gitignore')).toBe('_gitignore');
    expect(toTemplatePath('.gitlab-ci.yml')).toBe('_gitlab-ci.yml');
    expect(toTemplatePath('lint-staged.config.js')).toBe('_lint-staged.config.js');
  });

  it('keeps every other path unchanged', () => {
    expect(toTemplatePath('src/main.ts')).toBe('src/main.ts');
  });
});

describe('diffArtTemplate', () => {
  it('treats template lines with placeholders as wildcards', () => {
    expect(diffArtTemplate('# {{projectName}}\nbody\n{{ciContent}}', '# Vue3 Coding Standards\nbody\n- CI')).toEqual(
      [],
    );
  });

  it('reports lines that differ with their line number', () => {
    expect(diffArtTemplate('a\n## Title\nc', 'a\n### Title\nc')).toEqual([
      { line: 2, source: '### Title', template: '## Title' },
    ]);
  });

  it('reports extra lines on either side', () => {
    expect(diffArtTemplate('a', 'a\nb')).toEqual([{ line: 2, source: 'b', template: '' }]);
    expect(diffArtTemplate('a\nb', 'a')).toEqual([{ line: 2, source: '', template: 'b' }]);
  });
});

describe('comparePackageJson', () => {
  const template = {
    devDependencies: { msw: '^2.0.0', vite: '^8.3.0' },
    packageManager: 'pnpm@12.4.2',
    scripts: { lint: 'eslint .' },
  };

  it('reports range differences for dependencies both sides have', () => {
    const diff = comparePackageJson({ ...template, devDependencies: { msw: '^2.0.0', vite: '^8.3.3' } }, template);

    expect(diff.ranges).toEqual([{ name: 'vite', section: 'devDependencies', source: '^8.3.3', template: '^8.3.0' }]);
    expect(isPackageDiffEmpty(diff)).toBe(false);
  });

  it('lists dependencies only one side has instead of changing them', () => {
    const diff = comparePackageJson(
      { devDependencies: { oxfmt: '^0.72.0' } },
      { devDependencies: { prettier: '^3.0.0' } },
    );

    expect(diff.onlyInSource).toEqual(['oxfmt']);
    expect(diff.onlyInTemplate).toEqual(['prettier']);
    expect(diff.ranges).toEqual([]);
  });

  it('skips dependencies listed for the template', () => {
    const diff = comparePackageJson({ devDependencies: { msw: '^3.0.2' } }, { devDependencies: { msw: '^2.0.0' } }, [
      'msw',
    ]);

    expect(isPackageDiffEmpty(diff)).toBe(true);
  });

  it('reports packageManager and script differences', () => {
    const diff = comparePackageJson(
      { ...template, packageManager: 'pnpm@12.10.1', scripts: { lint: 'eslint --fix .' } },
      template,
    );

    expect(diff.packageManager).toEqual({ source: 'pnpm@12.10.1', template: 'pnpm@12.4.2' });
    expect(diff.scripts).toEqual([{ name: 'lint', source: 'eslint --fix .', template: 'eslint .' }]);
  });

  it('is empty when both sides agree', () => {
    expect(isPackageDiffEmpty(comparePackageJson(template, template))).toBe(true);
  });

  it('reports dependencies that moved to another section', () => {
    const diff = comparePackageJson({ dependencies: { msw: '^2.0.0' } }, { devDependencies: { msw: '^2.0.0' } });

    expect(diff.sections).toEqual([{ name: 'msw', source: 'dependencies', template: 'devDependencies' }]);
    expect(diff.ranges).toEqual([]);
    expect(isPackageDiffEmpty(diff)).toBe(false);
  });

  it('reports both the section and the range when a dependency moved and changed', () => {
    const diff = comparePackageJson({ dependencies: { msw: '^3.0.0' } }, { devDependencies: { msw: '^2.0.0' } });

    expect(diff.sections).toEqual([{ name: 'msw', source: 'dependencies', template: 'devDependencies' }]);
    expect(diff.ranges).toEqual([{ name: 'msw', section: 'devDependencies', source: '^3.0.0', template: '^2.0.0' }]);
  });

  it('does not report section moves of skipped dependencies', () => {
    const diff = comparePackageJson({ dependencies: { msw: '^2.0.0' } }, { devDependencies: { msw: '^2.0.0' } }, [
      'msw',
    ]);

    expect(diff.sections).toEqual([]);
  });

  it('reports top-level fields added, changed or removed as JSON', () => {
    const diff = comparePackageJson({ engines: { node: '>=24' }, type: 'module' }, { private: true, type: 'commonjs' });

    expect(diff.fields).toEqual([
      { name: 'engines', source: '{"node":">=24"}', template: undefined },
      { name: 'type', source: '"module"', template: '"commonjs"' },
      { name: 'private', source: undefined, template: 'true' },
    ]);
    expect(isPackageDiffEmpty(diff)).toBe(false);
  });

  it('ignores key order inside nested fields', () => {
    const diff = comparePackageJson(
      { engines: { node: '>=24', pnpm: '>=12' } },
      { engines: { pnpm: '>=12', node: '>=24' } },
    );

    expect(diff.fields).toEqual([]);
  });

  it('skips top-level fields listed for the template', () => {
    const diff = comparePackageJson(
      { license: 'MIT', name: 'source' },
      { name: 'vue-starter' },
      [],
      ['license', 'name'],
    );

    expect(isPackageDiffEmpty(diff)).toBe(true);
  });

  it('does not repeat dependencies, scripts or packageManager as fields', () => {
    const diff = comparePackageJson(
      { ...template, dependencies: { vue: '^3.0.0' }, packageManager: 'pnpm@12.10.1', scripts: {} },
      template,
    );

    expect(diff.fields).toEqual([]);
  });
});

describe('findTemplateOnly', () => {
  const templateFiles = ['template-shared/a.json', 'template-vue/b.ts', 'template-react/c.tsx'];

  it('lists unclaimed files of the given kinds only', () => {
    expect(findTemplateOnly(templateFiles, new Set(['template-vue/b.ts']), new Set(['shared', 'vue']))).toEqual([
      'template-shared/a.json',
    ]);
  });

  it('leaves shared files out when shared is not a checked kind', () => {
    expect(findTemplateOnly(templateFiles, new Set(), new Set(['react']))).toEqual(['template-react/c.tsx']);
  });
});

describe('templateKindsOf', () => {
  it('checks shared files only when every framework is compared', () => {
    expect(templateKindsOf(['vue', 'react'])).toEqual(new Set(['shared', 'vue', 'react']));
    expect(templateKindsOf(['vue'])).toEqual(new Set(['vue']));
  });
});

describe('countDrift', () => {
  const entry = (status: Entry['status']): Entry => ({ framework: 'vue', sourcePath: 'a', status });

  it('counts everything except SAME and SKIP, plus template-only files', () => {
    const entries = (['same', 'skip', 'diff', 'new', 'deps', 'manual', 'conflict'] as const).map(entry);

    expect(countDrift(entries, [])).toBe(5);
    expect(countDrift([entry('same')], ['template-shared/orphan.json'])).toBe(1);
  });
});

describe('newerSideOf', () => {
  it('compares versions numerically after stripping the range prefix', () => {
    expect(newerSideOf('^1.9.0', '^1.10.0')).toBe('source newer');
    expect(newerSideOf('^1.10.0', '~1.9.0')).toBe('template newer');
    expect(newerSideOf('pnpm@12.15.0', 'pnpm@12.10.1')).toBe('template newer');
  });

  it('returns undefined when only the prefix differs', () => {
    expect(newerSideOf('^1.2.3', '~1.2.3')).toBeUndefined();
  });
});
