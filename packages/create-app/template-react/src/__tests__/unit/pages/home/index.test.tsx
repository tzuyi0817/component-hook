import { screen } from '@testing-library/react';
import { renderComponent } from '@/__tests__/unit/render';
import { Home } from '@/pages/home';

describe('home page', () => {
  it('renders the correct content', () => {
    renderComponent(<Home />);
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    const reactLink = screen.getByLabelText(/react link/i);

    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    expect(viteLink).toHaveAttribute('rel', 'noreferrer');
    expect(viteLink).toHaveAttribute('target', '_blank');

    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(reactLink).toHaveAttribute('rel', 'noreferrer');
    expect(reactLink).toHaveAttribute('target', '_blank');
  });
});
