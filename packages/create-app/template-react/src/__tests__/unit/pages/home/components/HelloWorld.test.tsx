import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '@/__tests__/unit/render';
import { HelloWorld } from '@/pages/home/components/hello-world';
import i18n from '@/plugins/i18n';
import { useConfigStore } from '@/stores';

describe('home page HelloWorld component', () => {
  const { t } = i18n;

  it('renders the correct content', () => {
    const title = 'Hello World!';
    const { appMeta } = useConfigStore.getState();

    renderComponent(<HelloWorld title={title} />);
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/src\/app\.tsx/i)).toBeInTheDocument();
    expect(screen.getByText(/save to test hmr/i)).toBeInTheDocument();
    expect(screen.getByText(/click on the vite and react logos to learn more/i)).toBeInTheDocument();
    expect(screen.getByText(`${appMeta.version} - Built at: ${appMeta.builtAt.toLocaleString()}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('language') })).toBeInTheDocument();
  });

  it('count button interact', async () => {
    renderComponent(<HelloWorld />);
    const countButton = screen.getByRole('button', { name: /count is 0/i });

    await userEvent.click(countButton);
    expect(countButton).toHaveTextContent(/count is 1/i);
    await userEvent.click(countButton);
    await userEvent.click(countButton);
    expect(countButton).toHaveTextContent(/count is 3/i);
  });

  it('locale change interact', async () => {
    renderComponent(<HelloWorld />);
    const localeButton = screen.getByRole('button', { name: t('language') });

    expect(localeButton).toHaveTextContent('English');
    await userEvent.click(localeButton);
    expect(localeButton).toHaveTextContent('中文');
  });
});
