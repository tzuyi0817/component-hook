import { screen, render } from '@testing-library/react';
import Picker from '../../index';

describe('Picker Component', () => {
  it('render correctly', () => {
    const titleText = 'date selector';
    const mackFn = vi.fn();

    render(
      <Picker
        isShowPicker={true}
        anchor={[]}
        type="date"
        options={{ titleText }}
        onClose={mackFn}
        onChangeAnchor={mackFn}
      />,
    );
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
