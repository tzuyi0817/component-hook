import path from 'node:path';
import { FRAMEWORKS } from './config.ts';
import type { Framework } from './types.ts';

const FRAMEWORK_NAMES: ReadonlySet<string> = new Set(FRAMEWORKS);

export function isFramework(value: string | undefined): value is Framework {
  return value !== undefined && FRAMEWORK_NAMES.has(value);
}

/** 解析 --source <vue|react>=<path>：只在第一個 = 切開，路徑本身可以含 = */
export function parseSourceOverride(override: string): readonly [Framework, string] {
  const [, framework, dir] = /^([^=]*)=(.*)$/s.exec(override) ?? [];

  if (!isFramework(framework) || !dir) {
    throw new Error(`--source 格式為 <vue|react>=<path>，收到：${override}`);
  }
  return [framework, path.resolve(dir)];
}

/** 解析 --only：不給時比對全部框架，給了就必須是其中之一 */
export function parseOnly(only: string | undefined): Framework[] {
  if (only === undefined) return [...FRAMEWORKS];
  if (!isFramework(only)) throw new Error(`--only 只接受 ${FRAMEWORKS.join('|')}，收到：${only}`);
  return [only];
}
