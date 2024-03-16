<script setup>
import { ref } from "vue"
import { onBeforeRouteUpdate, useRoute } from "vue-router"

const route = useRoute()
const data = ref({})
console.log(route)

async function _getPokemonData(pokemonName) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const json = await res.json()
  data.value = json
}

_getPokemonData(route.params.pokemonName)

onBeforeRouteUpdate((to, from) => {
  console.log('to:', to)
  console.log('from:', from)
  _getPokemonData(to.params.pokemonName)
})
</script>

<template>
  <div>
    <h1>Pokemon Detail View!</h1>
    <h4>ID: {{ data.id }} Name: {{ data.name }}</h4>
    <div>
      <RouterLink :to="{ name: 'Pokemon Abilities' }">Abilities</RouterLink>
      <RouterLink :to="{ name: 'Pokemon Base Stats' }">Base Stats</RouterLink>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>