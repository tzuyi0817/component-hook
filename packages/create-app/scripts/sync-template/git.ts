import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
import path from 'node:path';

const GIT_PATH = process.platform === 'win32' ? String.raw`C:\Program Files\Git\bin\git.exe` : '/usr/bin/git';

function git(repoDir: string, args: string[]) {
  return execFileSync(GIT_PATH, ['-C', repoDir, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

/** 必須是 repo 根目錄：來源都是獨立的參考專案，指到子目錄（例如 <repo>/src）多半是手誤，比對結果會全部錯位 */
export function isGitRepository(dir: string) {
  try {
    const [insideWorkTree, prefix] = git(dir, ['rev-parse', '--is-inside-work-tree', '--show-prefix']).split('\n', 2);

    return insideWorkTree === 'true' && prefix === '';
  } catch {
    return false;
  }
}

/** 只看 git 追蹤、且工作樹中確實是檔案的路徑：排除 node_modules 等產物，也略過尚未 commit 的刪除與 submodule 目錄 */
export function listTrackedFiles(repoDir: string, pathspec?: string): string[] {
  const output = git(repoDir, ['ls-files', '-z', ...(pathspec ? ['--', pathspec] : [])]);

  return output
    .split('\0')
    .filter(file => file && statSync(path.join(repoDir, file), { throwIfNoEntry: false })?.isFile());
}

/** 檔案最後一次 commit 的 unix 時間；沒有歷史時回傳 undefined */
export function lastCommitTime(repoDir: string, filePath: string): number | undefined {
  const output = git(repoDir, ['log', '-1', '--format=%ct', '--', filePath]).trim();

  return output ? Number(output) : undefined;
}

/** 工作樹中該檔與 HEAD 不同，不論有沒有 stage */
export function hasUncommittedChanges(repoDir: string, filePath: string) {
  return git(repoDir, ['status', '--porcelain', '--', filePath]).trim() !== '';
}

/** 檔案目前內容的 blob hash，與 git add 後存進 repo 的相同 */
export function hashObject(repoDir: string, filePath: string) {
  return git(repoDir, ['hash-object', '--', filePath]).trim();
}

/** 該路徑在 HEAD 歷史中出現過的每個版本的 blob hash */
export function blobHistoryOf(repoDir: string, filePath: string): ReadonlySet<string> {
  const output = git(repoDir, ['log', '--format=', '--raw', '--no-abbrev', '--', filePath]);

  // --raw 每行為 `:<舊 mode> <新 mode> <舊 blob> <新 blob> <狀態>\t<路徑>`，取 commit 後的版本
  return new Set(output.split('\n').flatMap(line => line.split(/\s+/, 5).at(3) ?? []));
}
