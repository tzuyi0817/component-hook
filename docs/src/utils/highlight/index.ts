import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import markdownit from 'markdown-it';
import container from 'markdown-it-container';
import { linkPlugin, groupPlugin, tipPlugin } from './plugins';

export const md = markdownit({ highlight });

md.use(linkPlugin).use(container, 'group', groupPlugin()).use(container, 'tip', tipPlugin(md)).use(fencePlugin);

function wrap(code: string, lang: string, classAttr: string) {
  return (
    `<pre v-pre class="language-${lang} ${classAttr}">` +
    `<code>${code}</code>` +
    `<button class="copy-code plain"></button>` +
    `</pre>`
  );
}

export function highlight(source: string, lang = 'markup', classAttr = '') {
  const code = prism.highlight(source, prism.languages[lang], lang);

  return wrap(code, lang, classAttr);
}

function fencePlugin(markdown: markdownit) {
  markdown.renderer.rules.fence = (tokens, index) => {
    const token = tokens[index];
    const { content, info: lang } = token;
    const classAttr = token.attrGet('class') || '';

    return highlight(content, lang, classAttr);
  };
}
