import type { Anime } from '@/services/types'

export async function getAnimes() {
  const response = await fetch('https://gogoanime.consumet.stream/popular')
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json() as Promise<Anime[]>
}

export async function getAnime(id: string) {
  const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}
