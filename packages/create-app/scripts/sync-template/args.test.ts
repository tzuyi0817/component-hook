// @vitest-environment node
import path from 'node:path';
import { parseOnly, parseSourceOverride } from './args.ts';

describe('parseSourceOverride', () => {
  it('splits on the first = only, so the path may contain =', () => {
    expect(parseSourceOverride('vue=/repos/a=b')).toEqual(['vue', '/repos/a=b']);
    expect(parseSourceOverride('react=/x=y=z')).toEqual(['react', '/x=y=z']);
  });

  it('resolves a relative path to an absolute one', () => {
    expect(parseSourceOverride('vue=../coding-standards')).toEqual(['vue', path.resolve('../coding-standards')]);
  });

  it.each(['vue', 'vue=', '=/repos/vue', 'Vue=/repos/vue', 'angular=/repos/angular'])('rejects %j', override => {
    expect(() => parseSourceOverride(override)).toThrow('--source 格式為 <vue|react>=<path>');
  });
});

describe('parseOnly', () => {
  it('checks every framework when --only is not given', () => {
    expect(parseOnly(undefined)).toEqual(['vue', 'react']);
  });

  it('checks only the given framework', () => {
    expect(parseOnly('vue')).toEqual(['vue']);
    expect(parseOnly('react')).toEqual(['react']);
  });

  it.each(['vuee', 'Vue', ''])('rejects %j instead of silently checking nothing', only => {
    expect(() => parseOnly(only)).toThrow('--only 只接受 vue|react');
  });
});
