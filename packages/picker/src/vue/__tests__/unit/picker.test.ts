import { render, screen } from '@testing-library/vue';
import { Picker } from '../../index';

describe('Vue Picker Component', () => {
  it('render component', () => {
    const { container } = render(Picker, {
      props: { columns: [] },
    });
    const root = container.querySelector('.chook-picker-container');

    expect(root).toBeInTheDocument();
  });

  it('render with loading slot', () => {
    const loadingSlotText = 'Loading...';

    render(Picker, {
      props: { columns: [], loading: true },
      slots: { loading: loadingSlotText },
    });

    expect(screen.getByText(loadingSlotText)).toBeInTheDocument();
  });

  it('render with empty slot', () => {
    const emptySlotText = 'No Data';

    render(Picker, {
      props: { columns: [] },
      slots: { empty: emptySlotText },
    });
    expect(screen.getByText(emptySlotText)).toBeInTheDocument();
  });

  it('render with columns', () => {
    const columns = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
    ];

    render(Picker, { props: { columns } });

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('render multiple columns', () => {
    const columns = Array.from({ length: 2 }, () =>
      Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
    );

    render(Picker, { props: { columns } });

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

    render(Picker, { props: { columns } });

    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('Computer')).toBeInTheDocument();
  });

  it('render with customize columns', () => {
    const columns = [
      { langType: 0, code: 'en', original: 'English' },
      { langType: 1, code: 'cn', original: '中文' },
      { langType: 2, code: 'vi', original: 'Tiếng Việt' },
      { langType: 3, code: 'jp', original: '日本語' },
      { langType: 4, code: 'kr', original: '한국어' },
    ];

    render(Picker, {
      props: { columns, columnsFieldNames: { label: 'original', value: 'code' } },
    });

    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('selected with default value', () => {
    const columns = [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
    ];

    render(Picker, { props: { columns, modelValue: ['B'] } });
    // Wait for the animation to finish
    setTimeout(() => {
      expect(screen.getByText('B')).toHaveStyle('transform: rotate3d(1, 0, 0, 0deg);');
    }, 300);
  });
});
