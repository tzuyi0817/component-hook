import { render, screen } from '@testing-library/react';
import { Picker } from '../../index';

describe('React Picker Component', () => {
  it('render component', () => {
    render(<Picker columns={[]} />);

    expect(screen.getByLabelText('Picker')).toBeInTheDocument();
  });

  it('render with loading slot', () => {
    const loadingSlot = 'Loading...';

    render(
      <Picker
        columns={[]}
        loading={true}
        loadingSlot={loadingSlot}
      />,
    );

    expect(screen.getByText(loadingSlot)).toBeInTheDocument();
  });

  it('render with empty slot', () => {
    const emptySlot = 'No Data';

    render(
      <Picker
        columns={[]}
        emptySlot={emptySlot}
      />,
    );

    expect(screen.getByText(emptySlot)).toBeInTheDocument();
  });

  it('render with columns', () => {
    const columns = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
    ];

    render(<Picker columns={columns} />);

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('render multiple columns', () => {
    const columns = Array.from({ length: 2 }, () =>
      Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
    );

    render(<Picker columns={columns} />);

    expect(screen.getAllByText('0').length).toBe(2);
    expect(screen.getAllByText('49').length).toBe(2);
  });

  it('render cascade columns', () => {
    const columns = [
      {
        label: 'Electronics',
        value: 'electronics',
        children: [
          {
            label: 'Mobile',
            value: 'mobile',
            children: [
              { label: 'Smartphone', value: 'smartphone' },
              { label: 'Feature Phone', value: 'feature-phone' },
            ],
          },
          {
            label: 'Computer',
            value: 'computer',
            children: [
              { label: 'Laptop', value: 'laptop' },
              { label: 'Desktop', value: 'desktop' },
            ],
          },
        ],
      },
    ];

    render(<Picker columns={columns} />);

    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('Computer')).toBeInTheDocument();
  });

  it('render with default value', () => {
    const columns = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
    ];

    render(
      <Picker
        columns={columns}
        values={['B']}
      />,
    );

    setTimeout(() => {
      expect(screen.getByText('B')).toHaveStyle('transform: rotate3d(1, 0, 0, 0deg);');
    }, 300);
  });
});
