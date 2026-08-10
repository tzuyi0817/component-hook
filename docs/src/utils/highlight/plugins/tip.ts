import type { MarkdownIt, Token } from 'markdown-it';

export function tipPlugin(markdown: MarkdownIt) {
  return {
    name: 'tip',
    openRender(tokens: Token[], index: number) {
      const token = tokens[index];

      if (token.nesting !== 1) return '</div>\n';

      const info = token.info.trim().slice('tip'.length).trim();
      const title = markdown.renderInline(info);

      return `<div class="tip"><p class="tip-title">${title}</p>\n`;
    },
    closeRender: () => `</div>\n`,
  };
}
