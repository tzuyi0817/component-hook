import { v4 } from 'uuid';
import type Token from 'markdown-it/lib/token.mjs';

export function groupPlugin() {
  return {
    render(tokens: Token[], index: number) {
      if (tokens[index].nesting !== 1) return '</div></div>\n';
      const name = `group-${v4()}`;
      let tabs = '';
      let checked = 'checked';

      for (let i = index + 1; i < tokens.length - 1; i++) {
        const token = tokens[i];

        if (token.nesting === -1 && token.type === 'container_group_close') break;
        if (token.type !== 'fence' || token.tag !== 'code') continue;
        const regex = /\[([^\]]{0,100})\]/;
        const title = token.info.match(regex)?.[1];

        if (!title) continue;

        tabs += `
          <label class="group-label" data-title="${title}">
            <input type="radio" name="${name}" ${checked} />${title}
          </label>
        `;
        if (checked) {
          token.attrSet('class', 'active');
        }
        token.info = token.info.replace(regex, '').trim();
        checked = '';
      }

      return `<div class="group-panel">\n<div class="group-tabs">${tabs}</div><div class="group-blocks">\n`;
    },
  };
}
