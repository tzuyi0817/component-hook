import { screen, render } from '@testing-library/vue';
import { TimePicker } from '../../index';

describe('Vue Time Picker Component', () => {
  it('render component', () => {
    const titleText = 'Time Selector';

    render(TimePicker, {
      props: { show: true, title: titleText },
    });
    expect(screen.getByText(titleText)).toBeVisible();
  });

  it('render with columns type', () => {
    const { baseElement } = render(TimePicker, {
      props: { show: true, columnsType: ['hour', 'minute'] },
    });

    expect(screen.getAllByText('00').length).toBe(2);
    expect(screen.getByText('59')).toBeVisible();
    expect(Array.from(baseElement.querySelectorAll('.chook-picker-column')).length).toBe(2);
  });

  it('render with custom time range', () => {
    const minTime = '16:20:30';
    const maxTime = '16:20:48';

    render(TimePicker, {
      props: { show: true, minTime, maxTime },
    });

    expect(screen.queryByText('15')).not.toBeInTheDocument();
    expect(screen.queryByText('19')).not.toBeInTheDocument();
    expect(screen.queryByText('30')).toBeVisible();
  });

  it('render with label formatter', () => {
    render(TimePicker, {
      props: {
        show: true,
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
