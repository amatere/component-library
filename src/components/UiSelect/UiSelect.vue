<template>
  <select
    :value="modelValue"
    :disabled="isDisabled"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    :class="$style.select"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { IProps, IEmit } from '../types/UiSelect.types'; // Импортируем типы

interface Props {
  modelValue: IProps['modelValue'];
  isDisabled?: IProps['isDisabled'];
  options: IProps['options'];
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
});

defineEmits<Emits>();
</script>

<style module lang="scss">
@import '../../styles/colors.scss'; // Импортируем переменные

.select {
  width: 100%; // Пример стиля
  padding: 8px 12px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 4px; // Пример радиуса
  appearance: none; // Убираем стандартный вид (стрелка и т.д.)

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
}
</style>