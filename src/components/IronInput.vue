<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  title: String,
  type: String,
  value: String
})

const emit = defineEmits(['update:input'])

const inputModel = ref(props.value)

function _updateValue() {
  console.log('inputModel.value', inputModel.value, props.id)
  emit('update:input', inputModel.value, props.id)
}
</script>

<template>
  <label v-if="type === 'checkbox'">
    <input :type="type" v-model="inputModel" @change="_updateValue" />
    {{ title }}
  </label>

  <label v-else-if="type === 'textarea'">
    {{ title }}
    <textarea :type="type" v-model="inputModel" @input="_updateValue" />
  </label>
  
  <label v-else>
    {{ title }}
    <input :type="type" v-model="inputModel" @input="_updateValue" />
  </label>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

input {
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 5px;
}
</style>