import { execFileSync } from 'node:child_process';
import os from 'node:os';
import packageJson from '../../package.json' with { type: 'json' };

const platform = os.platform();
const git = platform === 'win32' ? String.raw`C:\Program Files\Git\bin\git.exe` : '/usr/bin/git';
const hash = execFileSync(git, ['rev-parse', 'HEAD']).toString().trim().slice(0, 7);

process.env.VITE_APP_VERSION = packageJson.version;
process.env.VITE_APP_LAST_COMMIT_HASH = `${hash}`;
process.env.VITE_APP_BUILD_EPOCH = Date.now().toString();

if (process.env.MOCK) {
  process.env.VITE_APP_MOCK = 'service-worker';
}
