import { mount } from '@vue/test-utils';
import { Picker } from '../index';

describe('test Picker', () => {
  it('render Picker', () => {
    const wrapper = mount(Picker, {
      props: {
        isShowPicker: true,
        anchor: [],
        type: 'date',
        options: { titleText: 'date selector' },
      },
    });
    expect(wrapper.text()).toMatch('date selector');
  });
});
