import { screen, render } from '@testing-library/vue';
import Picker from '../../index';

describe('Picker Component', () => {
  it('render correctly', () => {
    const titleText = 'date selector';

    render(Picker, {
      props: {
        isShowPicker: true,
        anchor: [],
        type: 'date',
        options: { titleText },
      },
    });
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
