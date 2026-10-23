// @vitest-environment node
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { classify, type Context } from './classify.ts';
import type { Framework } from './types.ts';

const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'sync-template-classify-'));
const sources: Record<Framework, string> = {
  react: path.join(tempRoot, 'react'),
  vue: path.join(tempRoot, 'vue'),
};
const templateRoot = path.join(tempRoot, 'create-app');

function writeFile(filePath: string, content: string) {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
}

/** 依 files 寫出來源與 template，鍵為 vue/…、react/… 或 template-*… 的相對路徑 */
function createContext(files: Record<string, string>): Context {
  rmSync(tempRoot, { force: true, recursive: true });

  const sourceFiles = new Map<Framework, Set<string>>([
    ['react', new Set()],
    ['vue', new Set()],
  ]);
  const templateFiles = new Set<string>();

  for (const [file, content] of Object.entries(files)) {
    const [root, ...rest] = file.split('/');
    const relativePath = rest.join('/');

    if (root === 'vue' || root === 'react') {
      writeFile(path.join(sources[root], relativePath), content);
      sourceFiles.get(root)?.add(relativePath);
    } else {
      writeFile(path.join(templateRoot, file), content);
      templateFiles.add(file);
    }
  }
  return { claimed: new Set(), handledShared: new Set(), sourceFiles, sources, templateFiles, templateRoot };
}

afterAll(() => {
  rmSync(tempRoot, { force: true, recursive: true });
});

describe('classify', () => {
  it('reports package.json as NEW without reading files when the template has none', () => {
    const context = createContext({ 'vue/package.json': '{}' });

    expect(classify(context, 'vue', 'package.json')).toEqual({
      framework: 'vue',
      sourcePath: 'package.json',
      status: 'new',
      target: 'template-vue/package.json',
    });
    expect(context.claimed.size).toBe(0);
  });

  it('compares package.json with the framework template and claims it', () => {
    const pkg = JSON.stringify({ dependencies: { vue: '^3.0.0' } });
    const context = createContext({ 'template-vue/package.json': pkg, 'vue/package.json': pkg });

    expect(classify(context, 'vue', 'package.json')).toMatchObject({ status: 'same' });
    expect(context.claimed).toEqual(new Set(['template-vue/package.json']));
  });

  it('prefers the shared template over the framework one', () => {
    const context = createContext({
      'template-shared/a.json': 'a',
      'template-vue/a.json': 'a',
      'vue/a.json': 'a',
    });

    expect(classify(context, 'vue', 'a.json')).toMatchObject({ status: 'same', target: 'template-shared/a.json' });
    expect(context.claimed).toEqual(new Set(['template-shared/a.json']));
  });

  it('falls back to the .art template and treats {{…}} lines as wildcards', () => {
    const context = createContext({
      'template-vue/index.html.art': '<title>{{ name }}</title>\n<body></body>',
      'vue/index.html': '<title>vue</title>\n<body></body>',
    });

    expect(classify(context, 'vue', 'index.html')).toMatchObject({
      status: 'same',
      target: 'template-vue/index.html.art',
    });
  });

  it('reports a shared file only once across both sources', () => {
    const context = createContext({ 'react/a.json': 'a', 'template-shared/a.json': 'a', 'vue/a.json': 'a' });

    expect(classify(context, 'vue', 'a.json')).toMatchObject({ status: 'same' });
    expect(classify(context, 'react', 'a.json')).toBeUndefined();
  });

  it('marks a shared file as CONFLICT when the two sources disagree', () => {
    const context = createContext({ 'react/a.json': 'b', 'template-shared/a.json': 'a', 'vue/a.json': 'a' });

    expect(classify(context, 'vue', 'a.json')).toMatchObject({
      note: 'vue 與 react 的來源內容不同',
      status: 'conflict',
    });
  });

  it('reports a file without any template as NEW under the framework template', () => {
    const context = createContext({ 'vue/b.ts': 'b' });

    expect(classify(context, 'vue', 'b.ts')).toMatchObject({ status: 'new', target: 'template-vue/b.ts' });
  });

  it('ignores IGNORED_PATHS and skips KNOWN_DIVERGENT with its reason', () => {
    const context = createContext({ 'vue/CODE_OF_CONDUCT.md': 'c', 'vue/pnpm-lock.yaml': 'l' });

    expect(classify(context, 'vue', 'pnpm-lock.yaml')).toBeUndefined();
    expect(classify(context, 'vue', 'CODE_OF_CONDUCT.md')).toMatchObject({ status: 'skip' });
  });
});
