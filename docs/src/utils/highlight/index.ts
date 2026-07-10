import markdownit from 'markdown-it';
import container from 'markdown-it-container';
import prism from 'prismjs';
import { groupPlugin, linkPlugin, tablePlugin, tipPlugin } from './plugins';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

export const md = createMarkdown();

function createMarkdown() {
  // eslint-disable-next-line sonarjs/disabled-auto-escaping
  const markdown = markdownit({ highlight, html: true });

  markdown
    .use(linkPlugin)
    .use(container, 'group', groupPlugin())
    .use(container, 'tip', tipPlugin(markdown))
    .use(fencePlugin)
    .use(tablePlugin);

  return markdown;
}

function wrap(code: string, lang: string, classAttr: string) {
  return (
    `<div class="code-wrapper ${classAttr}">` +
    `<pre v-pre class="language-${lang}">` +
    `<code>${code}</code>` +
    `<button class="copy-code plain"></button>` +
    `</pre>` +
    `</div>`
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
