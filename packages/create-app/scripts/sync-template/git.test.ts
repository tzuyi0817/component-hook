// @vitest-environment node
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { blobHistoryOf, hashObject, hasUncommittedChanges, isGitRepository, listTrackedFiles } from './git.ts';

/** 與 git.ts 相同：用固定路徑執行 git，不依賴 PATH */
const GIT_PATH = process.platform === 'win32' ? String.raw`C:\Program Files\Git\bin\git.exe` : '/usr/bin/git';
const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'sync-template-git-'));
const repoDir = path.join(tempRoot, 'repo');
/** 指向不存在的目錄以停用所有 hook，避免貢獻者的全域 core.hooksPath / init.templateDir 影響 fixture */
const NO_HOOKS_DIR = path.join(tempRoot, 'no-hooks');

function git(cwd: string, ...args: string[]) {
  const config = ['-c', 'user.name=test', '-c', 'user.email=test@example.com', '-c', `core.hooksPath=${NO_HOOKS_DIR}`];

  execFileSync(GIT_PATH, [...config, ...args], {
    cwd,
    stdio: 'ignore',
  });
}

function writeFile(relativePath: string, content = '') {
  const filePath = path.join(repoDir, relativePath);

  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
}

beforeAll(() => {
  mkdirSync(repoDir);
  git(repoDir, 'init', '--quiet');
  writeFile('README.md', 'readme');
  writeFile('src/main.ts', 'main');
  writeFile('src/removed.ts', 'removed');
  git(repoDir, 'add', '--all');
  git(repoDir, 'commit', '--quiet', '--no-gpg-sign', '-m', 'init');
  git(tempRoot, 'init', '--quiet', '--bare', 'bare.git');
});

afterAll(() => {
  rmSync(tempRoot, { force: true, recursive: true });
});

describe('isGitRepository', () => {
  it('accepts the root of a work tree', () => {
    expect(isGitRepository(repoDir)).toBe(true);
  });

  it('rejects a subdirectory, since sources are standalone repositories', () => {
    expect(isGitRepository(path.join(repoDir, 'src'))).toBe(false);
  });

  it('rejects the .git directory and bare repositories', () => {
    expect(isGitRepository(path.join(repoDir, '.git'))).toBe(false);
    expect(isGitRepository(path.join(tempRoot, 'bare.git'))).toBe(false);
  });

  it('rejects a directory outside any repository and a missing path', () => {
    expect(isGitRepository(tempRoot)).toBe(false);
    expect(isGitRepository(path.join(tempRoot, 'missing'))).toBe(false);
  });
});

describe('listTrackedFiles', () => {
  it('lists tracked files and skips ones deleted from the work tree but not committed yet', () => {
    rmSync(path.join(repoDir, 'src/removed.ts'));

    expect(listTrackedFiles(repoDir)).toEqual(['README.md', 'src/main.ts']);
  });

  it('limits the result to the pathspec', () => {
    expect(listTrackedFiles(repoDir, 'src/*')).toEqual(['src/main.ts']);
  });
});

describe('hasUncommittedChanges', () => {
  it('is false for a file that matches HEAD', () => {
    expect(hasUncommittedChanges(repoDir, 'src/main.ts')).toBe(false);
  });

  it('is true once the work tree differs from HEAD, staged or not', () => {
    writeFile('README.md', 'readme edited');

    expect(hasUncommittedChanges(repoDir, 'README.md')).toBe(true);

    git(repoDir, 'add', 'README.md');

    expect(hasUncommittedChanges(repoDir, 'README.md')).toBe(true);
  });
});

describe('blobHistoryOf / hashObject', () => {
  it('finds every committed version of a file, and nothing it never contained', () => {
    writeFile('src/history.ts', 'v1');
    git(repoDir, 'add', 'src/history.ts');
    git(repoDir, 'commit', '--quiet', '--no-gpg-sign', '-m', 'v1', '--', 'src/history.ts');
    writeFile('src/history.ts', 'v2');
    git(repoDir, 'commit', '--quiet', '--no-gpg-sign', '-m', 'v2', '--', 'src/history.ts');

    const history = blobHistoryOf(repoDir, 'src/history.ts');

    writeFile('src/history.ts', 'v1');
    expect(history.has(hashObject(repoDir, 'src/history.ts'))).toBe(true);

    writeFile('src/history.ts', 'never committed');
    expect(history.has(hashObject(repoDir, 'src/history.ts'))).toBe(false);
  });
});
