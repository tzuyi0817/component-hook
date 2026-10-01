import { mkdir, writeFile } from 'node:fs/promises';
import { styleText } from 'node:util';
import { basic, react, vue } from '../index.ts';

/**
 * oxlint 的 JSON 設定檔只能 `extends` 檔案路徑，無法解析 package 名稱，
 * 因此把 TS 設定物件另外輸出成 JSON，讓 `.oxlintrc.json` 使用者能以
 * `./node_modules/@component-hook/oxlint-config/dist/<name>.json` 引用。
 */
const SCHEMA_URL = 'https://raw.githubusercontent.com/oxc-project/oxc/main/npm/oxlint/configuration_schema.json';

const configs = { basic, react, vue };

await mkdir('dist', { recursive: true });

for (const [name, config] of Object.entries(configs)) {
  const json = JSON.stringify({ $schema: SCHEMA_URL, ...config }, null, 2);

  await writeFile(`dist/${name}.json`, `${json}\n`);
}

console.info(styleText('green', 'oxlint JSON configs generated!'));
