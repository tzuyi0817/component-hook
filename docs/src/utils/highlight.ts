import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import { v4 } from 'uuid';
import markdownit from 'markdown-it';
import container from 'markdown-it-container';
import type Token from 'markdown-it/lib/token.mjs';

export const md = markdownit({ highlight });

md.use(linkPlugin).use(container, 'group', groupPlugin()).use(fencePlugin);

function wrap(code: string, lang: string, classAttr: string) {
  return `<pre v-pre class="language-${lang} ${classAttr}"><code>${code}</code></pre>`;
}

export function highlight(source: string, lang = 'markup', classAttr = '') {
  const code = prism.highlight(source, prism.languages[lang], lang);

  return wrap(code, lang, classAttr);
}

function linkPlugin(markdown: markdownit) {
  markdown.renderer.rules.link_open = (tokens, index, options, _env, self) => {
    const token = tokens[index];

    token.attrSet('target', '_blank');
    token.attrSet('rel', 'noopener noreferrer');
    token.attrSet('class', 'link');

    return self.renderToken(tokens, index, options);
  };
}

function groupPlugin() {
  return {
    render(tokens: Token[], index: number) {
      const name = `group-${v4()}`;
      let tabs = '';
      let checked = 'checked';

      if (tokens[index].nesting !== 1) return '</div></div>\n';

      for (let i = index + 1; i < tokens.length - 1; i++) {
        const token = tokens[i];

        if (token.type !== 'fence' || token.tag !== 'code') continue;
        const regex = /\[([^\]]{0,100})\]/;
        const title = token.info.match(regex)?.[1];

        if (!title) continue;

        tabs += `
          <label class="group-label">
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

function fencePlugin(markdown: markdownit) {
  markdown.renderer.rules.fence = (tokens, index) => {
    const token = tokens[index];
    const { content, info: lang } = token;
    const classAttr = token.attrGet('class') || '';

    return highlight(content, lang, classAttr);
  };
}
