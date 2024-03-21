<script setup>
const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
  {
    path: '/pokemon/:name',
    title: 'Mew',
  },
  {
    path: '/pokemon/lugia',
    title: 'Lugia',
  },
  {
    path: '/pokemon/pikachu',
    title: 'Pikachu',
  },
  {
    path: '/pokemon/charizard',
    title: 'Charizard',
  }
];
</script>

<template>
  <div>
    <RouterLink v-for="route in routes" :key="route.path" :to="route.path">Go to {{ route.title }}</RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 10px;
}

div a {
  text-decoration: none;
  color: black;
}

div a:hover {
  color: violet;
}

.router-link-active {
  font-weight: bold;
  color: red;
}
</style>