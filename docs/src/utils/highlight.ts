import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import markdownit from 'markdown-it';

export const md = markdownit({ highlight });

md.use(addAttributes);

function wrap(code: string, lang: string) {
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`;
}

export function highlight(source: string, lang = 'markup') {
  const code = prism.highlight(source, prism.languages[lang], lang);

  return wrap(code, lang);
}

export function addAttributes(markdown: markdownit) {
  markdown.renderer.rules.link_open = (tokens, index, options, _env, self) => {
    const token = tokens[index];

    token.attrSet('target', '_blank');
    token.attrSet('rel', 'noopener noreferrer');
    token.attrSet('class', 'link');

    return self.renderToken(tokens, index, options);
  };
}
