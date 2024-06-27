import prism from 'prismjs';

function wrap(code: string) {
  return `<pre v-pre><code>${code}</code></pre>`;
}

export function highlight(code: string, lang = 'markup') {
  const html = prism.highlight(code, prism.languages[lang], lang);

  return wrap(html);
}
