// src/components/UiField/UiField.stories.ts
import { Meta, StoryObj } from '@storybook/vue3';
import { UiField, UiInput, UiSelect } from '..'; 
import { html } from '../../helpers'; 
import { ref } from 'vue'; 

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'Пример',
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
};

export default meta;

export const WithInput: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup: () => {
      const inputValue = ref('');
      return { args, inputValue };
    },
    template: html`
      <UiField :label="args.label">
        <UiInput v-model="inputValue" placeholder="Введите что-нибудь..." />
      </UiField>
    `,
  }),
};

export const WithSelect: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup: () => {
      const selectValue = ref('');
      const options = ['Опция 1', 'Опция 2', 'Опция 3'];
      return { args, selectValue, options };
    },
    template: html`
      <UiField :label="args.label">
        <UiSelect v-model="selectValue" :options="options" />
      </UiField>
    `,
  }),
};