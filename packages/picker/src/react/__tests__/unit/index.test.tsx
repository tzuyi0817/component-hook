import { screen, render } from '@testing-library/react';
import { Picker } from '../../index';

describe('React Picker Component', () => {
  it('render correctly', () => {
    const titleText = 'Test Selector';
    const mackFn = vi.fn();

    render(
      <Picker
        show={true}
        title={titleText}
        columns={[]}
        onClose={mackFn}
      />,
    );
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
