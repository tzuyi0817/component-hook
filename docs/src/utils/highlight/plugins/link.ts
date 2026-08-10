import type { MarkdownIt } from 'markdown-it';

export function linkPlugin(markdown: MarkdownIt) {
  markdown.renderer.rules.link_open = (tokens, index, options, _env, self) => {
    const token = tokens[index];

    token.attrSet('target', '_blank');
    token.attrSet('rel', 'noopener noreferrer');
    token.attrSet('class', 'link');

    return self.renderToken(tokens, index, options);
  };
}
