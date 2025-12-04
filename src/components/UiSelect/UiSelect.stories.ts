// src/components/UiSelect/UiSelect.stories.ts
import { Meta, StoryObj } from '@storybook/vue3';
import { UiSelect } from '..'; // Импортируем через index.js
import { html } from '../../helpers'; // Используем твой хелпер
import { ref } from 'vue'; // Для демонстрации v-model

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    modelValue: '',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: false,
  },
  argTypes: {
    isDisabled: { control: { type: 'boolean' } },
    options: { control: { type: 'object' } }, // Массив строк
    // modelValue будет управляться в render
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => {
      // Используем ref для демонстрации v-model
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: html`<UiSelect v-model="value" :options="args.options" :isDisabled="args.isDisabled" />`,
  }),
};

// Пример истории с disabled
export const Disabled: StoryObj<typeof UiSelect> = {
  args: {
    isDisabled: true,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup: () => {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: html`<UiSelect v-model="value" :options="args.options" :isDisabled="args.isDisabled" />`,
  }),
};