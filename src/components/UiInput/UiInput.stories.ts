// src/components/UiInput/UiInput.stories.ts
import { Meta, StoryObj } from '@storybook/vue3';
import { UiInput } from '..'; 
import { html } from '../../helpers'; 
import { ref } from 'vue'; 

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    modelValue: '',
    placeholder: 'Введите текст...',
    isDisabled: false,
  },
  argTypes: {
    isDisabled: { control: { type: 'boolean' } },
    placeholder: { control: { type: 'text' } },
    // modelValue будет управляться в render
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => {
      // Используем ref для демонстрации v-model
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: html`<UiInput v-model="value" :placeholder="args.placeholder" :isDisabled="args.isDisabled" />`,
  }),
};

// Пример истории с disabled
export const Disabled: StoryObj<typeof UiInput> = {
  args: {
    isDisabled: true,
    placeholder: 'Этот инпут отключен...',
  },
  render: (args) => ({
    components: { UiInput },
    setup: () => {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: html`<UiInput v-model="value" :placeholder="args.placeholder" :isDisabled="args.isDisabled" />`,
  }),
};