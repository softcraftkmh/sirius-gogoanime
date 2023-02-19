export type Anime = {
  animeId: string
  animeImg: string
  animeTitle: string
  animeUrl: string
  releasedDate: string
}

export type EpisodesList = {
  episodeId: string
  episodeNum: string
  episodeUrl: string
}

export type AnimeDetails = {
  animeImg: string
  animeTitle: string
  episodesList: EpisodesList[]
  genres: string[]
  otherNames: string
  releasedDate: string
  status: string
  synopsis: string
  totalEpisodes: string
  type: string
}
