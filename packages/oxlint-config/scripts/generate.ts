import { mkdir, writeFile } from 'node:fs/promises';
import { styleText } from 'node:util';
import { buildConfigs } from '../derive/build.ts';

const HEADER = '// 由 scripts/generate.ts 依 @component-hook/eslint-plugin 的設定產生，請勿手動修改。\n';

const { ignorePatterns, ...configs } = buildConfigs();

await mkdir('generated', { recursive: true });

for (const [name, config] of Object.entries(configs)) {
  const json = JSON.stringify(config, null, 2);

  await writeFile(
    `generated/${name}.ts`,
    `${HEADER}import type { OxlintConfig } from 'oxlint';\n\nexport const ${name}: OxlintConfig = ${json};\n`,
  );
}

await writeFile(
  'generated/ignores.ts',
  `${HEADER}\nexport const ignorePatterns = ${JSON.stringify(ignorePatterns, null, 2)};\n`,
);

console.info(styleText('green', 'oxlint configs generated!'));
