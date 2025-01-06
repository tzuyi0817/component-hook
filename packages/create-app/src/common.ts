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
