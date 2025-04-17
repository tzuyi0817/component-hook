import { render, screen } from '@testing-library/react';
import { Picker } from '../../index';

describe('React Picker Component', () => {
  it('render component', () => {
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

  it('render with loading slot', () => {
    const loadingSlot = 'Loading...';
    const mackFn = vi.fn();

    render(
      <Picker
        show={true}
        columns={[]}
        loading={true}
        loadingSlot={loadingSlot}
        onClose={mackFn}
      />,
    );
    expect(screen.getByText(loadingSlot)).toBeInTheDocument();
  });

  it('render with empty slot', () => {
    const emptySlot = 'No Data';
    const mackFn = vi.fn();

    render(
      <Picker
        show={true}
        columns={[]}
        emptySlot={emptySlot}
        onClose={mackFn}
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
    const mackFn = vi.fn();

    render(
      <Picker
        show={true}
        columns={columns}
        onClose={mackFn}
      />,
    );

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('render multiple columns', () => {
    const columns = Array.from({ length: 2 }, () =>
      Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
    );
    const mackFn = vi.fn();

    render(
      <Picker
        show={true}
        columns={columns}
        onClose={mackFn}
      />,
    );

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
    const mackFn = vi.fn();

    render(
      <Picker
        show={true}
        columns={columns}
        onClose={mackFn}
      />,
    );

    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('Computer')).toBeInTheDocument();
  });

  it('render with default value', async () => {
    const columns = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
    ];
    const mackFn = vi.fn();

    render(
      <Picker
        show={true}
        columns={columns}
        values={['B']}
        onClose={mackFn}
      />,
    );

    setTimeout(() => {
      expect(screen.getByText('B')).toHaveStyle('transform: rotate3d(1, 0, 0, 0deg);');
    }, 300);
  });
});
