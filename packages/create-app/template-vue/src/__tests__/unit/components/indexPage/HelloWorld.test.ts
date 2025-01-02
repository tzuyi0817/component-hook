import { screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import HelloWorld from '@/components/indexPage/HelloWorld.vue';
import { renderComponent } from '@/__tests__/unit/render';
import { useConfigStore } from '@/stores';
import i18n from '@/plugins/i18n';

describe('HelloWorld component', () => {
  const { t } = i18n.global;

  it('renders the correct content', () => {
    const msg = 'Hello World!';
    const { version } = useConfigStore();

    renderComponent(HelloWorld, { props: { msg } });
    expect(screen.getByRole('heading', { name: msg })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
    expect(screen.getByText(/check out , the official vue \+ vite starter/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /create-vue/i })).toBeInTheDocument();
    expect(screen.getByText(/install in your ide for a better dx/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /volar/i })).toBeInTheDocument();
    expect(screen.getByText(/click on the vite and vue logos to learn more/i)).toBeInTheDocument();
    expect(screen.getByText(version)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('language') })).toBeInTheDocument();
  });

  it('count button interact', async () => {
    renderComponent(HelloWorld, { props: { msg: '' } });
    const countButton = screen.getByRole('button', { name: /count is 0/i });

    await userEvent.click(countButton);
    expect(countButton).toHaveTextContent(/count is 1/i);
    await userEvent.click(countButton);
    await userEvent.click(countButton);
    expect(countButton).toHaveTextContent(/count is 3/i);
  });

  it('link correct attribute', () => {
    renderComponent(HelloWorld, { props: { msg: '' } });
    const createVueLink = screen.getByRole('link', { name: /create-vue/i });
    const volarLink = screen.getByRole('link', { name: /volar/i });

    expect(createVueLink).toHaveAttribute('href', 'https://vuejs.org/guide/quick-start.html#local');
    expect(createVueLink).toHaveAttribute('target', '_blank');
    expect(volarLink).toHaveAttribute('href', 'https://github.com/vuejs/language-tools');
    expect(volarLink).toHaveAttribute('target', '_blank');
  });

  it('locale change interact', async () => {
    renderComponent(HelloWorld, { props: { msg: '' } });
    const localeButton = screen.getByRole('button', { name: t('language') });

    expect(localeButton).toHaveTextContent('English');
    await userEvent.click(localeButton);
    expect(localeButton).toHaveTextContent('中文');
  });
});
