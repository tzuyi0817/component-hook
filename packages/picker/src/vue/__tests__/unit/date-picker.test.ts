import { screen, render } from '@testing-library/vue';
import { DatePicker } from '../../index';

describe('Vue Date Picker Component', () => {
  it('render component', () => {
    const titleText = 'Date Selector';

    render(DatePicker, {
      props: { show: true, title: titleText },
    });
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  it('render with columns type', () => {
    const { baseElement } = render(DatePicker, {
      props: { show: true, columnsType: ['year', 'month'] },
    });

    expect(screen.getByText(new Date().getFullYear())).toBeVisible();
    expect(Array.from(baseElement.querySelectorAll('.chook-picker-column')).length).toBe(2);
  });

  it('render with custom date range', () => {
    const minDate = new Date(2021, 0, 1);
    const maxDate = new Date(2023, 11, 31);

    render(DatePicker, {
      props: { show: true, minDate, maxDate },
    });

    expect(screen.getByText('2021')).toBeVisible();
    expect(screen.getByText('2023')).toBeVisible();
    expect(screen.queryByText('2020')).not.toBeInTheDocument();
    expect(screen.queryByText('2024')).not.toBeInTheDocument();
  });

  it('render with label formatter', () => {
    render(DatePicker, {
      props: {
        show: true,
        formatYearLabel: (value: string) => `${value} year`,
        formatMonthLabel: (value: string) => `${value} month`,
        formatDayLabel: (value: string) => `${value} day`,
      },
    });

    expect(screen.getByText(`${new Date().getFullYear()} year`)).toBeVisible();
    expect(screen.getByText(`${new Date().getMonth() + 1} month`)).toBeVisible();
    expect(screen.getByText(`${new Date().getDate()} day`)).toBeVisible();
  });
});
