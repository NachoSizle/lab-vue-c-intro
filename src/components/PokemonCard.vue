<script setup>
  defineProps({
    id: Number,
    sprites: Object,
    name: String,
  })
</script>

<template>
  <section>
    <img :src="sprites?.front_default" />

    <div>
      <p>{{ name }}</p>
      <span>Character ID: {{ id }}</span>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<style scoped>
section {
  min-width: 200px;
  width: 200px;
  height: 320px;
  border: 1px solid #d3cfcf;
  border-radius: 8px;
  box-shadow: inset 0px 0px 8px 1px #d3cfcf;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

section img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #d3cfcf;
}

section div {
  width: 100%;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: flex-start;
}

section footer {
  width: 100%;
  padding: 4px 12px;
}
</style>