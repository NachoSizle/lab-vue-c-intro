<script setup>
defineProps({
  disabled: Boolean,
  title: String,
  myClass: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'danger', 'warning'].includes(value)
  }
})
</script>

<template>
 <button :disabled="disabled" :class="myClass" @click="handleClick">{{ title }}</button>
</template>

<style scoped>
*:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.danger {
  background-color: var(--color-button-danger);
}

.warning {
  background-color: var(--color-button-warning);
}
</style>