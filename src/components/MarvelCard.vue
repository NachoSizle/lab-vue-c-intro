<script setup>
  import { computed } from 'vue'

  const emit = defineEmits(['card:clicked', 'card:image:clicked'])

  const props = defineProps({
    isMarvelLicense: Boolean,
    description: String,
    name: String,
    id: Number
  })

  const _imgPath = computed(() => {
    return `src/assets/images/${props.name}.webp`
  })

  function _onCardClick() {
    emit('card:clicked', {
      id: props.id,
      name: props.name
    })
  }

  function _onImageClick(event) {
    emit('card:image:clicked', event)
  }

</script>

<template>
  <section @click.prevent.stop="_onCardClick">
    <img :src="_imgPath" width="100" height="100" @click="_onImageClick"/>
    <p v-if="isMarvelLicense">Marvel License</p>

    <div>
      <p>{{ name }}</p>
      <span>{{ description }}</span>
    </div>
    <br />
    <span>Character ID: {{ id }}</span>
    <br />
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<style scoped>
section {
  width: 200px;
  height: 300px;
  border: 1px solid #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>