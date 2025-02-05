import { screen, render } from '@testing-library/vue';
import { Picker } from '../../index';

describe('Picker Component', () => {
  it('render correctly', () => {
    const titleText = 'Test Selector';

    render(Picker, {
      props: {
        show: true,
        title: titleText,
        columns: [],
      },
    });
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
