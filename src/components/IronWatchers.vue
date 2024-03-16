<script setup>
import { computed, ref, watch } from 'vue'

const pokemonToShow = ref('mew')
const data = ref({})

const pokemonMoves = computed(() => {
  if (data.value.moves) {
    return data.value.moves.map(move => move.move.name).slice(0, 5)
  }
  return []
})

async function _getPokemonData() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToShow.value}`)
  const json = await res.json()
  data.value = json
}

watch(pokemonToShow, () => {
  console.log('pokemonToShow changed:', pokemonToShow.value)
  _getPokemonData()
})

_getPokemonData()

function _showLugia() {
  pokemonToShow.value = 'lugia'
}

</script>

<template>
  <div>
    <h1>ID: {{ data.id }} Name: {{ data.name }}</h1>
    <ul>
      <li v-for="move in pokemonMoves" :key="move">{{ move }}</li>
    </ul>
    <button @click="_showLugia">Show Lugia</button>
  </div>
</template>