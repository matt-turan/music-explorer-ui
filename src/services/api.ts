// const BASE_URL = 'http://localhost:8000/api'
const BASE_URL = 'https://musicexplorerapi.scarletwingscreative.com/api'

export const searchTracks = async (query: string) => {
  const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`)
  return await response.json()
}

export const getArtist = async (id: number) => {
  const response = await fetch(`${BASE_URL}/artist/${id}`)
  return await response.json()
}

export const getArtistAlbums = async (id: number) => {
  const response = await fetch(`${BASE_URL}/artist/${id}/albums`)
  return await response.json()
}

export const getAlbum = async (id: number) => {
  const response = await fetch(`${BASE_URL}/album/${id}`)
  return await response.json()
}

export const getTrack = async (id: number) => {
  const response = await fetch(`${BASE_URL}/track/${id}`)
  return await response.json()
}