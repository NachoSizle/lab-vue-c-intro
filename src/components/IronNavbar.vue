<template>
  <div>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/contact">Go to Contact</RouterLink>
    <RouterLink to="/pokemon/mew">Go to Mew</RouterLink>
    <RouterLink to="/pokemon/lugia">Go to Lugia</RouterLink>
    <RouterLink to="/pokemon/pikachu">Go to Pikachu</RouterLink>
    <RouterLink to="/pokemon/charizard">Go to Charizard</RouterLink>
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