'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import AsyncSelect from 'react-select/async'

import Button from '@/design-system/base/button'
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
  const [value, setValue] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) {
      setIsMenuOpen(false)
      router.push(`/?search=${value}`)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-[1fr,auto] gap-2">
      <AsyncSelect
        inputValue={value}
        onInputChange={(v, a) => {
          if (a.action === 'input-change') {
            setIsMenuOpen(true)
            setValue(v)
          }
        }}
        instanceId="anime-search"
        loadOptions={promiseOptions}
        onChange={(v) => {
          if (!v) return
          setValue(v.value)
          setIsMenuOpen(false)
          router.push(`/animes/${v.value}`)
        }}
        placeholder="Search anime"
        menuIsOpen={isMenuOpen}
        onBlur={() => setIsMenuOpen(false)}
      />
      <Button type="submit">Search</Button>
    </form>
  )
}

export default HomeAnimeSearch
