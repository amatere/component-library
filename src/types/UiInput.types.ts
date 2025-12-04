// src/components/types/UiInput.types.ts

export interface IProps {
  modelValue: string;
  isDisabled: boolean;
  placeholder: string;
}

export interface IEmit {
  'update:modelValue': [value: string];
}