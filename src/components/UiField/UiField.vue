<template>
  <div :class="$style.field">
    <label :class="$style.label">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}

defineProps<Props>();
</script>

<style module lang="scss">
@import '../../styles/colors.scss'; // Импортируем переменные

.field {
  display: flex;
  flex-direction: column;
  gap: 4px; // Пример отступа между лейблом и слотом
  margin-bottom: 1rem; // Пример отступа снизу
}

.label {
  font-weight: 600; // Пример стиля для лейбла
  color: var(--color-black);
}
</style>