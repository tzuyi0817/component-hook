import { render, screen } from '@testing-library/react';
import { TimePicker } from '../../index';

describe('React Time Picker Component', () => {
  it('render component', () => {
    const titleText = 'Time Selector';
    const mackFn = vi.fn();

    render(
      <TimePicker
        show={true}
        title={titleText}
        onClose={mackFn}
      />,
    );
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  it('render with columns type', () => {
    const mackFn = vi.fn();
    const { baseElement } = render(
      <TimePicker
        show={true}
        columnsType={['hour', 'minute']}
        onClose={mackFn}
      />,
    );

    expect(screen.getAllByText('00').length).toBe(2);
    expect(screen.getByText('59')).toBeInTheDocument();
    expect(Array.from(baseElement.querySelectorAll('.chook-picker-column')).length).toBe(2);
  });

  it('render with custom time range', () => {
    const minTime = '16:20:30';
    const maxTime = '16:20:48';
    const mackFn = vi.fn();

    render(
      <TimePicker
        show={true}
        minTime={minTime}
        maxTime={maxTime}
        onClose={mackFn}
      />,
    );

    expect(screen.queryByText('15')).not.toBeInTheDocument();
    expect(screen.queryByText('19')).not.toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('render with label formatter', () => {
    const mackFn = vi.fn();

    render(
      <TimePicker
        show={true}
        formatHourLabel={(value: string) => `${value} hour`}
        formatMinuteLabel={(value: string) => `${value} minute`}
        onClose={mackFn}
      />,
    );

    expect(screen.getByText('0 hour')).toBeInTheDocument();
    expect(screen.getByText('0 minute')).toBeInTheDocument();
  });
});
