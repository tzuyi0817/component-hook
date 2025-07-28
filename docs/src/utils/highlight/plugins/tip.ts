import type markdownit from 'markdown-it';
import type Token from 'markdown-it/lib/token.mjs';

export function tipPlugin(markdown: markdownit) {
  return {
    render(tokens: Token[], index: number) {
      const token = tokens[index];

      if (token.nesting !== 1) return '</div>\n';
      const info = token.info.trim().slice('tip'.length).trim();
      const title = markdown.renderInline(info);

      return `<div class="tip"><p class="tip-title">${title}</p>\n`;
    },
  };
}
