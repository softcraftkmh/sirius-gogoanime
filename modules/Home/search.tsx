'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AsyncSelect from 'react-select/async'

import type { Anime } from '@/services/types'

const promiseOptions = async (inputValue?: string) => {
  if (!inputValue) return []
  const response = await fetch(
    `https://gogoanime.consumet.stream/search?keyw=${inputValue}`
  )
  const data = (await response.json()) as Anime[]
  const mapped = data.map((d) => ({
    value: d.animeId,
    label: (
      <div className="flex items-center">
        <div className="relative w-10 h-10 mr-4">
          <Image
            className="rounded-md shadow-md "
            src={d.animeImg}
            sizes="40px"
            alt="alt"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <span>{d.animeTitle}</span>
      </div>
    ),
  }))
  return mapped
}

function HomeAnimeSearch() {
  const router = useRouter()
  return (
    <AsyncSelect
      instanceId="anime-search"
      loadOptions={promiseOptions}
      onChange={(v) => v && router.push(`/animes/${v.value}`)}
    />
  )
}

export default HomeAnimeSearch
