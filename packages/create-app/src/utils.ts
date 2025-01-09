import path from 'node:path';
import { readdirSync, existsSync, remove } from 'fs-extra';

export function formatTargetDir(targetDir?: string) {
  if (!targetDir) return targetDir;

  targetDir = targetDir.trim();

  if (targetDir[0] === '/') {
    targetDir = targetDir.slice(1);
  }
  if (targetDir.at(-1) === '/') {
    targetDir = targetDir.slice(0, -1);
  }
  return targetDir;
}

export function getPkgManagerInfo() {
  const userAgent = process.env.npm_config_user_agent;

  if (!userAgent) return;
  const [pkgManager] = userAgent.split(' ');
  const [name, version] = pkgManager.split('/');

  return { name, version };
}

export function isEmptyFolder(dir: string) {
  const files = readdirSync(dir);

  return files.length === 0 || (files.length === 1 && files[0] === '.git');
}

export function clearFolder(dir: string) {
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter(file => file !== '.git');

  return Promise.all(files.map(file => remove(path.resolve(dir, file))));
}
