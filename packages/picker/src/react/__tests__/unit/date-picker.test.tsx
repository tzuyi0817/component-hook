import { render, screen } from '@testing-library/react';
import { DatePicker } from '../../index';

describe('React Date Picker Component', () => {
  it('render with columns type', () => {
    const date = new Date();

    render(<DatePicker columnsType={['year', 'month']} />);

    expect(screen.getByText(date.getFullYear())).toBeInTheDocument();
    expect(screen.getByText(date.getMonth() + 1)).toBeVisible();
  });

  it('render with custom date range', () => {
    const minDate = new Date(2021, 0, 1);
    const maxDate = new Date(2023, 11, 31);

    render(
      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
      />,
    );

    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.queryByText('2020')).not.toBeInTheDocument();
    expect(screen.queryByText('2024')).not.toBeInTheDocument();
  });

  it('render with label formatter', () => {
    render(
      <DatePicker
        formatYearLabel={(value: string) => `${value} year`}
        formatMonthLabel={(value: string) => `${value} month`}
        formatDayLabel={(value: string) => `${value} day`}
      />,
    );

    expect(screen.getByText(`${new Date().getFullYear()} year`)).toBeInTheDocument();
    expect(screen.getByText(`${new Date().getMonth() + 1} month`)).toBeInTheDocument();
    expect(screen.getByText(`${new Date().getDate()} day`)).toBeInTheDocument();
  });
});
