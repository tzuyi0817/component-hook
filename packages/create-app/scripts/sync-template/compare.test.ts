// @vitest-environment node
import { comparePackageJson, diffArtTemplate, isPackageDiffEmpty, toTemplatePath } from './compare.ts';

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
});
