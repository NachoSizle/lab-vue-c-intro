<script setup>
import { usePokemonStore } from '@/stores/pokemonStore';

defineProps({
  title: String
});

const emit = defineEmits(['change:title']);

const pokemonStore = usePokemonStore();

function _handleChangeTitle(newTitle) {
  console.log('newTitle', newTitle);
}
</script>

<template>
  <div>
    {{ title }}
    <button @click="pokemonStore.increment">Add One</button>
    <button @click="pokemonStore.decrement">Rest One</button>
    <button @click="_handleChangeTitle('Nacho')">Change title</button>
  </div>
</template>

<style scoped>
div {
  width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
