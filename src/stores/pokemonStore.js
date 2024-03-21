import { defineStore } from "pinia";
import { ref } from "vue";
import { getAllPokemons } from "@/utils/api.js"

export const usePokemonStore = defineStore('pokemon', () => {
  // State
  const counter = ref(0)
  const pageTitle = ref('Pokemon')
  const pokemonList = ref([])
  // Actions
  function increment() {
    counter.value++
  }

  function decrement() {
    counter.value--
  }

  function transformTo(num) {
    counter.value = num
  }

  function changeTitle(newTitle) {
    pageTitle.value = newTitle
  }

  function fetchPokemons() {
    getAllPokemons()
      .then(data => {
        pokemonList.value = data
      })
  }

  return {
    // State
    counter,
    pageTitle,
    pokemonList,
    // Actions
    increment,
    decrement,
    transformTo,
    changeTitle,
    fetchPokemons
  }
});