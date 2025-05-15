import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { remove } from 'fs-extra/esm';
import { DEFAULT_PROJECT_NAME } from './config';

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

export function getProjectName(targetDir?: string) {
  if (!targetDir) {
    return DEFAULT_PROJECT_NAME;
  }
  return path.basename(path.resolve(targetDir));
}

export function isValidPackageName(projectName: string) {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName);
}

export function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replaceAll(/[^a-z\d\-~]+/g, '-');
}

export function toUpperCasePackageName(projectName: string) {
  return projectName
    .split('-')
    .map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
    .join(' ');
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
