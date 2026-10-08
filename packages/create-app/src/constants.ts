export const DEFAULT_PROJECT_NAME = 'basic-project';

export const TEMPLATES = ['vue', 'react'];

export const GITHUB_ACTIONS = 'GitHub Actions';

export const GITLAB_CI = 'GitLab CI';

export const CI = ['github-actions', 'gitlab-ci', 'none'];

/** template 內以底線開頭存放、scaffold 時改回原名的檔案，避免被母 repo 的工具或 npm 當成自己的設定 */
export const RENAME_FILES: Record<string, string> = {
  _gitignore: '.gitignore',
  '_gitlab-ci.yml': '.gitlab-ci.yml',
  '_lint-staged.config.js': 'lint-staged.config.js',
};

/** 依選擇的 CI 服務，從 template 排除不需要的 CI 檔案 */
export const CI_FILTERS: Record<string, string[]> = {
  'github-actions': ['.gitlab', '_gitlab-ci.yml'],
  'gitlab-ci': ['.github'],
  none: ['.github', '.gitlab', '_gitlab-ci.yml'],
};
