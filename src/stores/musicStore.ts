import { defineStore } from 'pinia'
import { ref } from 'vue'
import { searchTracks } from '../services/api'

export const useMusicStore = defineStore('music', () => {
  const tracks = ref([])
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

  return { tracks, loading, error, search }
})