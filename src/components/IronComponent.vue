<script setup>
import { computed, ref, reactive } from 'vue'
import MarvelCard from '@/components/MarvelCard.vue'

const props = defineProps({
  isAdmin: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
  },
  title: String,
  msg: {
    type: String,
    default: 'Nacho',
    validator: (value) => {
      return value.length < 10
    }
  }
})

//const marvelCharacters = ['ironman', 'thor', 'hulk', 'spiderman', 'captain america', 'thor']
const teamSelected = ref('one')
const marvelCharacters = reactive([
  {
    id: 0,
    name: 'ironman',
    team: 'one',
    description: 'IronMan is a fictional character'
  },
  {
    id: 1,
    name: 'thor',
    team: 'two',
    description: 'Thor is a fictional character'
  },
])
/*
const teamOne = reactive(marvelCharacters.filter(character => character.team === 'one')
const teamTwo = reactive(marvelCharacters.filter(character => character.team === 'two')
*/
const teamToShow = computed(() => {
  return marvelCharacters.filter(character => character.team === teamSelected.value)
})

function _addCharacterTeamOne() {
  marvelCharacters.push({
    id: marvelCharacters.length,
    name: 'spiderman',
    team: 'one',
    description: 'Spiderman is a fictional character'
  })
}

function _addCharacterTeamTwo() {
  marvelCharacters.push({
    id: marvelCharacters.length,
    name: 'hulk',
    team: 'two',
    description: 'Hulk is a fictional character'
  })
}

function _changeTeamToShow() {
  teamSelected.value = teamSelected.value === 'one' ? 'two' : 'one'
}

</script>

<template>
  <div :class="customClass" @click.prevent="_handleClick">
    <button @click="_changeTeamToShow">Change Team</button>
    <button @click="_addCharacterTeamOne">Add to One</button>
    <button @click="_addCharacterTeamTwo">Add to Two</button>
    <div class="teams">
      <ul>
        <li>Team {{ teamSelected }}</li>
        <li v-for="(character, index) in teamToShow" :key="index"
          :class="character.name">
          <span>{{ character.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
div {
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;

  display: flex;
  flex-direction: column;
}

.teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

ul {
  list-style: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}

label {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

.slotted {
  color: red;
}
</style>
