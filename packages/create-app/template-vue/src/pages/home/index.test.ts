import { screen } from '@testing-library/vue';
import Home from '@/pages/home/index.vue';
import { renderComponent } from '@/test-utils';

describe('home page', () => {
  it('renders the correct content', () => {
    renderComponent(Home);
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    const vueLink = screen.getByLabelText(/vue link/i);

    expect(viteLink).toHaveAttribute('href', 'https://vitejs.dev');
    expect(viteLink).toHaveAttribute('target', '_blank');

    expect(vueLink).toHaveAttribute('href', 'https://vuejs.org/');
    expect(vueLink).toHaveAttribute('target', '_blank');
  });
});
