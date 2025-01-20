import type markdownit from 'markdown-it';

export function tablePlugin(markdown: markdownit) {
  markdown.renderer.rules.table_open = () => '<div class="overflow-x-auto"><table>';
  markdown.renderer.rules.table_close = () => '</table></div>';
}
