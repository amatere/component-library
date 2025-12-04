<template>
  <input
    :value="modelValue"
    :disabled="isDisabled"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="$style.input"
  />
</template>

<script setup lang="ts">
import { IProps, IEmit } from '../types/UiInput.types'; // Импортируем типы

interface Props {
  modelValue: IProps['modelValue'];
  isDisabled?: IProps['isDisabled'];
  placeholder?: IProps['placeholder'];
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  placeholder: '',
});

defineEmits<Emits>();
</script>

<style module lang="scss">
@import '../../styles/colors.scss'; // Импортируем переменные

.input {
  width: 100%; // Пример стиля
  padding: 8px 12px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 4px; // Пример радиуса

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 25%, transparent); // Пример ауры
  }

  &:disabled {
    color: var(--color-gray);
    background-color: var(--color-gray-light);
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--color-gray);
  }
}
</style>