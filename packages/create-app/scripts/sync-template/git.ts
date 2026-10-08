import { execFileSync } from 'node:child_process';

/** 與 template-shared/scripts/build-info 相同：用固定路徑執行 git，不依賴 PATH */
const GIT_PATH = process.platform === 'win32' ? String.raw`C:\Program Files\Git\bin\git.exe` : '/usr/bin/git';

function git(repoDir: string, args: string[]) {
  return execFileSync(GIT_PATH, ['-C', repoDir, ...args], { encoding: 'utf8' });
}

export function isGitRepository(dir: string) {
  try {
    return git(dir, ['rev-parse', '--is-inside-work-tree']).trim() === 'true';
  } catch {
    return false;
  }
}

/** 只看 git 追蹤的檔案，自然排除 node_modules、dist、coverage 等產物 */
export function listTrackedFiles(repoDir: string, pathspec?: string): string[] {
  const output = git(repoDir, ['ls-files', '-z', ...(pathspec ? ['--', pathspec] : [])]);

  return output.split('\0').filter(Boolean);
}

/** 檔案最後一次 commit 的 unix 時間；沒有歷史時回傳 undefined */
export function lastCommitTime(repoDir: string, filePath: string): number | undefined {
  const output = git(repoDir, ['log', '-1', '--format=%ct', '--', filePath]).trim();

  return output ? Number(output) : undefined;
}
