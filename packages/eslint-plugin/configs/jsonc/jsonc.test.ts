// @vitest-environment node
import { jsoncConfigs } from './index.ts';

describe('jsonc config', () => {
  it('sorts top-level and nested package.json keys', () => {
    const packageJsonConfig = jsoncConfigs.find(config => config.name === 'component-hook/jsonc/package-json');
    const sortKeys = packageJsonConfig?.rules?.['jsonc/sort-keys'];

    expect(packageJsonConfig?.files).toEqual(['**/package.json']);
    expect(sortKeys).toEqual(expect.arrayContaining([expect.objectContaining({ pathPattern: '^$' })]));
    expect(sortKeys).toEqual(expect.arrayContaining([expect.objectContaining({ pathPattern: '^devEngines$' })]));
    expect(sortKeys).toEqual(expect.arrayContaining([expect.objectContaining({ pathPattern: '^exports.*$' })]));
    expect(packageJsonConfig?.rules?.['jsonc/sort-array-values']).toBeDefined();
  });
});
