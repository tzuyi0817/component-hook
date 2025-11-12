import { render, screen } from '@testing-library/react';
import { TimePicker } from '../../index';

describe('React Time Picker Component', () => {
  it('render with columns type', () => {
    render(<TimePicker columnsType={['hour', 'minute']} />);

    expect(screen.getAllByLabelText('Picker column').length).toBe(2);
  });

  it('render with custom time range', () => {
    const minTime = '16:20:30';
    const maxTime = '16:20:48';

    render(
      <TimePicker
        minTime={minTime}
        maxTime={maxTime}
      />,
    );

    expect(screen.queryByText('15')).not.toBeInTheDocument();
    expect(screen.queryByText('19')).not.toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('render with label formatter', () => {
    render(
      <TimePicker
        formatHourLabel={(value: string) => `${value} hour`}
        formatMinuteLabel={(value: string) => `${value} minute`}
        formatSecondLabel={(value: string) => `${value} second`}
      />,
    );

    expect(screen.getByText('0 hour')).toBeInTheDocument();
    expect(screen.getByText('0 minute')).toBeInTheDocument();
    expect(screen.getByText('0 second')).toBeVisible();
  });
});
