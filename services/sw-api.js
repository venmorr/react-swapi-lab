const baseUrl = 'https://swapi.dev/api' 

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
}

export async function getStarshipDetails(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}/`)
  return res.json()
}
