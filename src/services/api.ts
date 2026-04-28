const BASE_URL = 'http://localhost:8000/api'

export const searchTracks = async (query: string) => {
  const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`)
  return response.json()
}

export const getArtist = async (id: number) => {
  const response = await fetch(`${BASE_URL}/artist/${id}`)
  return response.json()
}

export const getArtistAlbums = async (id: number) => {
  const response = await fetch(`${BASE_URL}/artist/${id}/albums`)
  return response.json()
}

export const getAlbum = async (id: number) => {
  const response = await fetch(`${BASE_URL}/album/${id}`)
  return response.json()
}

export const getTrack = async (id: number) => {
  const response = await fetch(`${BASE_URL}/track/${id}`)
  return response.json()
}