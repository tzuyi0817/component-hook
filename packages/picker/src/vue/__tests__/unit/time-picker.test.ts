import { render, screen } from '@testing-library/vue';
import { TimePicker } from '../../index';

describe('Vue Time Picker Component', () => {
  it('render with columns type', () => {
    const { container } = render(TimePicker, {
      props: { columnsType: ['hour', 'minute'] },
    });

    expect(Array.from(container.querySelectorAll('.chook-picker-column')).length).toBe(2);
  });

  it('render with custom time range', () => {
    const minTime = '16:20:30';
    const maxTime = '16:20:48';

    render(TimePicker, {
      props: { minTime, maxTime },
    });

    expect(screen.queryByText('15')).not.toBeInTheDocument();
    expect(screen.queryByText('19')).not.toBeInTheDocument();
    expect(screen.queryByText('30')).toBeVisible();
  });

  it('render with label formatter', () => {
    render(TimePicker, {
      props: {
        formatHourLabel: (value: string) => `${value} hour`,
        formatMinuteLabel: (value: string) => `${value} minute`,
        formatSecondLabel: (value: string) => `${value} second`,
      },
    });

    expect(screen.getByText('0 hour')).toBeVisible();
    expect(screen.getByText('0 minute')).toBeVisible();
    expect(screen.getByText('0 second')).toBeVisible();
  });
});
