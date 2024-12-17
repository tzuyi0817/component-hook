export function useMarkdownGroup() {
  window.addEventListener('click', (event: Event) => {
    const element = event.target as HTMLElement;

    if (!element.classList.contains('group-label')) return;
    const group = element.parentElement;

    if (!group) return;
    const index = Array.from(group.children).indexOf(element);

    if (index < 0) return;
    const blocks = group.parentElement?.querySelector('.group-blocks');

    if (!blocks) return;
    const block = blocks.children[index];

    if (block.classList.contains('active')) return;
    const activeBlock = blocks.querySelector('.active');

    activeBlock?.classList.remove('active');
    block.classList.add('active');
  });
}
