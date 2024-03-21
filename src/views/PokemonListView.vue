<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import PokemonCard from "@/components/PokemonCard.vue"
import { usePokemonStore } from "@/stores/pokemonStore"

const pokemonStore = usePokemonStore()
const { pokemonList } = storeToRefs(pokemonStore)

onMounted(() => {
  pokemonStore.fetchPokemons()
})
</script>

<template>
  <h1>Home View!</h1>
  <h2>Pokemon Count: {{ pokemonList.length }}</h2>
  <div class="pokemon-list" v-show="pokemonList.length">
    <PokemonCard v-for="pokemon in pokemonList" :key="pokemon?.id" v-bind="pokemon">
      <template #footer>
        <RouterLink :to="`/pokemon/${pokemon?.name}`">View Abilities</RouterLink>
      </template>
    </PokemonCard>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pokemon-list {
  margin: 0 auto;
  max-width: 632px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 0;

  overflow-x: scroll;
}
</style>