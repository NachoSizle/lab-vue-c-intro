async function getProjects() {
  const data = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  return data.json()
}

export { getProjects }