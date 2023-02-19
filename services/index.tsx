import type { Anime, AnimeDetails } from '@/services/types'
import type { AnimeFilter } from '@/types'

export async function getAnimes(filter?: AnimeFilter, search?: string) {
  console.log('craf1er` ~ file: index.tsx:5 ~ getAnimes ~ filter', filter)
  console.log('craf1er` ~ file: index.tsx:5 ~ getAnimes ~ search', search)
  const subdirectory = filter || `search?keyw=${search}`
  const response = await fetch(
    `https://gogoanime.consumet.stream/${subdirectory}`
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json() as Promise<Anime[]>
}

export async function getAnime(id: string) {
  const response = await fetch(
    `https://gogoanime.consumet.stream/anime-details/${id}`
  )
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json() as Promise<AnimeDetails>
}
