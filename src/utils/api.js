async function getProjects() {
  const data = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  return data.json()
}

async function getAllPokemons() {
  const results = []
  for (let i = 1; i <= 20; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    results.push(await data.json())
  }

  return results
}

export { getAllPokemons, getProjects }