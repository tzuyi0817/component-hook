import { screen, render } from '@testing-library/react';
import { DatePicker } from '../../index';

describe('React Date Picker Component', () => {
  it('render component', () => {
    const titleText = 'Date Selector';
    const mackFn = vi.fn();

    render(
      <DatePicker
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
      <DatePicker
        show={true}
        columnsType={['year', 'month']}
        onClose={mackFn}
      />,
    );

    expect(screen.getByText(new Date().getFullYear())).toBeInTheDocument();
    expect(Array.from(baseElement.querySelectorAll('.chook-picker-column')).length).toBe(2);
  });

  it('render with custom date range', () => {
    const minDate = new Date(2021, 0, 1);
    const maxDate = new Date(2023, 11, 31);
    const mackFn = vi.fn();

    render(
      <DatePicker
        show={true}
        minDate={minDate}
        maxDate={maxDate}
        onClose={mackFn}
      />,
    );

    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.queryByText('2020')).not.toBeInTheDocument();
    expect(screen.queryByText('2024')).not.toBeInTheDocument();
  });

  it('render with label formatter', () => {
    const mackFn = vi.fn();

    render(
      <DatePicker
        show={true}
        formatYearLabel={(value: string) => `${value} year`}
        formatMonthLabel={(value: string) => `${value} month`}
        formatDayLabel={(value: string) => `${value} day`}
        onClose={mackFn}
      />,
    );

    expect(screen.getByText(`${new Date().getFullYear()} year`)).toBeInTheDocument();
    expect(screen.getByText(`${new Date().getMonth() + 1} month`)).toBeInTheDocument();
    expect(screen.getByText(`${new Date().getDate()} day`)).toBeInTheDocument();
  });
});
