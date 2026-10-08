import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { styleText } from 'node:util';

interface Target {
  template: string;
  ci: string;
}

/** 每個 template 搭配不同的 CI 選項，順便覆蓋 CI 檔案的過濾與改名邏輯 */
const targets: Target[] = [
  { template: 'vue', ci: 'github-actions' },
  { template: 'react', ci: 'gitlab-ci' },
];

/** 使用者 scaffold 完最常接著跑的指令；CI 環境預設 frozen lockfile，但新專案還沒有 lockfile */
const checks: string[][] = [
  ['install', '--no-frozen-lockfile'],
  ['lint'],
  ['typecheck'],
  ['test:unit', '--run'],
  ['build'],
];

const packageDir = path.resolve(import.meta.dirname, '..');
const binPath = path.join(packageDir, 'bin', 'index.js');
const workDir = mkdtempSync(path.join(tmpdir(), 'create-app-smoke-'));

function run(command: string, args: string[], cwd: string) {
  console.info(styleText('cyan', `\n$ ${[command, ...args].join(' ')}`));
  execFileSync(command, args, { cwd, stdio: 'inherit' });
}

function smokeTest({ template, ci }: Target) {
  const projectName = `smoke-${template}`;
  const projectDir = path.join(workDir, projectName);

  console.info(styleText(['bold', 'magenta'], `\n##### ${template} template (--ci ${ci}) #####`));
  run('node', [binPath, projectName, '--template', template, '--ci', ci], workDir);

  for (const args of checks) {
    run('pnpm', args, projectDir);
  }
}

try {
  run('pnpm', ['build'], packageDir);

  for (const target of targets) {
    smokeTest(target);
  }
  console.info(styleText('green', '\n✔ create-app smoke test passed'));
} finally {
  rmSync(workDir, { recursive: true, force: true });
}
