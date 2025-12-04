// src/components/types/UiSelect.types.ts

export interface IProps {
  modelValue: string;
  isDisabled: boolean;
  options: string[];
}

export interface IEmit {
  'update:modelValue': [value: string];
}