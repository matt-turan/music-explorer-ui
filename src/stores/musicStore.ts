import { defineStore } from 'pinia'
import { ref } from 'vue'
import { searchTracks } from '../services/api'

// Track Interface based on Deezer API response
interface Artist {
  id: number
  name: string
  picture: string
}

interface Album {
  id: number
  title: string
  cover: string
}

interface Track {
  id: number
  title: string
  duration: number
  preview: string
  explicit: boolean
  artist: Artist
  album: Album
}

export const useMusicStore = defineStore('music', () => {
  const tracks = ref<Track[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const search = async (query: string) => {
    loading.value = true
    error.value = null

    try {
      const data = await searchTracks(query)
      tracks.value = data.tracks
    } catch (e) {
      error.value = 'Something went wrong. Please try again.'
    } finally {
      loading.value = false
    }
  }

  const clearResults = () => {
    tracks.value = []
    error.value = null
  }

  return { tracks, loading, error, search, clearResults }
})