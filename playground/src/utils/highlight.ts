import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import markdownit from 'markdown-it';

export const md = markdownit({ highlight });

function wrap(code: string, lang: string) {
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`;
}

export function highlight(source: string, lang = 'markup') {
  const code = prism.highlight(source, prism.languages[lang], lang);

  return wrap(code, lang);
}
