import type { Anime, AnimeDetails } from '@/services/types'
import type { AnimeFilter } from '@/types'

export async function getAnimes(filter?: AnimeFilter) {
  const response = await fetch(`https://gogoanime.consumet.stream/${filter}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json() as Promise<Anime[]>
}

export async function getAnime(id: string) {
  console.log(`https://gogoanime.consumet.stream/anime-details/${id}`)
  const response = await fetch(
    `https://gogoanime.consumet.stream/anime-details/${id}`
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json() as Promise<AnimeDetails>
}
