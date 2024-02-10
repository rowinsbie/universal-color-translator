import { mount } from '@vue/test-utils';
import ColorTranslator from '../../components/ColorTranslator.vue';

describe('ColorTranslator', () => {
  it('translate color correctly', async () => {
    const wrapper = mount(ColorTranslator);
    const input = wrapper.find('input');
    await input.setValue('red');
    await input.trigger('keyup.enter');
    expect(wrapper.vm.getHex()).toBe('#FF0000');
  });

  it('shows error message for invalid input', async () => {
    const wrapper = mount(ColorTranslator);
    const input = wrapper.find('input');
    await input.setValue('<script>alert("XSS")</script>');
    await input.trigger('keyup.enter');
    expect(wrapper.vm.getHex()).toBeNull();
    expect(wrapper.text()).toContain('Security Alert');
  });

  it('shows error message for empty input', async () => {
    const wrapper = mount(ColorTranslator);
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.vm.getHex()).toBeNull();
    expect(wrapper.text()).toContain('Please enter a color name');
  });

  it('shows error message if the input is not on the list of the predefined colors', async () => {
    const wrapper = mount(ColorTranslator);
    const input = wrapper.find('input');
    await input.setValue('testcolor');
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('No data found for ');
  })
});